import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";
import { JsonObject } from "type-fest";

import { graphqlService } from "../services/mock-server/graphql";
import { ClientInitializationError } from "../utils/errors/base";
import { RuntimeError } from "../utils/errors/runtime";
import { Logger } from "../utils/logger";

import { defaultMemAuthorizationScheme, defaultMemApiEndpoint } from "./constants";
import { memClientBatchCreateMems } from "./methods/batchCreateMems";
import { memClientCreateMem } from "./methods/createMem";
import { memClientHealthCheck } from "./methods/healthCheck";
import { MemClientConfig } from "./types";

export class MemClient {
  private apiClient: GraphQLClient;
  private logger: Logger;

  constructor({ apiEndpoint = defaultMemApiEndpoint, apiAccessToken, logLevel }: MemClientConfig) {
    this.logger = new Logger({
      level: logLevel,
    });

    if (!apiAccessToken) {
      throw new ClientInitializationError({
        message: "An `apiAccessToken` must be provided when initializing the MemClient.",
      });
    }

    const defaultHeaders = {
      "Content-Type": "application/json",
      Authorization: `${defaultMemAuthorizationScheme} ${apiAccessToken}`,
    };

    this.apiClient = new GraphQLClient(apiEndpoint, {
      headers: defaultHeaders,
    });

    this.logger.debug(`[constructor()] MemClient Initialized.`);
  }

  async graphqlRequest<TVariables extends JsonObject, TResult>(
    document: TypedDocumentNode<TResult, TVariables>,
    variables?: TVariables
  ) {
    this.logger.debug(`[graphqlRequest()] Started.`, document, variables);

    try {
      const data = await this.apiClient.request<TResult, TVariables>(document, variables);

      this.logger.debug(`[graphqlRequest()] Completed.`);

      return data;
    } catch (err) {
      this.logger.debug(`[graphqlRequest()] An error ocurred.`, err);

      graphqlService.handleRequestErrors({
        err,
      });
    }

    /** This should never be hit - adding it for TS purposes. */
    throw new RuntimeError();
  }

  healthCheck = memClientHealthCheck({ memClient: this });

  createMem = memClientCreateMem({ memClient: this });

  batchCreateMems = memClientBatchCreateMems({ memClient: this });
}
