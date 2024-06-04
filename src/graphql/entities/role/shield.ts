import { and } from 'graphql-shield';
import { canView, isAuthenticated } from 'utils/shield';

// Permissions
export default {
  Query: {
    roles: and(isAuthenticated, canView('role')),
    nroles: isAuthenticated,
    role: isAuthenticated,
    me: isAuthenticated,
  },
  Mutation: {
    patchRole: isAuthenticated,
    addRole: isAuthenticated,
    deleteRole: isAuthenticated,
  },
};
