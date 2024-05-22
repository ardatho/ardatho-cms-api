import type { QueryRoleArgs, Role, User } from 'generated/graphql';
import type { GraphqlContext } from 'types/common';
import RoleLoader from './loader';
import { DateKit } from 'utils/dateKit';

export default {
  Query: {
    async roles(parent, args, contextValue: GraphqlContext, info): Promise<Role[]> {
      return contextValue.knex<Role>('role').select();
    },
    async nroles(parent, args, contextValue: GraphqlContext, info): Promise<{ count: number }> {
      const results = await contextValue.knex('role').count({ count: '*' });
      return { count: results[0].count };
    },
    async role(parent, { id }: QueryRoleArgs, contextValue: GraphqlContext, info): Promise<Role> {
      const items = await contextValue.knex<Role>('role').where('id', id);
      return items[0];
    },
  },
  Role: {
    created_at(parent: User, args, contextValue: GraphqlContext, info): string {
      return new Date(parent.created_at).toISOString();
    },
    created_since(parent: User, args, contextValue: GraphqlContext, info): string {
      return DateKit.fromNow(new Date(parent.created_at), contextValue.lang, true);
    },
    title(parent: Role, args, contextValue: GraphqlContext, info): string {
      return (parent.title as unknown as { fr: string; en: string } )[contextValue.lang];
    },
    async users(parent: Role, args, contextValue: GraphqlContext, info): Promise<User[]> {
      return RoleLoader.usersLoader.load(parent.id);
    },
  },
};
