import type { User, UserAdd, UserPatch } from 'generated/graphql';
import * as jwt from 'jsonwebtoken';
import * as crypto from 'node:crypto';
import type { GraphqlContext } from 'types/common';

export default {
  Mutation: {
    async addUser(
      parent,
      { item }: { item: UserAdd },
      contextValue: GraphqlContext,
      info
    ): Promise<User | Error> {
      if (item.password && item.password === item.confirmpassword) {
        const { password } = item;
        delete item.confirmpassword;
        item.password = crypto.createHash('sha256').update(password).digest('hex');
        try {
          const results = await contextValue.knex('user').insert(item);
          const userId = results[0];
          const user = (await contextValue.knex('user').where({ id: userId }))[0];
          return user;
        } catch (error) {
          if (error.code === 'ER_DUP_ENTRY') {
            throw new Error('generic.database.duplicate_entry');
          }
          throw new Error('generic.database.insert_failed');
        }
      } else {
        throw new Error('user.messages.wrong.confirmpassword');
      }
    },
    async patchUser(
      parent,
      { id, patch }: { id: number; patch: UserPatch },
      contextValue: GraphqlContext,
      info
    ): Promise<User | Error> {
      const user = (await contextValue.knex('user').where({ id }))[0];
      if (!user) {
        throw new Error('generic.database.item_not_found');
      }
      if (patch.password && patch.password === patch.confirmpassword) {
        const { password } = patch;
        delete patch.confirmpassword;
        patch.password = crypto.createHash('sha256').update(password).digest('hex');
      }
      try {
        await contextValue.knex('user').where({ id }).update(patch, '*');
        return { ...user, ...patch };
      } catch (error) {
        throw new Error('generic.database.update_failed');
      }
    },
    async deleteUser(
      parent,
      { id }: { id: number },
      contextValue: GraphqlContext,
      info
    ): Promise<boolean> {
      const user = (await contextValue.knex('user').where({ id }))[0];
      if (!user) {
        throw new Error('generic.database.item_not_found');
      }
      try {
        await contextValue.knex('user').where({ id }).del();
        return true;
      } catch (error) {
        throw new Error('generic.database.delete_failed');
      }
    },
    async login(
      parent,
      { username, password }: { username: string; password: string },
      contextValue: GraphqlContext,
      info
    ): Promise<string> {
      password = crypto.createHash('sha256').update(password).digest('hex');
      const user = (
        await contextValue.knex('user').where({ email: username, password, status: 1 })
      )[0];
      if (!user) {
        throw new Error('authentification.failed');
      }
      await contextValue
        .knex('user')
        .where({ email: username })
        .update({ last_login_date: new Date() });

      return jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: 'admin',
          firstname: user.firstname,
          lastname: user.lastname,
          // exp: (Date.now() / 1000)// + 2 * 60 // Expire in 2 min. Keep here, useful to debug
          exp: (new Date().getTime() + 24 * 60 * 60 * 1000) / 1000, // Expire in 24 hours
        },
        process.env.JWT_SECRET
      );
    },
    async verify(parent, args, contextValue: GraphqlContext, info): Promise<string> {
      const user = (
        await contextValue.knex('user').where({ email: contextValue.user.email, status: 1 })
      )[0];
      if (!user) {
        throw new Error('authentification.failed');
      }
      await contextValue
        .knex('user')
        .where({ email: contextValue.user.email })
        .update({ last_login_date: new Date() });

      return jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: 'admin',
          firstname: user.firstname,
          lastname: user.lastname,
          // exp: (Date.now() / 1000)// + 2 * 60 // Expire in 2 min. Keep here, useful to debug
          exp: (new Date().getTime() + 24 * 60 * 60 * 1000) / 1000, // Expire in 24 hours
        },
        process.env.JWT_SECRET
      );
    },
  },
};
