import type { Column, QueryInput, QueryRowArgs, Row } from 'generated/graphql';
import type { GraphqlContext } from 'types/common';
import { DateKit } from 'utils/dateKit';

import ColumnModel from '../column/model';
import RowModel from '../row/model';

export default {
  Query: {
    async rows(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<Row[]> {
      const rowModel = new RowModel(contextValue.lang);
      return rowModel.getItems(queryInput);
    },
    async nrows(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<{ count: number }> {
      const rowModel = new RowModel(contextValue.lang);
      return rowModel.countItems(queryInput);
    },
    async row(parent, { id }: QueryRowArgs, contextValue: GraphqlContext, info): Promise<Row> {
      const rowModel = new RowModel(contextValue.lang);
      return rowModel.getItem(id);
    },
  },
  Row: {
    created_since(parent: Row, args, contextValue: GraphqlContext, info): string {
      return DateKit.fromNow(new Date(parent.created_at), contextValue.lang, true);
    },
    async columns(
      parent: Row,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<Column[]> {
      queryInput.filter = `row_id:${parent.id}`;
      queryInput.sort = 'rank';
      queryInput.order = 'asc';
      const columnModel = new ColumnModel(contextValue.lang);
      return columnModel.getItems(queryInput);
    },
  },
};
