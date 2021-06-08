/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/**
 * This file is automatically generated by graphql-code-generator.
 * Do not edit it manually.
 */

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Cursor Scalar Type */
  Cursor: any;
  /** DateTime Scalar Type */
  DateTime: any;
  /** Uuid Scalar Type */
  Uuid: any;
};

/** An Account. */
export type GqAccount = GqNode & {
  __typename?: "Account";
  /** The unique identifier of the entity. */
  id: Scalars["Uuid"];
  /** The primary email connected to the user's account. */
  email: Scalars["String"];
  /** API keys associated with the account. */
  accountApiKeys: GqAccountApiKeyConnection;
};

/** An Account. */
export type GqAccountAccountApiKeysArgs = {
  after?: Maybe<Scalars["Cursor"]>;
  before?: Maybe<Scalars["Cursor"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  filterBy?: Maybe<GqAccountAccountApiKeysFilters>;
};

export type GqAccountAccountApiKeysFilters = {
  /** Include API Keys which have been revoked. */
  includeRevoked: Maybe<Scalars["Boolean"]>;
};

/** An Account API Key. */
export type GqAccountApiKey = GqNode & {
  __typename?: "AccountApiKey";
  /** The unique identifier of the entity. */
  id: Scalars["Uuid"];
  /** The label of the token. */
  label: Scalars["String"];
  /** Some details about the token (what it is used for, where the token is stored, ...). */
  details: Maybe<Scalars["String"]>;
  /** The time at which the API Key was created. */
  createdAt: Scalars["DateTime"];
  /** The account that this API Key belongs to. */
  account: GqAccount;
};

/** The connection type for AccountApiKey. */
export type GqAccountApiKeyConnection = {
  __typename?: "AccountApiKeyConnection";
  /** A list of edges. */
  edges: Array<GqAccountApiKeyEdge>;
  /** A list of nodes. */
  nodes: Array<GqAccountApiKey>;
  /** Information to aid in pagination. */
  pageInfo: GqPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GqAccountApiKeyEdge = {
  __typename?: "AccountApiKeyEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["Cursor"];
  /** The item at the end of the edge. */
  node: Maybe<GqAccountApiKey>;
};

/** The connection type for Account. */
export type GqAccountConnection = {
  __typename?: "AccountConnection";
  /** A list of edges. */
  edges: Array<GqAccountEdge>;
  /** A list of nodes. */
  nodes: Array<GqAccount>;
  /** Information to aid in pagination. */
  pageInfo: GqPageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"];
};

/** An edge in a connection. */
export type GqAccountEdge = {
  __typename?: "AccountEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["Cursor"];
  /** The item at the end of the edge. */
  node: GqAccount;
};

export type GqCreateAccountApiKeyInput = {
  /** The identifier for the Account API Key. If not provided, the server will generate one. */
  accountApiKeyId: Maybe<Scalars["Uuid"]>;
  /** The unique API token value. If not provided, the server will generate one. */
  token: Maybe<Scalars["Uuid"]>;
  /** The label for the API key. */
  label: Scalars["String"];
  /** Some details about the API key (what it is used for, where the token is stored, ...). */
  details: Maybe<Scalars["String"]>;
};

export type GqCreateAccountApiKeyPayload = {
  __typename?: "CreateAccountApiKeyPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The API key that was created. */
  accountApiKey: GqAccountApiKey;
  /** The token associated with the newly-created API Key. */
  token: Scalars["Uuid"];
};

export type GqCreateMemInput = {
  /** The identifier for the Mem. If not provided, the server will generate one. */
  memId: Maybe<Scalars["Uuid"]>;
  /**
   * The initial contents of the mem.
   * Titles and tags are automatically parsed from the content.
   */
  content: Scalars["String"];
  /**
   * Specifies the format of the input.
   * Defaults to "markdown".
   */
  format: Maybe<GqMemFormat>;
  /** Specify whether the mem should be automatically marked as "read". */
  isRead: Maybe<Scalars["Boolean"]>;
  /** Specify whether the mem should be automatically marked as "archived". */
  isArchived: Maybe<Scalars["Boolean"]>;
  /** Specify a timestamp at which the mem will "resurface". */
  scheduledFor: Maybe<Scalars["DateTime"]>;
  /**
   * Defaults to the current time.
   * Pass an explicit time to override the default.
   */
  createdAt: Maybe<Scalars["DateTime"]>;
};

export type GqCreateMemPayload = {
  __typename?: "CreateMemPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The Mem which was created. */
  mem: GqMem;
};

/** Details about the server's health. */
export type GqHealthCheckDetails = {
  __typename?: "HealthCheckDetails";
  /** Should always be true if the server responds. */
  apiStatus: Scalars["Boolean"];
  /** Queries the postgres database to ensure it is working. */
  postgresStatus: Scalars["Boolean"];
  /** Queries the firestore database to ensure it is working. */
  firestoreStatus: Scalars["Boolean"];
  /** Details regarding the server's build/deployment/environment/.. */
  serverInfo: GqServerInfo;
};

/** A mem - our standard Rich-Text-Document entity. */
export type GqMem = GqNode & {
  __typename?: "Mem";
  /** The unique identifier of the entity. */
  id: Scalars["Uuid"];
};

export enum GqMemFormat {
  Markdown = "MARKDOWN",
}

export type GqMutation = {
  __typename?: "Mutation";
  _empty: Maybe<Scalars["String"]>;
  /** Create a new Account API key. */
  createAccountApiKey: GqCreateAccountApiKeyPayload;
  /** Updates an existing Account API key's details. */
  updateAccountApiKeyDetails: GqUpdateAccountApiKeyDetailsPayload;
  /** Revoke an existing Account API Key. */
  revokeAccountApiKey: GqRevokeAccountApiKeyPayload;
  /** Create a new Mem. */
  createMem: GqCreateMemPayload;
  /** Create a new Mem. */
  batchCreateMems: Array<GqCreateMemPayload>;
};

export type GqMutationCreateAccountApiKeyArgs = {
  input: GqCreateAccountApiKeyInput;
};

export type GqMutationUpdateAccountApiKeyDetailsArgs = {
  input: GqUpdateAccountApiKeyDetailsInput;
};

export type GqMutationRevokeAccountApiKeyArgs = {
  input: GqRevokeAccountApiKeyInput;
};

export type GqMutationCreateMemArgs = {
  input: GqCreateMemInput;
};

export type GqMutationBatchCreateMemsArgs = {
  inputs: Array<GqCreateMemInput>;
};

/** An object with a universal ID (globally-unique). */
export type GqNode = {
  /** The unique identifier of the entity. */
  id: Scalars["Uuid"];
};

/** Information about pagination in a connection. */
export type GqPageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars["Cursor"]>;
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars["Cursor"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
};

export type GqQuery = {
  __typename?: "Query";
  _empty: Maybe<Scalars["String"]>;
  /** Get an Account API Key by id. */
  getAccountApiKey: GqAccountApiKey;
  /** Search for account api keys. */
  searchAccountApiKeys: GqAccountApiKeyConnection;
  /**
   * Gets the currently authenticated account.
   * If there is not a currently authenticated account, this raises an error.
   */
  getCurrentAccount: GqAccount;
  /** Get an Account by id. */
  getAccount: GqAccount;
  /** Search for account api keys. */
  searchAccounts: GqAccountConnection;
  /** Server health-check details. */
  healthCheckDetails: GqHealthCheckDetails;
  /** Get a Mem by id. */
  getMem: GqMem;
};

export type GqQueryGetAccountApiKeyArgs = {
  accountApiKeyId: Scalars["Uuid"];
};

export type GqQuerySearchAccountApiKeysArgs = {
  after?: Maybe<Scalars["Cursor"]>;
  before?: Maybe<Scalars["Cursor"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  filterBy?: Maybe<GqSearchAccountApiKeysFilters>;
};

export type GqQueryGetAccountArgs = {
  accountId: Scalars["Uuid"];
};

export type GqQuerySearchAccountsArgs = {
  after?: Maybe<Scalars["Cursor"]>;
  before?: Maybe<Scalars["Cursor"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  filterBy?: Maybe<GqSearchAccountsFilters>;
};

export type GqQueryGetMemArgs = {
  memId: Scalars["Uuid"];
};

export type GqRevokeAccountApiKeyInput = {
  /** The identifier for the Account API Key. */
  accountApiKeyId: Scalars["Uuid"];
};

export type GqRevokeAccountApiKeyPayload = {
  __typename?: "RevokeAccountApiKeyPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type GqSearchAccountApiKeysFilters = {
  /** Include API Keys which have been revoked. */
  includeRevoked: Maybe<Scalars["Boolean"]>;
};

export type GqSearchAccountsFilters = {
  /** Include accounts which have been revoked. */
  includeArchived: Maybe<Scalars["Boolean"]>;
};

/** Details regarding the server's build/deployment/environment/... */
export type GqServerInfo = {
  __typename?: "ServerInfo";
  /** Time that the server was last built/deployed. */
  builtAt: Scalars["DateTime"];
  /** The name of the deployed service. */
  serviceName: Scalars["String"];
  /**
   * An identifier which uniquely represents this build.
   * (A new identifier is generated every time the app is built.)
   */
  buildIdentifier: Scalars["Uuid"];
  /**
   * An identifier which uniquely represents this server instance.
   * (A new identifier is generated every time the server boots.)
   */
  instanceIdentifier: Scalars["Uuid"];
  /**
   * An identifier which uniquely represents this API request.
   * (A new identifier is generated every time a request is made.)
   */
  requestIdentifier: Scalars["Uuid"];
};

export type GqSubscription = {
  __typename?: "Subscription";
  _empty: Maybe<Scalars["String"]>;
};

export type GqUpdateAccountApiKeyDetailsInput = {
  /** The identifier for the Account API Key. */
  accountApiKeyId: Scalars["Uuid"];
  /** Some details about the API key (what it is used for, where the token is stored, ...). */
  details: Maybe<Scalars["String"]>;
};

export type GqUpdateAccountApiKeyDetailsPayload = {
  __typename?: "UpdateAccountApiKeyDetailsPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The API key that was updated. */
  accountApiKey: GqAccountApiKey;
};

export type GqBatchCreateMemsMutationVariables = Exact<{
  inputs: Array<GqCreateMemInput> | GqCreateMemInput;
}>;

export type GqBatchCreateMemsMutation = { __typename?: "Mutation" } & {
  batchCreateMems: Array<
    { __typename?: "CreateMemPayload" } & Pick<GqCreateMemPayload, "success"> & {
        mem: { __typename?: "Mem" } & Pick<GqMem, "id">;
      }
  >;
};

export type GqCreateMemMutationVariables = Exact<{
  input: GqCreateMemInput;
}>;

export type GqCreateMemMutation = { __typename?: "Mutation" } & {
  createMem: { __typename?: "CreateMemPayload" } & Pick<GqCreateMemPayload, "success"> & {
      mem: { __typename?: "Mem" } & Pick<GqMem, "id">;
    };
};

export type GqHealthCheckQueryVariables = Exact<{ [key: string]: never }>;

export type GqHealthCheckQuery = { __typename?: "Query" } & {
  healthCheckDetails: { __typename?: "HealthCheckDetails" } & Pick<
    GqHealthCheckDetails,
    "apiStatus"
  >;
};

export const BatchCreateMemsDocument: DocumentNode<
  GqBatchCreateMemsMutation,
  GqBatchCreateMemsMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "BatchCreateMems" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "inputs" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: { kind: "NamedType", name: { kind: "Name", value: "CreateMemInput" } },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "batchCreateMems" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "inputs" },
                value: { kind: "Variable", name: { kind: "Name", value: "inputs" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mem" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const CreateMemDocument: DocumentNode<GqCreateMemMutation, GqCreateMemMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateMem" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CreateMemInput" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createMem" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mem" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const HealthCheckDocument: DocumentNode<GqHealthCheckQuery, GqHealthCheckQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "HealthCheck" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "healthCheckDetails" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "apiStatus" } }],
            },
          },
        ],
      },
    },
  ],
};
