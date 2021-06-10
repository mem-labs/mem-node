import { _handleGraphqlRequestErrors } from "./handleErrors";

export const graphqlService = {
  handleRequestErrors: _handleGraphqlRequestErrors,
} as const;
