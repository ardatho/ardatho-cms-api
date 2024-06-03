import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import * as bodyParser from 'body-parser';
import Config from 'config';
import * as cors from 'cors';
import * as express from 'express';
import { type GraphQLFormattedError } from 'graphql';
import { createApollo4QueryValidationPlugin } from 'graphql-constraint-directive/apollo4';
import * as depthLimit from 'graphql-depth-limit';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';
import { queryLogger } from 'graphql/plugins/queryLogger';
import * as http from 'http';
import * as jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import knex from './config/knex';
import { schema } from './graphql/schema';
import { type GraphqlContext } from './types/common';

const apiUrl =
  process.env.NODE_ENV === 'production' ? Config.BASE_URL : `${Config.BASE_URL}:${Config.PORT}`;

export default async function main() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer<GraphqlContext>({
    schema,
    csrfPrevention: false,
    introspection: true,
    allowBatchedHttpRequests: true,
    plugins: [
      queryLogger,
      ApolloServerPluginLandingPageLocalDefault({
        embed: true,
        // TODO: Add more query example inside the following property "document", see related documentation here: https://www.apollographql.com/docs/graphos/explorer/embed-explorer
        document: ``,
        variables: {},
        headers: { Authorization: 'Bearer xxxx' },
      }),
      ApolloServerPluginDrainHttpServer({ httpServer }),
      createApollo4QueryValidationPlugin({ schema }),
    ],
    validationRules: [depthLimit(7)], // 7 for 3 chaining of aggregating/hits query + 1 for metadata external call
    formatError: (err: GraphQLFormattedError) => {
      console.error(err);
      return err;
    },
  });
  await server.start();

  app.use('/health', (_, res) => res.json('OK'));

  app.use('/voyager', voyagerMiddleware({ endpointUrl: '/' }));

  /** Auth verification */
  app.use(
    '/',
    cors<cors.CorsRequest>(),
    // 50mb is the limit that `startStandaloneServer` uses, but you may configure this to suit your needs
    bodyParser.json({ limit: '50mb' }),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: async ({ req }) => {
        const requestId: string = (req.headers['x-request-id'] as string) || uuidv4();
        const bearer = req.headers.authorization || '';
        const [, token] = bearer.split(' ');
        let user = null;
        const lang = req.headers.language || 'en';
        try {
          user =
            token !== 'null' ? (jwt.verify(token, process.env.JWT_SECRET) as jwt.JwtPayload) : null;
        } catch (error) {
          // console.error(error);
        }
        return {
          requestId,
          token,
          user,
          knex,
          lang,
        };
      },
    })
  );

  await new Promise<void>((resolve) => httpServer.listen({ port: Config.PORT }, resolve));
  console.log(`🚀 Server ready at ${apiUrl}`);
}

main();
