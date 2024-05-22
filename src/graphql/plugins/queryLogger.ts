import type { ApolloServerPlugin } from '@apollo/server';
import { type GraphqlContext, QueryName } from 'types/common';

export const queryLogger: ApolloServerPlugin<GraphqlContext> = {
  // Fires whenever a GraphQL request is received from a client.
  async requestDidStart(requestContext) {
    // Avoid logging IntrospectionQuery because this can flood logging when you use the playground
    if (!requestContext.request?.query?.includes(QueryName.IntrospectionQuery)) {
      console.log(
        `Request started with Id: ${requestContext.contextValue.requestId} \n Query:\n`,
        requestContext.request?.query?.trim()
      );
      if (
        requestContext.request.variables &&
        Object.keys(requestContext.request.variables).length
      ) {
        console.log('Variables:\n', requestContext.request.variables);
      }
    }
    return {
      async willSendResponse(requestContext) {
        if (!requestContext.request?.query?.includes(QueryName.IntrospectionQuery)) {
          console.log('Will send response for requestId: ', requestContext.contextValue.requestId);
        }
      },
    };
  },
};
