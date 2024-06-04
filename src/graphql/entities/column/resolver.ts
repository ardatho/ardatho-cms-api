import type { Block, Column, QueryColumnArgs, QueryInput } from 'generated/graphql';
import type { GraphqlContext } from 'types/common';
import { DateKit } from 'utils/dateKit';

import BlockModel from '../block/model';
import ColumnModel from './model';

export default {
  Query: {
    async columns(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<Column[]> {
      const columnModel = new ColumnModel(contextValue.lang);
      return columnModel.getItems(queryInput);
    },
    async ncolumns(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<{ count: number }> {
      const columnModel = new ColumnModel(contextValue.lang);
      return columnModel.countItems(queryInput);
    },
    async column(
      parent,
      { id }: QueryColumnArgs,
      contextValue: GraphqlContext,
      info
    ): Promise<Column> {
      const columnModel = new ColumnModel(contextValue.lang);
      return columnModel.getItem(id);
    },
  },
  Column: {
    created_at(parent: Column, args, contextValue: GraphqlContext, info): string {
      return new Date(parent.created_at).toISOString();
    },
    updated_at(parent: Column, args, contextValue: GraphqlContext, info): string {
      return new Date(parent.updated_at).toISOString();
    },
    created_since(parent: Column, args, contextValue: GraphqlContext, info): string {
      return DateKit.fromNow(new Date(parent.created_at), contextValue.lang, true);
    },
    async blocks(
      parent: Column,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<Block[]> {
      queryInput.filter = `parent_id:${parent.id},parent_module:column`;
      queryInput.sort = 'rank';
      queryInput.order = 'asc';
      const blockModel = new BlockModel(contextValue.lang);
      return blockModel.getItems(queryInput);
    },
  },
};
