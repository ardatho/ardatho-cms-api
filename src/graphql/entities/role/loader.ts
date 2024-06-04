import * as DataLoader from 'dataloader';
import type { User } from 'generated/graphql';

import knex from '../../../config/knex';

class RoleLoader {
  static usersLoader = new DataLoader(async (ids: number[]) => {
    const rows = await knex<User[]>('user')
      .select('*')
      .leftJoin('user_role', 'user.id', 'user_role.user_id')
      .whereIn('user_role.role_id', ids);
    return ids.map((id) => rows.filter((row) => row.role_id === id));
  });
}

export default RoleLoader;
