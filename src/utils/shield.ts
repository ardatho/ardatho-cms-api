import { rule } from 'graphql-shield';

export const isItMe = rule({ cache: 'contextual' })(async (parent, args, ctx) => {
  return ctx.user.id === parent.id;
});

export const isAuthenticated = rule({ cache: 'contextual' })(async (parent, args, ctx) => {
  if (!ctx.user) {
    return new Error('auth.messages.invalid_user');
  }
  return ctx.user !== null;
});

export const canView = (moduleName: string) =>
  rule({ cache: 'contextual' })(async (parent, args, ctx) => {
    console.log(moduleName);
    return ctx.user.role === 'admin';
  });

export const isAdmin = rule({ cache: 'contextual' })(async (parent, args, ctx) => {
  return ctx.user.role === 'admin';
});

export const isEditor = rule({ cache: 'contextual' })(async (parent, args, ctx) => {
  return ctx.user.role === 'editor';
});
