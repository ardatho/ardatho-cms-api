import { and } from 'graphql-shield';
import { canView, isAuthenticated, isItMe } from 'utils/shield';

// Permissions
export default {
  Query: {
    users: and(isAuthenticated, canView('user')),
    nusers: isAuthenticated,
    user: isAuthenticated,
    me: isAuthenticated,
  },
  Mutation: {
    patchUser: isAuthenticated,
    addUser: isAuthenticated,
    deleteUser: isAuthenticated,
    verify: isAuthenticated,
  },
  User: {
    permissions: isItMe,
  },
};
