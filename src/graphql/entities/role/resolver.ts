import type { QueryInput, QueryRoleArgs, Role, User } from 'generated/graphql';
import { QueryService } from 'services/queryService';
import type { GraphqlContext } from 'types/common';
import { DateKit } from 'utils/dateKit';

import RoleLoader from './loader';
import RoleModel from './model';

export default {
  Query: {
    async roles(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<Role[]> {
      const roleModel = new RoleModel(contextValue.lang);
      return roleModel.getItems(queryInput);
    },
    async nroles(
      parent,
      { queryInput = {} }: { queryInput: QueryInput },
      contextValue: GraphqlContext,
      info
    ): Promise<{ count: number }> {
      const roleModel = new RoleModel(contextValue.lang);
      return roleModel.countItems(queryInput);
    },
    async role(parent, { id }: QueryRoleArgs, contextValue: GraphqlContext, info): Promise<Role> {
      const roleModel = new RoleModel(contextValue.lang);
      return roleModel.getItem(id);
    },
  },
  Role: {
    created_at(parent: User, args, contextValue: GraphqlContext, info): string {
      return new Date(parent.created_at).toISOString();
    },
    created_since(parent: User, args, contextValue: GraphqlContext, info): string {
      return DateKit.fromNow(new Date(parent.created_at), contextValue.lang, true);
    },
    async users(parent: Role, args, contextValue: GraphqlContext, info): Promise<User[]> {
      return RoleLoader.usersLoader.load(parent.id);
    },
  },
};
