import { GraphQLError } from "graphql";

import { ClientRequestError } from "../../../utils/errors/request";

export interface GraphQLClientError {
  message?: string;
  response: {
    errors: GraphQLError[];
  };
}

export const _handleGraphqlRequestErrors = ({ err }: { err: Error | GraphQLClientError }) => {
  if ("response" in err && "errors" in err.response) {
    const graphqlErrors = err.response.errors;
    const firstError = graphqlErrors[0];

    /** We don't know how to handle this error, so we re-throw. */
    if (firstError) {
      const extensionCode: string | undefined =
        firstError.extensions?.code ?? "CLIENT::UNKNOWN_ERROR";

      throw new ClientRequestError({
        message: `Request failed with error code: ${extensionCode}`,
      });
    }
  }

  /** We don't know how to handle this error, so we re-throw. */
  throw new ClientRequestError({
    message: `Request failed: ${err.message || JSON.stringify(err)}`,
  });
};
