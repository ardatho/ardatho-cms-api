import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { constraintDirectiveTypeDefs } from 'graphql-constraint-directive/apollo4';
import * as path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, './entities/**/type.graphql'));
typesArray.push(constraintDirectiveTypeDefs);
export const typeDefs = mergeTypeDefs(typesArray);
