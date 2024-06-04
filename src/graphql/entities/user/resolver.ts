import type {
  Filter,
  Permission,
  QueryInput,
  QueryUserArgs,
  User,
  Userpermission,
} from 'generated/graphql';
import type { GraphqlContext } from 'types/common';
import { DateKit } from 'utils/dateKit';

import UserModel from './model';

const findPowerOf2 = (n: number, result: number[] = []): number[] => {
  if (n === 0) return result;
  const p = Math.floor(Math.log2(n));
  const power = Math.pow(2, p);
  result.push(power);
  return p === 0 ? result : findPowerOf2(n - power, result);
};

export default {
  Query: {
    async users(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<User[]> {
      const userModel = new UserModel(contextValue.lang);
      return userModel.getItems(queryInput);
    },
    async nusers(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<{ count: number }> {
      const userModel = new UserModel(contextValue.lang);
      return userModel.countItems(queryInput);
    },
    async user(parent, { id }: QueryUserArgs, contextValue: GraphqlContext, info): Promise<User> {
      const userModel = new UserModel(contextValue.lang);
      return userModel.getItem(id);
    },
    async me(parent, { id }: QueryUserArgs, contextValue: GraphqlContext, info): Promise<User> {
      const userModel = new UserModel(contextValue.lang);
      return userModel.getItem(contextValue.user.id);
    },
    userStatus(): Filter[] {
      return [
        { value: '0', text: 'generic.offline' },
        { value: '1', text: 'generic.online' },
        { value: '2', text: 'generic.inprogress' },
      ];
    },
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
    async permissions(
      parent: User,
      args,
      contextValue: GraphqlContext,
      info
    ): Promise<Permission[]> {
      const permissions = await contextValue
        .knex<Userpermission[]>('userpermissions')
        .select('*')
        .leftJoin('user_role', 'userpermissions.role_id', 'user_role.role_id')
        .where('user_role.user_id', parent.id);

      const results = permissions.reduce((allPermissions, currentPermission) => {
        const existPermission = allPermissions.find(
          (permission) => currentPermission.keymodule === permission.keymodule
        );
        if (!existPermission) {
          return [...allPermissions, currentPermission];
        }

        const newPermissionsBase2 = findPowerOf2(currentPermission.permissions);
        const existPermissionsBase2 = findPowerOf2(existPermission.permissions);
        newPermissionsBase2.map((el) => {
          if (existPermissionsBase2.find((permission) => permission === el) === undefined) {
            existPermission.permissions += el;
          }
        });
        return allPermissions;
      }, []);
      return results;
    },
  },
};
