
type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Book = {
  id: Scalars['Int'],
  name: Scalars['String'],
};

export type Query = {
  getBook?: Maybe<Book>,
  getUser?: Maybe<User>,
  getUsers: Array<User>,
};


export type QueryGetBookArgs = {
  id: Scalars['Int']
};


export type QueryGetUserArgs = {
  id: Scalars['Int']
};


export type QueryGetUsersArgs = {
  ids: Array<Scalars['Int']>
};

export type User = {
  id: Scalars['Int'],
  name: Scalars['String'],
  bookId?: Maybe<Scalars['Int']>,
  book: Book,
};

import { GraphQLResolveInfo } from 'graphql';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>



export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

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
  Query: Query,
  Int: Scalars['Int'],
  Book: Book,
  String: Scalars['String'],
  User: User,
  Boolean: Scalars['Boolean'],
};

export type BookResolvers<Context = any, ParentType = ResolversTypes['Book']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, Context>,
  name?: Resolver<ResolversTypes['String'], ParentType, Context>,
};

export type QueryResolvers<Context = any, ParentType = ResolversTypes['Query']> = {
  getBook?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, Context, QueryGetBookArgs>,
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, Context, QueryGetUserArgs>,
  getUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, Context, QueryGetUsersArgs>,
};

export type UserResolvers<Context = any, ParentType = ResolversTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, Context>,
  name?: Resolver<ResolversTypes['String'], ParentType, Context>,
  bookId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, Context>,
  book?: Resolver<ResolversTypes['Book'], ParentType, Context>,
};

export type Resolvers<Context = any> = {
  Book?: BookResolvers<Context>,
  Query?: QueryResolvers<Context>,
  User?: UserResolvers<Context>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<Context = any> = Resolvers<Context>;
