import type { Contentblock, QueryContentblockArgs, QueryInput } from 'generated/graphql';
import type { GraphqlContext } from 'types/common';
import { DateKit } from 'utils/dateKit';

import ContentblockModel from './model';

export default {
  Query: {
    async contentblocks(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<Contentblock[]> {
      const contentblockModel = new ContentblockModel(contextValue.lang);
      return contentblockModel.getItems(queryInput);
    },
    async ncontentblocks(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<{ count: number }> {
      const contentblockModel = new ContentblockModel(contextValue.lang);
      return contentblockModel.countItems(queryInput);
    },
    async contentblock(
      parent,
      { id }: QueryContentblockArgs,
      contextValue: GraphqlContext,
      info
    ): Promise<Contentblock> {
      const contentblockModel = new ContentblockModel(contextValue.lang);
      return contentblockModel.getItem(id);
    },
  },
  Contentblock: {
    created_at(parent: Contentblock, args, contextValue: GraphqlContext, info): string {
      return new Date(parent.created_at).toISOString();
    },
    updated_at(parent: Contentblock, args, contextValue: GraphqlContext, info): string {
      return new Date(parent.updated_at).toISOString();
    },
    created_since(parent: Contentblock, args, contextValue: GraphqlContext, info): string {
      return DateKit.fromNow(new Date(parent.created_at), contextValue.lang, true);
    },
  },
};
