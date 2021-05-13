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
  includeRevoked?: Maybe<Scalars["Boolean"]>;
};

/** An Account API Key. */
export type GqAccountApiKey = GqNode & {
  __typename?: "AccountApiKey";
  /** The unique identifier of the entity. */
  id: Scalars["Uuid"];
  /** The label of the token. */
  label: Scalars["String"];
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
  node?: Maybe<GqAccountApiKey>;
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
  node?: Maybe<GqAccount>;
};

export type GqCreateAccountApiKeyInput = {
  /** The identifier for the Account API Key. If not provided, the server will generate one. */
  accountApiKeyId?: Maybe<Scalars["Uuid"]>;
  /** The unique API token value. If not provided, the server will generate one. */
  token?: Maybe<Scalars["Uuid"]>;
  /** The label for the API key. */
  label: Scalars["String"];
};

export type GqCreateAccountApiKeyPayload = {
  __typename?: "CreateAccountApiKeyPayload";
  /** The API key that was created. */
  accountApiKey: GqAccountApiKey;
  /** The token associated with the newly-created API Key. */
  token: Scalars["Uuid"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type GqCreateMemInput = {
  /**
   * The initial contents of the mem.
   * Titles and tags are automatically parsed from the content.
   */
  content: Scalars["String"];
  /**
   * Specifies the format of the input.
   * Defaults to "plaintext".
   */
  format?: Maybe<GqMemFormat>;
  /**
   * The newly created mem will - by default - appear in the user's inbox.
   * Pass skipInbox=true to automatically remove it from the inbox.
   */
  skipInbox?: Maybe<Scalars["Boolean"]>;
  /**
   * Defaults to the current time.
   * Pass an explicit time to override the default.
   */
  createdAt?: Maybe<Scalars["DateTime"]>;
  /**
   * Specify a timestamp at which the mem will "resurface".
   * (Similar to the "Snooze" action in the product UI).
   */
  snoozeUntil?: Maybe<Scalars["DateTime"]>;
};

export type GqCreateMemPayload = {
  __typename?: "CreateMemPayload";
  /** The Mem which was created. */
  mem: GqMem;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
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
  /** Details regarding the server's last build/deployment. */
  buildStatus: GqHealthCheckDetailsBuildStatus;
};

/** Details regarding the server's last build/deployment. */
export type GqHealthCheckDetailsBuildStatus = {
  __typename?: "HealthCheckDetailsBuildStatus";
  /** Time that the server was last built/deployed. */
  builtAt: Scalars["DateTime"];
};

/** A mem - our standard Rich-Text-Document entity. */
export type GqMem = GqNode & {
  __typename?: "Mem";
  /** The unique identifier of the entity. */
  id: Scalars["Uuid"];
  /** The title of the mem. */
  title: Scalars["String"];
  /** The content of the mem, available in different formats. */
  content: GqMemContent;
  /** The time the mem was created at. */
  createdAt: Scalars["DateTime"];
};

export type GqMemContent = {
  __typename?: "MemContent";
  /** A plaintext-formatted version of the mem content. */
  plaintext: Scalars["String"];
};

export enum GqMemFormat {
  Plaintext = "PLAINTEXT",
  Markdown = "MARKDOWN",
  Html = "HTML",
  RichTextDelta = "RICH_TEXT_DELTA",
}

export type GqMutation = {
  __typename?: "Mutation";
  _empty?: Maybe<Scalars["String"]>;
  /** Create a new Account API key. */
  createAccountApiKey?: Maybe<GqCreateAccountApiKeyPayload>;
  /** Revoke an existing Account API Key. */
  revokeAccountApiKey?: Maybe<GqRevokeAccountApiKeyPayload>;
  /** Create a new Mem. */
  createMem?: Maybe<GqCreateMemPayload>;
};

export type GqMutationCreateAccountApiKeyArgs = {
  input: GqCreateAccountApiKeyInput;
};

export type GqMutationRevokeAccountApiKeyArgs = {
  input: GqRevokeAccountApiKeyInput;
};

export type GqMutationCreateMemArgs = {
  input: GqCreateMemInput;
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
  endCursor?: Maybe<Scalars["Cursor"]>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["Cursor"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
};

export type GqQuery = {
  __typename?: "Query";
  _empty?: Maybe<Scalars["String"]>;
  /** Search for account api keys. */
  searchAccountApiKeys: GqAccountApiKeyConnection;
  /**
   * Gets the currently authenticated account.
   * If there is not a currently authenticated account, this raises an error.
   */
  getCurrentAccount: GqAccount;
  /** Search for account api keys. */
  searchAccounts: GqAccountConnection;
  /** Server health-check details. */
  healthCheckDetails: GqHealthCheckDetails;
};

export type GqQuerySearchAccountApiKeysArgs = {
  after?: Maybe<Scalars["Cursor"]>;
  before?: Maybe<Scalars["Cursor"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  filterBy?: Maybe<GqSearchAccountApiKeysFilters>;
};

export type GqQuerySearchAccountsArgs = {
  after?: Maybe<Scalars["Cursor"]>;
  before?: Maybe<Scalars["Cursor"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  filterBy?: Maybe<GqSearchAccountsFilters>;
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
  includeRevoked?: Maybe<Scalars["Boolean"]>;
};

export type GqSearchAccountsFilters = {
  /** Include accounts which have been revoked. */
  includeArchived?: Maybe<Scalars["Boolean"]>;
};

export type GqSubscription = {
  __typename?: "Subscription";
  _empty?: Maybe<Scalars["String"]>;
};

export type GqCreateMemMutationVariables = Exact<{
  content: Scalars["String"];
  format?: Maybe<GqMemFormat>;
  skipInbox?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  snoozeUntil?: Maybe<Scalars["DateTime"]>;
}>;

export type GqCreateMemMutation = { __typename?: "Mutation" } & {
  createMem?: Maybe<
    { __typename?: "CreateMemPayload" } & {
      mem: { __typename?: "Mem" } & Pick<GqMem, "id"> & {
          content: { __typename?: "MemContent" } & Pick<GqMemContent, "plaintext">;
        };
    }
  >;
};

export type GqHealthCheckQueryVariables = Exact<{ [key: string]: never }>;

export type GqHealthCheckQuery = { __typename?: "Query" } & {
  healthCheckDetails: { __typename?: "HealthCheckDetails" } & Pick<
    GqHealthCheckDetails,
    "apiStatus"
  >;
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
          variable: { kind: "Variable", name: { kind: "Name", value: "content" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "format" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "MemFormat" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skipInbox" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "createdAt" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "DateTime" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "snoozeUntil" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "DateTime" } },
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
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "content" },
                      value: { kind: "Variable", name: { kind: "Name", value: "content" } },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "format" },
                      value: { kind: "Variable", name: { kind: "Name", value: "format" } },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "skipInbox" },
                      value: { kind: "Variable", name: { kind: "Name", value: "skipInbox" } },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "createdAt" },
                      value: { kind: "Variable", name: { kind: "Name", value: "createdAt" } },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "snoozeUntil" },
                      value: { kind: "Variable", name: { kind: "Name", value: "snoozeUntil" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mem" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "plaintext" } },
                          ],
                        },
                      },
                    ],
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