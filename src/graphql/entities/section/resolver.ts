import type { QueryInput, QuerySectionArgs, Row, Section } from 'generated/graphql';
import type { GraphqlContext } from 'types/common';
import { DateKit } from 'utils/dateKit';

import RowModel from '../row/model';
import SectionModel from '../section/model';

export default {
  Query: {
    async sections(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<Section[]> {
      const sectionModel = new SectionModel(contextValue.lang);
      return sectionModel.getItems(queryInput);
    },
    async nsections(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<{ count: number }> {
      const sectionModel = new SectionModel(contextValue.lang);
      return sectionModel.countItems(queryInput);
    },
    async section(
      parent,
      { id }: QuerySectionArgs,
      contextValue: GraphqlContext,
      info
    ): Promise<Section> {
      const sectionModel = new SectionModel(contextValue.lang);
      return sectionModel.getItem(id);
    },
  },
  Section: {
    created_at(parent: Section, args, contextValue: GraphqlContext, info): string {
      return new Date(parent.created_at).toISOString();
    },
    updated_at(parent: Section, args, contextValue: GraphqlContext, info): string {
      return new Date(parent.updated_at).toISOString();
    },
    created_since(parent: Section, args, contextValue: GraphqlContext, info): string {
      return DateKit.fromNow(new Date(parent.created_at), contextValue.lang, true);
    },
    async rows(
      parent: Section,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<Row[]> {
      queryInput.filter = `section_id:${parent.id}`;
      queryInput.sort = 'rank';
      queryInput.order = 'asc';
      const rowModel = new RowModel(contextValue.lang);
      return rowModel.getItems(queryInput);
    },
  },
};
