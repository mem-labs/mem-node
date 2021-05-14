import { CreateMemDocument, GqCreateMemMutationVariables } from "../../api/__codegen__/types";
import { MemClientMethodArgs } from "./types";

export const memClientCreateMem =
  ({ memClient }: MemClientMethodArgs) =>
  /**
   * Creates a new mem, then returns the some details about the created mem.
   */
  async (variables: GqCreateMemMutationVariables) => {
    const result = await memClient.graphqlRequest(CreateMemDocument, {
      ...variables,
    });

    return result.createMem.mem;
  };
