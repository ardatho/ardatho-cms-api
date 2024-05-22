import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ListInput: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  addRole: Role;
  addUser: User;
  deleteRole?: Maybe<Scalars['Boolean']>;
  deleteUser?: Maybe<Scalars['Boolean']>;
  login: Scalars['String'];
  patchRole?: Maybe<Role>;
  patchUser?: Maybe<User>;
  verify: Scalars['String'];
};


export type MutationAddRoleArgs = {
  item: RoleAdd;
};


export type MutationAddUserArgs = {
  item: UserAdd;
};


export type MutationDeleteRoleArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationPatchRoleArgs = {
  id: Scalars['Int'];
  patch: RolePatch;
};


export type MutationPatchUserArgs = {
  id: Scalars['Int'];
  patch: UserPatch;
};

export type Permission = {
  __typename?: 'Permission';
  keymodule?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  nroles?: Maybe<_Count>;
  nusers?: Maybe<_Count>;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Maybe<Role>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryRoleArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type Role = {
  __typename?: 'Role';
  created_at?: Maybe<Scalars['String']>;
  created_since?: Maybe<Scalars['String']>;
  i18n?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
  userpermissions?: Maybe<Array<Maybe<Userpermission>>>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type RoleAdd = {
  title?: InputMaybe<Scalars['String']>;
};

export type RolePatch = {
  title?: InputMaybe<Scalars['String']>;
  userpermissions?: InputMaybe<Array<InputMaybe<Userpermissioninput>>>;
  users?: InputMaybe<Scalars['ListInput']>;
};

export type User = {
  __typename?: 'User';
  created_at?: Maybe<Scalars['String']>;
  created_since?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_login_date?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  status?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['String']>;
};

export type UserAdd = {
  confirmpassword?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

export type UserPatch = {
  confirmpassword?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

export type Userpermission = {
  __typename?: 'Userpermission';
  id?: Maybe<Scalars['Int']>;
  keymodule?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Int']>;
};

export type Userpermissioninput = {
  id?: InputMaybe<Scalars['Int']>;
  keymodule?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Scalars['Int']>;
};

export type _Count = {
  __typename?: '_Count';
  count?: Maybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ListInput: ResolverTypeWrapper<Scalars['ListInput']>;
  Mutation: ResolverTypeWrapper<{}>;
  Permission: ResolverTypeWrapper<Permission>;
  Query: ResolverTypeWrapper<{}>;
  Role: ResolverTypeWrapper<Role>;
  RoleAdd: RoleAdd;
  RolePatch: RolePatch;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  UserAdd: UserAdd;
  UserPatch: UserPatch;
  Userpermission: ResolverTypeWrapper<Userpermission>;
  Userpermissioninput: Userpermissioninput;
  _Count: ResolverTypeWrapper<_Count>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  ListInput: Scalars['ListInput'];
  Mutation: {};
  Permission: Permission;
  Query: {};
  Role: Role;
  RoleAdd: RoleAdd;
  RolePatch: RolePatch;
  String: Scalars['String'];
  User: User;
  UserAdd: UserAdd;
  UserPatch: UserPatch;
  Userpermission: Userpermission;
  Userpermissioninput: Userpermissioninput;
  _Count: _Count;
};

export interface ListInputScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ListInput'], any> {
  name: 'ListInput';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addRole?: Resolver<ResolversTypes['Role'], ParentType, ContextType, RequireFields<MutationAddRoleArgs, 'item'>>;
  addUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationAddUserArgs, 'item'>>;
  deleteRole?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteRoleArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'password' | 'username'>>;
  patchRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationPatchRoleArgs, 'id' | 'patch'>>;
  patchUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationPatchUserArgs, 'id' | 'patch'>>;
  verify?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Permission'] = ResolversParentTypes['Permission']> = {
  keymodule?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  nroles?: Resolver<Maybe<ResolversTypes['_Count']>, ParentType, ContextType>;
  nusers?: Resolver<Maybe<ResolversTypes['_Count']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<QueryRoleArgs, 'id'>>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Role']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_since?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  i18n?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userpermissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Userpermission']>>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_since?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  last_login_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Permission']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserpermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Userpermission'] = ResolversParentTypes['Userpermission']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  keymodule?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Count'] = ResolversParentTypes['_Count']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ListInput?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Permission?: PermissionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Userpermission?: UserpermissionResolvers<ContextType>;
  _Count?: _CountResolvers<ContextType>;
};

