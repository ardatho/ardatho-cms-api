import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';
import * as path from 'path';

const resolversArray = loadFilesSync(path.join(__dirname, './entities/**/resolver.ts'));
const Queries = mergeResolvers(resolversArray);

const mutationsArray = loadFilesSync(path.join(__dirname, './entities/**/mutation.ts'));
const Mutations = mergeResolvers(mutationsArray);

export const resolvers = {
  ...Queries,
  ...Mutations,
};
