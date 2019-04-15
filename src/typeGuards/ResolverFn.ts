import { Resolver, ResolverFn } from "../users/__generated_types/types";

export const isResolverFn = <R, P, A, C>(resolver: Resolver<R, P, C, A>): resolver is ResolverFn<R, P, C, A> => {
    return resolver instanceof Function
}