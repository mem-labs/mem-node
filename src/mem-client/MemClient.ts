import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";
import { JsonObject } from "type-fest";

import { ClientInitializationError } from "../utils/errors/base";
import { Logger } from "../utils/logger";

import { defaultMemApiEndpoint } from "./constants";
import { memClientCreateMem } from "./methods/createMem";
import { memClientHealthCheck } from "./methods/healthCheck";
import { MemClientConfig } from "./types";

export class MemClient {
  private apiClient: GraphQLClient;
  private logger: Logger;

  constructor({ apiEndpoint = defaultMemApiEndpoint, apiKey, logLevel }: MemClientConfig) {
    this.logger = new Logger({
      level: logLevel,
    });

    if (!apiKey) {
      throw new ClientInitializationError({
        message: "An `apiKey` must be provided when initializing the MemClient.",
      });
    }

    const defaultHeaders = {
      "Content-Type": "application/json",
      Authorization: apiKey,
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

      throw err;
    }
  }

  healthCheck = memClientHealthCheck({ memClient: this });

  createMem = memClientCreateMem({ memClient: this });
}
