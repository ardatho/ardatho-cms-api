import type { Filter, Page, QueryInput, QueryPageArgs, Section } from 'generated/graphql';
import type { GraphqlContext } from 'types/common';
import { DateKit } from 'utils/dateKit';

import SectionModel from '../section/model';
import PageModel from './model';

export default {
  Query: {
    async pages(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<Page[]> {
      const pageModel = new PageModel(contextValue.lang);
      return pageModel.getItems(queryInput);
    },
    async npages(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<{ count: number }> {
      const pageModel = new PageModel(contextValue.lang);
      return pageModel.countItems(queryInput);
    },
    async page(parent, { id }: QueryPageArgs, contextValue: GraphqlContext, info): Promise<Page> {
      const pageModel = new PageModel(contextValue.lang);
      return pageModel.getItem(id);
    },
    pageStatus(): Filter[] {
      return [
        { value: '0', text: 'generic.offline' },
        { value: '1', text: 'generic.online' },
        { value: '2', text: 'generic.inprogress' },
      ];
    },
  },
  Page: {
    created_since(parent: Page, args, contextValue: GraphqlContext, info): string {
      return DateKit.fromNow(new Date(parent.created_at), contextValue.lang, true);
    },
    async pages(
      parent: Page,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<Page[]> {
      queryInput.filter = `parent_id:${parent.id}`;
      queryInput.sort = 'rank';
      queryInput.order = 'asc';
      const pageModel = new PageModel(contextValue.lang);
      return pageModel.getItems(queryInput);
    },
    /**
     * Page parents listing resolver
     * @param {object} obj - The object that contains the result returned from the resolver on the parent field.
     * @return {Promise<any[]>}
     */
    async parents(obj: any): Promise<Page[]> {
      return [];
    },
    async sections(
      parent: Page,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<Section[]> {
      queryInput.filter = `parent_id:${parent.id},parent_module:page`;
      queryInput.sort = 'rank';
      queryInput.order = 'asc';
      const sectionModel = new SectionModel(contextValue.lang);
      return sectionModel.getItems(queryInput);
    },
  },
};
