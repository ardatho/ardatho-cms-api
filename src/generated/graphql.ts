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
  Upload: any;
};

/** A type that describes an Block. */
export type Block = {
  __typename?: 'Block';
  bk_color?: Maybe<Scalars['String']>;
  contentblocks?: Maybe<Array<Maybe<Contentblock>>>;
  created_at: Scalars['String'];
  created_since: Scalars['String'];
  fit_height_to_bk_image?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  href?: Maybe<Scalars['String']>;
  i18n?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Media>;
  padding?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  parent_module?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  targetblank?: Maybe<Scalars['Boolean']>;
  text_align?: Maybe<Scalars['Int']>;
  text_color?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uniqueId?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  video?: Maybe<Media>;
  width?: Maybe<Scalars['Int']>;
};

export type BlockAdd = {
  bk_color?: InputMaybe<Scalars['String']>;
  fit_height_to_bk_image?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  href?: InputMaybe<Scalars['String']>;
  i18n?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['Int']>;
  padding?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['Int']>;
  parent_module?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  rank?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  targetblank?: InputMaybe<Scalars['Boolean']>;
  text_align?: InputMaybe<Scalars['Int']>;
  text_color?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type BlockPatch = {
  bk_color?: InputMaybe<Scalars['String']>;
  contentblocks?: InputMaybe<Scalars['ListInput']>;
  fit_height_to_bk_image?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  href?: InputMaybe<Scalars['String']>;
  i18n?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['Int']>;
  padding?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['Int']>;
  parent_module?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  rank?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  targetblank?: InputMaybe<Scalars['Boolean']>;
  text_align?: InputMaybe<Scalars['Int']>;
  text_color?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** A type that describes an Column. */
export type Column = {
  __typename?: 'Column';
  auto_height?: Maybe<Scalars['Boolean']>;
  auto_play?: Maybe<Scalars['Boolean']>;
  blocks?: Maybe<Array<Maybe<Block>>>;
  created_at: Scalars['String'];
  created_since: Scalars['String'];
  i18n?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  loop_circuit?: Maybe<Scalars['Boolean']>;
  rank?: Maybe<Scalars['Int']>;
  row_id?: Maybe<Scalars['Int']>;
  slide_per_group?: Maybe<Scalars['Int']>;
  slide_per_view?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  uniqueId?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
};

export type ColumnAdd = {
  auto_height?: InputMaybe<Scalars['Boolean']>;
  auto_play?: InputMaybe<Scalars['Boolean']>;
  i18n?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  loop_circuit?: InputMaybe<Scalars['Boolean']>;
  rank?: InputMaybe<Scalars['Int']>;
  row_id?: InputMaybe<Scalars['Int']>;
  slide_per_group?: InputMaybe<Scalars['Int']>;
  slide_per_view?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ColumnPatch = {
  auto_height?: InputMaybe<Scalars['Boolean']>;
  auto_play?: InputMaybe<Scalars['Boolean']>;
  i18n?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  loop_circuit?: InputMaybe<Scalars['Boolean']>;
  rank?: InputMaybe<Scalars['Int']>;
  row_id?: InputMaybe<Scalars['Int']>;
  slide_per_group?: InputMaybe<Scalars['Int']>;
  slide_per_view?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** A type that describes an Contentblock. */
export type Contentblock = {
  __typename?: 'Contentblock';
  bk_color?: Maybe<Scalars['String']>;
  block_id?: Maybe<Scalars['Int']>;
  border_color?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  content_align?: Maybe<Scalars['Int']>;
  content_color?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  created_since: Scalars['String'];
  href?: Maybe<Scalars['String']>;
  i18n?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Media>;
  margin?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  targetblank?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  uniqueId?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  video?: Maybe<Media>;
  youtube_id?: Maybe<Scalars['String']>;
};

export type ContentblockAdd = {
  bk_color?: InputMaybe<Scalars['String']>;
  block_id?: InputMaybe<Scalars['Int']>;
  border_color?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  content_align?: InputMaybe<Scalars['Int']>;
  content_color?: InputMaybe<Scalars['String']>;
  content_type?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  i18n?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['Int']>;
  margin?: InputMaybe<Scalars['String']>;
  rank?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  targetblank?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['Int']>;
  youtube_id?: InputMaybe<Scalars['String']>;
};

export type ContentblockPatch = {
  bk_color?: InputMaybe<Scalars['String']>;
  block_id?: InputMaybe<Scalars['Int']>;
  border_color?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  content_align?: InputMaybe<Scalars['Int']>;
  content_color?: InputMaybe<Scalars['String']>;
  content_type?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  i18n?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['Int']>;
  margin?: InputMaybe<Scalars['String']>;
  rank?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  targetblank?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['Int']>;
  youtube_id?: InputMaybe<Scalars['String']>;
};

export type Filter = {
  __typename?: 'Filter';
  text?: Maybe<Scalars['String']>;
  value: Scalars['ID'];
};

export type Layout = {
  __typename?: 'Layout';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** A type that describes an Media. */
export type Media = {
  __typename?: 'Media';
  alt?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  created_since: Scalars['String'];
  credits?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  i18n?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Media>;
  mediacategories?: Maybe<Array<Maybe<Mediacategory>>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  weight?: Maybe<Scalars['Int']>;
};

export type MediaAdd = {
  dimensions?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  type: Scalars['String'];
  weight?: InputMaybe<Scalars['Int']>;
};

export type MediaPatch = {
  alt?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  credits?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Int']>;
  mediacategories?: InputMaybe<Scalars['ListInput']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Mediacategory = {
  __typename?: 'Mediacategory';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  created_since: Scalars['String'];
  i18n?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  mediacategories?: Maybe<Array<Maybe<Mediacategory>>>;
  nMediacategories?: Maybe<Scalars['Int']>;
  nParent?: Maybe<Scalars['Int']>;
  parent_id?: Maybe<Scalars['Int']>;
  parents?: Maybe<Array<Maybe<MediacategoryParents>>>;
  rank?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
};

export type MediacategoryAdd = {
  title?: InputMaybe<Scalars['String']>;
};

export type MediacategoryParents = {
  __typename?: 'MediacategoryParents';
  ids?: Maybe<Scalars['ListInput']>;
};

export type MediacategoryPatch = {
  parent_id?: InputMaybe<Scalars['Int']>;
  rank?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBlock: Block;
  addColumn: Column;
  addContentblock: Contentblock;
  addMedia: Media;
  addMediacategory: Mediacategory;
  addPage: Page;
  addRole: Role;
  addRow: Row;
  addSection: Section;
  addUser: User;
  deleteBlock?: Maybe<Scalars['Boolean']>;
  deleteBlockRelation?: Maybe<Scalars['Boolean']>;
  deleteColumn?: Maybe<Scalars['Boolean']>;
  deleteContentblock?: Maybe<Scalars['Boolean']>;
  deleteMedia?: Maybe<Scalars['Boolean']>;
  deleteMediaRelation?: Maybe<Scalars['Boolean']>;
  deleteMediacategory?: Maybe<Scalars['Boolean']>;
  deletePage?: Maybe<Scalars['Boolean']>;
  deleteRole?: Maybe<Scalars['Boolean']>;
  deleteRow?: Maybe<Scalars['Boolean']>;
  deleteSection?: Maybe<Scalars['Boolean']>;
  deleteUser?: Maybe<Scalars['Boolean']>;
  duplicateBlock?: Maybe<Scalars['Int']>;
  duplicateColumn?: Maybe<Scalars['Int']>;
  duplicatePage?: Maybe<Scalars['Int']>;
  duplicateRow?: Maybe<Scalars['Int']>;
  duplicateSection?: Maybe<Scalars['Int']>;
  login: Scalars['String'];
  patchBlock?: Maybe<Block>;
  patchColumn?: Maybe<Column>;
  patchContentblock?: Maybe<Contentblock>;
  patchMedia?: Maybe<Media>;
  patchMediacategory?: Maybe<Mediacategory>;
  patchPage?: Maybe<Page>;
  patchRole?: Maybe<Role>;
  patchRow?: Maybe<Row>;
  patchSection?: Maybe<Section>;
  patchUser?: Maybe<User>;
  verify: Scalars['String'];
};


export type MutationAddBlockArgs = {
  item: BlockAdd;
};


export type MutationAddColumnArgs = {
  item: ColumnAdd;
};


export type MutationAddContentblockArgs = {
  item: ContentblockAdd;
};


export type MutationAddMediaArgs = {
  item: MediaAdd;
};


export type MutationAddMediacategoryArgs = {
  item: MediacategoryAdd;
};


export type MutationAddPageArgs = {
  item: PageAdd;
};


export type MutationAddRoleArgs = {
  item: RoleAdd;
};


export type MutationAddRowArgs = {
  item: RowAdd;
};


export type MutationAddSectionArgs = {
  item: SectionAdd;
};


export type MutationAddUserArgs = {
  item: UserAdd;
};


export type MutationDeleteBlockArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteBlockRelationArgs = {
  id: Scalars['Int'];
  parentId: Scalars['Int'];
  parentType: Scalars['String'];
};


export type MutationDeleteColumnArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteContentblockArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteMediaRelationArgs = {
  id: Scalars['Int'];
  parentId: Scalars['Int'];
  parentType: Scalars['String'];
};


export type MutationDeleteMediacategoryArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePageArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteRowArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteSectionArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationDuplicateBlockArgs = {
  id: Scalars['Int'];
};


export type MutationDuplicateColumnArgs = {
  id: Scalars['Int'];
};


export type MutationDuplicatePageArgs = {
  id: Scalars['Int'];
};


export type MutationDuplicateRowArgs = {
  id: Scalars['Int'];
};


export type MutationDuplicateSectionArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationPatchBlockArgs = {
  id: Scalars['Int'];
  patch: BlockPatch;
};


export type MutationPatchColumnArgs = {
  id: Scalars['Int'];
  patch: ColumnPatch;
};


export type MutationPatchContentblockArgs = {
  id: Scalars['Int'];
  patch: ContentblockPatch;
};


export type MutationPatchMediaArgs = {
  id: Scalars['Int'];
  patch: MediaPatch;
};


export type MutationPatchMediacategoryArgs = {
  id: Scalars['Int'];
  patch: MediacategoryPatch;
};


export type MutationPatchPageArgs = {
  id: Scalars['Int'];
  patch: PagePatch;
};


export type MutationPatchRoleArgs = {
  id: Scalars['Int'];
  patch: RolePatch;
};


export type MutationPatchRowArgs = {
  id: Scalars['Int'];
  patch: RowPatch;
};


export type MutationPatchSectionArgs = {
  id: Scalars['Int'];
  patch: SectionPatch;
};


export type MutationPatchUserArgs = {
  id: Scalars['Int'];
  patch: UserPatch;
};

/** A type that describes an Page. */
export type Page = {
  __typename?: 'Page';
  created_at: Scalars['String'];
  created_since: Scalars['String'];
  i18n?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  nPages?: Maybe<Scalars['Int']>;
  nParent?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  page_type?: Maybe<Scalars['String']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  parent_id?: Maybe<Scalars['Int']>;
  parents?: Maybe<Array<Maybe<Page>>>;
  rank?: Maybe<Scalars['Int']>;
  sections?: Maybe<Array<Maybe<Section>>>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  template_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
};

export type PageAdd = {
  i18n?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  page_type?: InputMaybe<Scalars['String']>;
  rank?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  template_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PagePatch = {
  i18n?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  page_type?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['Int']>;
  rank?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  template_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Permission = {
  __typename?: 'Permission';
  keymodule?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  block?: Maybe<Block>;
  blocks?: Maybe<Array<Maybe<Block>>>;
  column?: Maybe<Column>;
  columns?: Maybe<Array<Maybe<Column>>>;
  contentblock?: Maybe<Contentblock>;
  contentblocks?: Maybe<Array<Maybe<Contentblock>>>;
  layouts?: Maybe<Array<Maybe<Layout>>>;
  me?: Maybe<User>;
  media?: Maybe<Media>;
  mediacategories?: Maybe<Array<Maybe<Mediacategory>>>;
  mediacategory?: Maybe<Mediacategory>;
  medias?: Maybe<Array<Maybe<Media>>>;
  nblocks?: Maybe<_Count>;
  ncolumns?: Maybe<_Count>;
  ncontentblocks?: Maybe<_Count>;
  nmediacategories?: Maybe<_Count>;
  nmedias?: Maybe<_Count>;
  npages?: Maybe<_Count>;
  nroles?: Maybe<_Count>;
  nrows?: Maybe<_Count>;
  nsections?: Maybe<_Count>;
  nusers?: Maybe<_Count>;
  page?: Maybe<Page>;
  pageStatus?: Maybe<Array<Maybe<Filter>>>;
  pages?: Maybe<Array<Maybe<Page>>>;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Maybe<Role>>>;
  row?: Maybe<Row>;
  rows?: Maybe<Array<Maybe<Row>>>;
  section?: Maybe<Section>;
  sections?: Maybe<Array<Maybe<Section>>>;
  treemediacategories?: Maybe<Array<Maybe<Mediacategory>>>;
  treepages?: Maybe<Array<Maybe<Page>>>;
  user?: Maybe<User>;
  userStatus?: Maybe<Array<Maybe<Filter>>>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryBlockArgs = {
  id: Scalars['Int'];
};


export type QueryBlocksArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryColumnArgs = {
  id: Scalars['Int'];
};


export type QueryColumnsArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryContentblockArgs = {
  id: Scalars['Int'];
};


export type QueryContentblocksArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryMediaArgs = {
  id: Scalars['Int'];
};


export type QueryMediacategoriesArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryMediacategoryArgs = {
  id: Scalars['Int'];
};


export type QueryMediasArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryNblocksArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryNcolumnsArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryNcontentblocksArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryNmediacategoriesArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryNmediasArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryNpagesArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryNrolesArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryNrowsArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryNsectionsArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryNusersArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryPageArgs = {
  id: Scalars['Int'];
};


export type QueryPagesArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryRoleArgs = {
  id: Scalars['Int'];
};


export type QueryRolesArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryRowArgs = {
  id: Scalars['Int'];
};


export type QueryRowsArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QuerySectionArgs = {
  id: Scalars['Int'];
};


export type QuerySectionsArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryTreemediacategoriesArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryTreepagesArgs = {
  queryInput?: InputMaybe<QueryInput>;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryUsersArgs = {
  queryInput?: InputMaybe<QueryInput>;
};

export type QueryInput = {
  fields?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  created_at: Scalars['String'];
  created_since: Scalars['String'];
  i18n?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
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

/** A type that describes an Row. */
export type Row = {
  __typename?: 'Row';
  color?: Maybe<Scalars['String']>;
  columns?: Maybe<Array<Maybe<Column>>>;
  contained?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['String'];
  created_since: Scalars['String'];
  gutters?: Maybe<Scalars['Boolean']>;
  i18n?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Media>;
  layout?: Maybe<Scalars['String']>;
  margin?: Maybe<Scalars['String']>;
  padding?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  section_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  uniqueId?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  video?: Maybe<Media>;
};

export type RowAdd = {
  color?: InputMaybe<Scalars['String']>;
  contained?: InputMaybe<Scalars['Boolean']>;
  gutters?: InputMaybe<Scalars['Boolean']>;
  i18n?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<Scalars['String']>;
  margin?: InputMaybe<Scalars['String']>;
  padding?: InputMaybe<Scalars['String']>;
  rank?: InputMaybe<Scalars['Int']>;
  section_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['Int']>;
};

export type RowPatch = {
  color?: InputMaybe<Scalars['String']>;
  contained?: InputMaybe<Scalars['Boolean']>;
  gutters?: InputMaybe<Scalars['Boolean']>;
  i18n?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<Scalars['String']>;
  margin?: InputMaybe<Scalars['String']>;
  padding?: InputMaybe<Scalars['String']>;
  rank?: InputMaybe<Scalars['Int']>;
  section_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['Int']>;
};

/** A type that describes an Section. */
export type Section = {
  __typename?: 'Section';
  color?: Maybe<Scalars['String']>;
  content_position?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  created_since: Scalars['String'];
  fit_height_to_bk_image?: Maybe<Scalars['Boolean']>;
  i18n?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Media>;
  margin?: Maybe<Scalars['String']>;
  padding?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  parent_module?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  rows?: Maybe<Array<Maybe<Row>>>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  uniqueId?: Maybe<Scalars['String']>;
  updated_at: Scalars['String'];
  video?: Maybe<Media>;
};

export type SectionAdd = {
  color?: InputMaybe<Scalars['String']>;
  content_position?: InputMaybe<Scalars['String']>;
  fit_height_to_bk_image?: InputMaybe<Scalars['Boolean']>;
  i18n?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['Int']>;
  margin?: InputMaybe<Scalars['String']>;
  padding?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['Int']>;
  parent_module?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  rank?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['Int']>;
};

export type SectionPatch = {
  color?: InputMaybe<Scalars['String']>;
  content_position?: InputMaybe<Scalars['String']>;
  fit_height_to_bk_image?: InputMaybe<Scalars['Boolean']>;
  i18n?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['Int']>;
  margin?: InputMaybe<Scalars['String']>;
  padding?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['Int']>;
  parent_module?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  rank?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['String'];
  created_since: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_login_date?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  status?: Maybe<Scalars['Int']>;
  updated_at: Scalars['String'];
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
  Block: ResolverTypeWrapper<Block>;
  BlockAdd: BlockAdd;
  BlockPatch: BlockPatch;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Column: ResolverTypeWrapper<Column>;
  ColumnAdd: ColumnAdd;
  ColumnPatch: ColumnPatch;
  Contentblock: ResolverTypeWrapper<Contentblock>;
  ContentblockAdd: ContentblockAdd;
  ContentblockPatch: ContentblockPatch;
  Filter: ResolverTypeWrapper<Filter>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Layout: ResolverTypeWrapper<Layout>;
  ListInput: ResolverTypeWrapper<Scalars['ListInput']>;
  Media: ResolverTypeWrapper<Media>;
  MediaAdd: MediaAdd;
  MediaPatch: MediaPatch;
  Mediacategory: ResolverTypeWrapper<Mediacategory>;
  MediacategoryAdd: MediacategoryAdd;
  MediacategoryParents: ResolverTypeWrapper<MediacategoryParents>;
  MediacategoryPatch: MediacategoryPatch;
  Mutation: ResolverTypeWrapper<{}>;
  Page: ResolverTypeWrapper<Page>;
  PageAdd: PageAdd;
  PagePatch: PagePatch;
  Permission: ResolverTypeWrapper<Permission>;
  Query: ResolverTypeWrapper<{}>;
  QueryInput: QueryInput;
  Role: ResolverTypeWrapper<Role>;
  RoleAdd: RoleAdd;
  RolePatch: RolePatch;
  Row: ResolverTypeWrapper<Row>;
  RowAdd: RowAdd;
  RowPatch: RowPatch;
  Section: ResolverTypeWrapper<Section>;
  SectionAdd: SectionAdd;
  SectionPatch: SectionPatch;
  String: ResolverTypeWrapper<Scalars['String']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  UserAdd: UserAdd;
  UserPatch: UserPatch;
  Userpermission: ResolverTypeWrapper<Userpermission>;
  Userpermissioninput: Userpermissioninput;
  _Count: ResolverTypeWrapper<_Count>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Block: Block;
  BlockAdd: BlockAdd;
  BlockPatch: BlockPatch;
  Boolean: Scalars['Boolean'];
  Column: Column;
  ColumnAdd: ColumnAdd;
  ColumnPatch: ColumnPatch;
  Contentblock: Contentblock;
  ContentblockAdd: ContentblockAdd;
  ContentblockPatch: ContentblockPatch;
  Filter: Filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Layout: Layout;
  ListInput: Scalars['ListInput'];
  Media: Media;
  MediaAdd: MediaAdd;
  MediaPatch: MediaPatch;
  Mediacategory: Mediacategory;
  MediacategoryAdd: MediacategoryAdd;
  MediacategoryParents: MediacategoryParents;
  MediacategoryPatch: MediacategoryPatch;
  Mutation: {};
  Page: Page;
  PageAdd: PageAdd;
  PagePatch: PagePatch;
  Permission: Permission;
  Query: {};
  QueryInput: QueryInput;
  Role: Role;
  RoleAdd: RoleAdd;
  RolePatch: RolePatch;
  Row: Row;
  RowAdd: RowAdd;
  RowPatch: RowPatch;
  Section: Section;
  SectionAdd: SectionAdd;
  SectionPatch: SectionPatch;
  String: Scalars['String'];
  Upload: Scalars['Upload'];
  User: User;
  UserAdd: UserAdd;
  UserPatch: UserPatch;
  Userpermission: Userpermission;
  Userpermissioninput: Userpermissioninput;
  _Count: _Count;
};

export type BlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block']> = {
  bk_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentblocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contentblock']>>>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_since?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fit_height_to_bk_image?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  i18n?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  padding?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parent_module?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  targetblank?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  text_align?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  text_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uniqueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColumnResolvers<ContextType = any, ParentType extends ResolversParentTypes['Column'] = ResolversParentTypes['Column']> = {
  auto_height?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  auto_play?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  blocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Block']>>>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_since?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  i18n?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  loop_circuit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  row_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slide_per_group?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slide_per_view?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uniqueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentblockResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contentblock'] = ResolversParentTypes['Contentblock']> = {
  bk_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  block_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  border_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_align?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  content_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_since?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  i18n?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  margin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  targetblank?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uniqueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  youtube_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Filter'] = ResolversParentTypes['Filter']> = {
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LayoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['Layout'] = ResolversParentTypes['Layout']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ListInputScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ListInput'], any> {
  name: 'ListInput';
}

export type MediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']> = {
  alt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_since?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  credits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  i18n?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  mediacategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mediacategory']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediacategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mediacategory'] = ResolversParentTypes['Mediacategory']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_since?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  i18n?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediacategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mediacategory']>>>, ParentType, ContextType>;
  nMediacategories?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nParent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediacategoryParents']>>>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediacategoryParentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediacategoryParents'] = ResolversParentTypes['MediacategoryParents']> = {
  ids?: Resolver<Maybe<ResolversTypes['ListInput']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBlock?: Resolver<ResolversTypes['Block'], ParentType, ContextType, RequireFields<MutationAddBlockArgs, 'item'>>;
  addColumn?: Resolver<ResolversTypes['Column'], ParentType, ContextType, RequireFields<MutationAddColumnArgs, 'item'>>;
  addContentblock?: Resolver<ResolversTypes['Contentblock'], ParentType, ContextType, RequireFields<MutationAddContentblockArgs, 'item'>>;
  addMedia?: Resolver<ResolversTypes['Media'], ParentType, ContextType, RequireFields<MutationAddMediaArgs, 'item'>>;
  addMediacategory?: Resolver<ResolversTypes['Mediacategory'], ParentType, ContextType, RequireFields<MutationAddMediacategoryArgs, 'item'>>;
  addPage?: Resolver<ResolversTypes['Page'], ParentType, ContextType, RequireFields<MutationAddPageArgs, 'item'>>;
  addRole?: Resolver<ResolversTypes['Role'], ParentType, ContextType, RequireFields<MutationAddRoleArgs, 'item'>>;
  addRow?: Resolver<ResolversTypes['Row'], ParentType, ContextType, RequireFields<MutationAddRowArgs, 'item'>>;
  addSection?: Resolver<ResolversTypes['Section'], ParentType, ContextType, RequireFields<MutationAddSectionArgs, 'item'>>;
  addUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationAddUserArgs, 'item'>>;
  deleteBlock?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteBlockArgs, 'id'>>;
  deleteBlockRelation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteBlockRelationArgs, 'id' | 'parentId' | 'parentType'>>;
  deleteColumn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteColumnArgs, 'id'>>;
  deleteContentblock?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteContentblockArgs, 'id'>>;
  deleteMedia?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteMediaArgs, 'id'>>;
  deleteMediaRelation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteMediaRelationArgs, 'id' | 'parentId' | 'parentType'>>;
  deleteMediacategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteMediacategoryArgs, 'id'>>;
  deletePage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeletePageArgs, 'id'>>;
  deleteRole?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteRoleArgs, 'id'>>;
  deleteRow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteRowArgs, 'id'>>;
  deleteSection?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteSectionArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  duplicateBlock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDuplicateBlockArgs, 'id'>>;
  duplicateColumn?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDuplicateColumnArgs, 'id'>>;
  duplicatePage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDuplicatePageArgs, 'id'>>;
  duplicateRow?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDuplicateRowArgs, 'id'>>;
  duplicateSection?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDuplicateSectionArgs, 'id'>>;
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'password' | 'username'>>;
  patchBlock?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType, RequireFields<MutationPatchBlockArgs, 'id' | 'patch'>>;
  patchColumn?: Resolver<Maybe<ResolversTypes['Column']>, ParentType, ContextType, RequireFields<MutationPatchColumnArgs, 'id' | 'patch'>>;
  patchContentblock?: Resolver<Maybe<ResolversTypes['Contentblock']>, ParentType, ContextType, RequireFields<MutationPatchContentblockArgs, 'id' | 'patch'>>;
  patchMedia?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType, RequireFields<MutationPatchMediaArgs, 'id' | 'patch'>>;
  patchMediacategory?: Resolver<Maybe<ResolversTypes['Mediacategory']>, ParentType, ContextType, RequireFields<MutationPatchMediacategoryArgs, 'id' | 'patch'>>;
  patchPage?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<MutationPatchPageArgs, 'id' | 'patch'>>;
  patchRole?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<MutationPatchRoleArgs, 'id' | 'patch'>>;
  patchRow?: Resolver<Maybe<ResolversTypes['Row']>, ParentType, ContextType, RequireFields<MutationPatchRowArgs, 'id' | 'patch'>>;
  patchSection?: Resolver<Maybe<ResolversTypes['Section']>, ParentType, ContextType, RequireFields<MutationPatchSectionArgs, 'id' | 'patch'>>;
  patchUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationPatchUserArgs, 'id' | 'patch'>>;
  verify?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_since?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  i18n?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  meta_description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nParent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Page']>>>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Page']>>>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sections?: Resolver<Maybe<Array<Maybe<ResolversTypes['Section']>>>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  template_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Permission'] = ResolversParentTypes['Permission']> = {
  keymodule?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType, RequireFields<QueryBlockArgs, 'id'>>;
  blocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Block']>>>, ParentType, ContextType, Partial<QueryBlocksArgs>>;
  column?: Resolver<Maybe<ResolversTypes['Column']>, ParentType, ContextType, RequireFields<QueryColumnArgs, 'id'>>;
  columns?: Resolver<Maybe<Array<Maybe<ResolversTypes['Column']>>>, ParentType, ContextType, Partial<QueryColumnsArgs>>;
  contentblock?: Resolver<Maybe<ResolversTypes['Contentblock']>, ParentType, ContextType, RequireFields<QueryContentblockArgs, 'id'>>;
  contentblocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contentblock']>>>, ParentType, ContextType, Partial<QueryContentblocksArgs>>;
  layouts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Layout']>>>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType, RequireFields<QueryMediaArgs, 'id'>>;
  mediacategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mediacategory']>>>, ParentType, ContextType, Partial<QueryMediacategoriesArgs>>;
  mediacategory?: Resolver<Maybe<ResolversTypes['Mediacategory']>, ParentType, ContextType, RequireFields<QueryMediacategoryArgs, 'id'>>;
  medias?: Resolver<Maybe<Array<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType, Partial<QueryMediasArgs>>;
  nblocks?: Resolver<Maybe<ResolversTypes['_Count']>, ParentType, ContextType, Partial<QueryNblocksArgs>>;
  ncolumns?: Resolver<Maybe<ResolversTypes['_Count']>, ParentType, ContextType, Partial<QueryNcolumnsArgs>>;
  ncontentblocks?: Resolver<Maybe<ResolversTypes['_Count']>, ParentType, ContextType, Partial<QueryNcontentblocksArgs>>;
  nmediacategories?: Resolver<Maybe<ResolversTypes['_Count']>, ParentType, ContextType, Partial<QueryNmediacategoriesArgs>>;
  nmedias?: Resolver<Maybe<ResolversTypes['_Count']>, ParentType, ContextType, Partial<QueryNmediasArgs>>;
  npages?: Resolver<Maybe<ResolversTypes['_Count']>, ParentType, ContextType, Partial<QueryNpagesArgs>>;
  nroles?: Resolver<Maybe<ResolversTypes['_Count']>, ParentType, ContextType, Partial<QueryNrolesArgs>>;
  nrows?: Resolver<Maybe<ResolversTypes['_Count']>, ParentType, ContextType, Partial<QueryNrowsArgs>>;
  nsections?: Resolver<Maybe<ResolversTypes['_Count']>, ParentType, ContextType, Partial<QueryNsectionsArgs>>;
  nusers?: Resolver<Maybe<ResolversTypes['_Count']>, ParentType, ContextType, Partial<QueryNusersArgs>>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QueryPageArgs, 'id'>>;
  pageStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['Filter']>>>, ParentType, ContextType>;
  pages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Page']>>>, ParentType, ContextType, Partial<QueryPagesArgs>>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType, RequireFields<QueryRoleArgs, 'id'>>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Role']>>>, ParentType, ContextType, Partial<QueryRolesArgs>>;
  row?: Resolver<Maybe<ResolversTypes['Row']>, ParentType, ContextType, RequireFields<QueryRowArgs, 'id'>>;
  rows?: Resolver<Maybe<Array<Maybe<ResolversTypes['Row']>>>, ParentType, ContextType, Partial<QueryRowsArgs>>;
  section?: Resolver<Maybe<ResolversTypes['Section']>, ParentType, ContextType, RequireFields<QuerySectionArgs, 'id'>>;
  sections?: Resolver<Maybe<Array<Maybe<ResolversTypes['Section']>>>, ParentType, ContextType, Partial<QuerySectionsArgs>>;
  treemediacategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mediacategory']>>>, ParentType, ContextType, Partial<QueryTreemediacategoriesArgs>>;
  treepages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Page']>>>, ParentType, ContextType, Partial<QueryTreepagesArgs>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  userStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['Filter']>>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_since?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  i18n?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userpermissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Userpermission']>>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Row'] = ResolversParentTypes['Row']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  columns?: Resolver<Maybe<Array<Maybe<ResolversTypes['Column']>>>, ParentType, ContextType>;
  contained?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_since?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gutters?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  i18n?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  margin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  padding?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  section_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uniqueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Section'] = ResolversParentTypes['Section']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_since?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fit_height_to_bk_image?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  i18n?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  margin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  padding?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parent_module?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rows?: Resolver<Maybe<Array<Maybe<ResolversTypes['Row']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uniqueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  video?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_since?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  last_login_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  permissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Permission']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  Block?: BlockResolvers<ContextType>;
  Column?: ColumnResolvers<ContextType>;
  Contentblock?: ContentblockResolvers<ContextType>;
  Filter?: FilterResolvers<ContextType>;
  Layout?: LayoutResolvers<ContextType>;
  ListInput?: GraphQLScalarType;
  Media?: MediaResolvers<ContextType>;
  Mediacategory?: MediacategoryResolvers<ContextType>;
  MediacategoryParents?: MediacategoryParentsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  Permission?: PermissionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  Row?: RowResolvers<ContextType>;
  Section?: SectionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  Userpermission?: UserpermissionResolvers<ContextType>;
  _Count?: _CountResolvers<ContextType>;
};

