import { Logger } from "../utils/logger";
import { LogLevel } from "../utils/logger/types";
import { JsonObject } from "type-fest";
import { defaultMemApiEndpoint } from "./constants";
import { GraphQLClient } from "graphql-request";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { HealthCheckDocument, CreateMemDocument } from "../api/__codegen__/types";

export class MemClient {
  private apiClient: GraphQLClient;
  private logger: Logger;

  constructor({
    apiEndpoint = defaultMemApiEndpoint,
    apiKey,
    logLevel,
  }: {
    apiEndpoint: string;
    apiKey: string;
    logLevel?: LogLevel;
  }) {
    this.logger = new Logger({
      level: logLevel,
    });

    const defaultHeaders = { "Content-Type": "application/json", Authentication: apiKey };

    this.apiClient = new GraphQLClient(apiEndpoint, {
      headers: defaultHeaders,
    });

    this.logger.debug(`[constructor()] MemClient Initialized.`);
  }

  private async graphqlRequest<TVariables extends JsonObject, TResult>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document: TypedDocumentNode<Record<string, any>, TVariables>,
    variables?: TVariables
  ) {
    this.logger.debug(`[graphqlRequest()] Started.`, document, variables);

    const data = await this.apiClient.request<TResult, TVariables>(document, variables);

    console.log("WOW!", data);

    return data;
  }

  async healthCheck(): Promise<void> {
    return await this.graphqlRequest(HealthCheckDocument);
  }

  // GqCreateMemMutationVariables
  async createMem(): Promise<void> {
    const a = await this.graphqlRequest(CreateMemDocument, { content: "Hello World!!!" });
  }
}
