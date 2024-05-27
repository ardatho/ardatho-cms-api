import type { QueryUserArgs, User, Userpermission, Permission, QueryInput, Filter } from 'generated/graphql';
import { Knex } from 'knex';
import type { GraphqlContext } from 'types/common';
import { DateKit } from 'utils/dateKit';

import { FilterService } from 'services/filterService';

const findPowerOf2 = (n: number, result:number[] = []): number[] => {
		if (n === 0) return result;
		const p = Math.floor(Math.log2(n));
		const power = Math.pow(2, p);
		result.push(power);
		return p === 0 ? result : findPowerOf2(n - power, result);
}

export default {
  Query: {
    async users(parent, { queryInput = {} }: { queryInput: QueryInput }, contextValue: GraphqlContext, info): Promise<User[]> {
      const query = contextValue.knex<User>('user');

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

      if (queryInput.filter) {
        query.where(builder => FilterService.filterQuery(queryInput.filter, builder))
      }

      return query.select();
    },
    async nusers(parent, { queryInput = {} }: { queryInput: QueryInput }, contextValue: GraphqlContext, info): Promise<{ count: number }> {
      const query = contextValue.knex('user');

      if (queryInput.fields && queryInput.search) {
        query.where((builder) => {
          for (const field of queryInput.fields.split(',')) {
            builder.orWhereILike(field, `%${queryInput.search}%`);
          }
          return builder;
        });
      }

      if (queryInput.filter) {
        query.where(builder => FilterService.filterQuery(queryInput.filter, builder))
      }

      const results = await query.count({ count: '*' });
      return { count: results[0].count };
    },
    async user(parent, { id }: QueryUserArgs, contextValue: GraphqlContext, info): Promise<User> {
      const items = await contextValue.knex<User>('user').where('id', id);
      return items[0];
    },
    async me(parent, { id }: QueryUserArgs, contextValue: GraphqlContext, info): Promise<User> {
      const users = await contextValue.knex<User>('user').where('id', contextValue.user.id);
      return users[0];
    },
    userStatus(): Filter[] {
      return [
        { value: '0', text: 'generic.offline' },
        { value: '1', text: 'generic.online' },
        { value: '2', text: 'generic.inprogress' },
      ];
    }
  },
  User: {
    created_at(parent: User, args, contextValue: GraphqlContext, info): string {
      return new Date(parent.created_at).toISOString();
    },
    updated_at(parent: User, args, contextValue: GraphqlContext, info): string {
      return new Date(parent.updated_at).toISOString();
    },
    created_since(parent: User, args, contextValue: GraphqlContext, info): string {
      return DateKit.fromNow(new Date(parent.created_at), contextValue.lang, true);
    },
    async permissions(parent: User, args, contextValue: GraphqlContext, info): Promise<Permission[]> {
      const permissions = await contextValue.knex<Userpermission[]>('userpermissions')
        .select('*')
        .leftJoin('user_role', 'userpermissions.role_id', 'user_role.role_id')
        .where('user_role.user_id', parent.id);

      const results = permissions.reduce(
        (allPermissions, currentPermission) => {
          const existPermission = allPermissions.find(permission => currentPermission.keymodule === permission.keymodule);
          if (!existPermission) {
            return [...allPermissions, currentPermission];
          }

					const newPermissionsBase2 = findPowerOf2(currentPermission.permissions);
					const existPermissionsBase2 = findPowerOf2(existPermission.permissions);
					newPermissionsBase2.map(el => {
						if (existPermissionsBase2.find(permission => permission === el) === undefined) {
							existPermission.permissions += el;
						}
					});
          return allPermissions;
        },
        []
      )
      return results;
    },
  },
};
