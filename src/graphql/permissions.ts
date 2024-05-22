import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';
import * as path from 'path';

const permissionsArray = loadFilesSync(path.join(__dirname, './entities/**/shield.ts'));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const permissions: any = mergeResolvers(permissionsArray);
