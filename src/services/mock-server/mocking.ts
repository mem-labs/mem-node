import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { OperationDefinitionNode } from "graphql";
import { graphql } from "msw";
import { JsonObject } from "type-fest";

import { RuntimeError } from "../../utils/errors/runtime";

import { mockServerService } from ".";

const parseOperationName = <TVariables extends JsonObject, TResult>({
  document,
}: {
  document: TypedDocumentNode<TResult, TVariables>;
}) => {
  const documentOperationDefinition = document.definitions[0] as OperationDefinitionNode;
  const operationName = documentOperationDefinition.name?.value;

  if (!operationName) {
    throw new RuntimeError({
      message: "Unable to parse operation name from graphql document.",
    });
  }

  return { operationName };
};

export const _mockServerQuery = <TVariables extends JsonObject, TResult>({
  document,
  data,
}: {
  document: TypedDocumentNode<TResult, TVariables>;
  data: TResult;
}) => {
  const { operationName } = parseOperationName({ document });

  const mockedQuery = graphql.query<TResult, TVariables>(operationName, (_req, res, ctx) => {
    return res(ctx.data(data));
  });

  mockServerService.instance().use(mockedQuery);
};

export const _mockServerMutation = <TVariables extends JsonObject, TResult>({
  document,
  data,
}: {
  document: TypedDocumentNode<TResult, TVariables>;
  data: TResult;
}) => {
  const { operationName } = parseOperationName({ document });

  const mockedMutation = graphql.mutation<TResult, TVariables>(operationName, (_req, res, ctx) => {
    return res(ctx.data(data));
  });

  mockServerService.instance().use(mockedMutation);
};
