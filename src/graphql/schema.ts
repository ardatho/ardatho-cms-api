import { makeExecutableSchema } from '@graphql-tools/schema';
import { applyMiddleware } from 'graphql-middleware';
import { allow, shield } from 'graphql-shield';

import { typeDefs } from './gqlSchemaTypes';
import { permissions } from './permissions';
import { resolvers } from './resolvers';

// Create the base executable schema
let schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

schema = applyMiddleware(
  schema,
  shield(permissions, { fallbackRule: allow, allowExternalErrors: true })
);

export { schema };
