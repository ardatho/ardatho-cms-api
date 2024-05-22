import type { Role, RoleAdd, RolePatch } from 'generated/graphql';
import type { GraphqlContext } from 'types/common';
import { FunctionKit } from 'utils/functionKit';
import config from './config';

export default {
  Mutation: {
    async addRole(
      parent,
      { item }: { item: RoleAdd & { i18n: string } },
      contextValue: GraphqlContext,
      info
    ): Promise<Role | Error> {
      try {
        FunctionKit.handleJsonFields(item, null, contextValue.lang, config.i18nFields);
        item.i18n = contextValue.lang;
        const results = await contextValue.knex('role').insert(item);
        const roleId = results[0];
        const role = (await contextValue.knex('role').where({ id: roleId }))[0];
        return role;
      } catch (error) {
        throw new Error('generic.database.insert_failed');
      }
    },
    async patchRole(
      parent,
      { id, patch }: { id: number; patch: RolePatch & { i18n: string } },
      contextValue: GraphqlContext,
      info
    ): Promise<Role | Error> {
      const role = (await contextValue.knex('role').where({ id }))[0];
      if (!role) {
        throw new Error('generic.database.item_not_found');
      }
      try {
        FunctionKit.handleJsonFields(patch, role, contextValue.lang, config.i18nFields);
        FunctionKit.cleanupFields(patch);
        patch.i18n = FunctionKit.getFormattedI18nAttribute(role.i18n, contextValue.lang);
        await contextValue.knex('role').where({ id }).update(patch, '*');
        return { ...role, ...patch };
      } catch (error) {
        throw new Error('generic.database.update_failed');
      }
    },
    async deleteRole(
      parent,
      { id }: { id: number },
      contextValue: GraphqlContext,
      info
    ): Promise<boolean> {
      const role = (await contextValue.knex('role').where({ id }))[0];
      if (!role) {
        throw new Error('generic.database.item_not_found');
      }
      try {
        await contextValue.knex('role').where({ id }).del();
        return true;
      } catch (error) {
        throw new Error('generic.database.delete_failed');
      }
    },
  },
};
