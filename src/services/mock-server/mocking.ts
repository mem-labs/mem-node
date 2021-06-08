import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { OperationDefinitionNode } from "graphql";
import { graphql } from "msw";
import { JsonObject } from "type-fest";

import { RuntimeError } from "../../utils/errors/runtime";

import { mockServerService } from ".";

export const mockQuery = <TVariables extends JsonObject, TResult>({
  document,
  mockData,
}: {
  document: TypedDocumentNode<TResult, TVariables>;
  mockData: TResult;
}) => {
  const documentOperationDefinition = document.definitions[0] as OperationDefinitionNode;
  const operationName = documentOperationDefinition.name?.value;

  if (!operationName) {
    throw new RuntimeError({
      message: "Unable to parse operation name from graphql document.",
    });
  }

  const mockedQuery = graphql.query<TResult, TVariables>(operationName, (_req, res, ctx) => {
    return res(ctx.data(mockData));
  });

  mockServerService.instance().use(mockedQuery);
};
