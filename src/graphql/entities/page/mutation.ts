import type { Page, PageAdd, PagePatch } from 'generated/graphql';
import type { GraphqlContext } from 'types/common';
import { FunctionKit } from 'utils/functionKit';

import config from './config';

export default {
  Mutation: {
    async addPage(
      parent,
      { item }: { item: PageAdd & { i18n: string } },
      contextValue: GraphqlContext,
      info
    ): Promise<Page | Error> {
      try {
        FunctionKit.handleJsonFields(item, null, contextValue.lang, config.i18nFields);
        item.i18n = contextValue.lang;
        const results = await contextValue.knex('page').insert(item);
        const pageId = results[0];
        const page = (await contextValue.knex('page').where({ id: pageId }))[0];
        return page;
      } catch (error) {
        throw new Error('generic.database.insert_failed');
      }
    },
    async patchPage(
      parent,
      { id, patch }: { id: number; patch: PagePatch & { i18n: string } },
      contextValue: GraphqlContext,
      info
    ): Promise<Page | Error> {
      const page = (await contextValue.knex('page').where({ id }))[0];
      if (!page) {
        throw new Error('generic.database.item_not_found');
      }
      try {
        FunctionKit.handleJsonFields(patch, page, contextValue.lang, config.i18nFields);
        FunctionKit.cleanupFields(patch);
        patch.i18n = FunctionKit.getFormattedI18nAttribute(page.i18n, contextValue.lang);
        await contextValue.knex('page').where({ id }).update(patch, '*');
        return { ...page, ...patch };
      } catch (error) {
        throw new Error('generic.database.update_failed');
      }
    },
    async deletePage(
      parent,
      { id }: { id: number },
      contextValue: GraphqlContext,
      info
    ): Promise<boolean> {
      const page = (await contextValue.knex('page').where({ id }))[0];
      if (!page) {
        throw new Error('generic.database.item_not_found');
      }
      try {
        await contextValue.knex('page').where({ id }).del();
        return true;
      } catch (error) {
        throw new Error('generic.database.delete_failed');
      }
    },
  },
};
