import type { QueryRoleArgs, Role, User, QueryInput } from 'generated/graphql';
import type { GraphqlContext } from 'types/common';
import RoleLoader from './loader';
import { DateKit } from 'utils/dateKit';

export default {
  Query: {
    async roles(parent, { queryInput = {} }: { queryInput: QueryInput }, contextValue: GraphqlContext, info): Promise<Role[]> {
      const query = contextValue.knex<Role>('role');

      if (queryInput.offset > 0) query.offset(queryInput.offset);

      if (queryInput.limit > 0) query.limit(queryInput.limit);

      if (queryInput.fields && queryInput.search) {
        query.where((builder) => {
          for (const field of queryInput.fields.split(',')) {
            builder.orWhereILike(field, `%${queryInput.search}%`);
          }
          return builder;
        });
      }
      return query.select();
    },
    async nroles(parent, { queryInput = {} }: { queryInput: QueryInput }, contextValue: GraphqlContext, info): Promise<{ count: number }> {
      const query = contextValue.knex('role');

      if (queryInput.fields && queryInput.search) {
        query.where((builder) => {
          for (const field of queryInput.fields.split(',')) {
            builder.orWhereILike(field, `%${queryInput.search}%`);
          }
          return builder;
        });
      }

      const results = await query.count({ count: '*' });
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
