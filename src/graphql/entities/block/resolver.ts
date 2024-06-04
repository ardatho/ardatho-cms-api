import type { Block, Contentblock, QueryBlockArgs, QueryInput } from 'generated/graphql';
import type { GraphqlContext } from 'types/common';
import { DateKit } from 'utils/dateKit';

import ContentblockModel from '../contentblock/model';
import BlockModel from './model';

export default {
  Query: {
    async blocks(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<Block[]> {
      const blockModel = new BlockModel(contextValue.lang);
      return blockModel.getItems(queryInput);
    },
    async nblocks(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<{ count: number }> {
      const blockModel = new BlockModel(contextValue.lang);
      return blockModel.countItems(queryInput);
    },
    async block(
      parent,
      { id }: QueryBlockArgs,
      contextValue: GraphqlContext,
      info
    ): Promise<Block> {
      const blockModel = new BlockModel(contextValue.lang);
      return blockModel.getItem(id);
    },
  },
  Block: {
    created_since(parent: Block, args, contextValue: GraphqlContext, info): string {
      return DateKit.fromNow(new Date(parent.created_at), contextValue.lang, true);
    },
    async contentblocks(
      parent: Block,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<Contentblock[]> {
      queryInput.filter = `block_id:${parent.id}`;
      queryInput.sort = 'rank';
      queryInput.order = 'asc';
      const contentblockModel = new ContentblockModel(contextValue.lang);
      return contentblockModel.getItems(queryInput);
    },
  },
};
