import type { User } from 'generated/graphql';
import type * as jwt from 'jsonwebtoken';
import type { Knex } from 'knex';

export enum QueryName {
  IntrospectionQuery = 'IntrospectionQuery',
}

export interface GraphqlContext {
  token: string;
  requestId: string;
  user: jwt.JwtPayload | User;
  knex: Knex;
  lang: 'fr' | 'en'
}
