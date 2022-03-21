import { CreateMemDocument, GqCreateMemMutationVariables } from "../../api/__codegen__/types";

import { MemClientMethodArgs } from "./types";

type MutationVariables = GqCreateMemMutationVariables["input"];

export interface MemClientCreateMemArgs {
  content: MutationVariables["content"];
  isRead?: MutationVariables["isRead"];
  isArchived?: MutationVariables["isArchived"];
  scheduledFor?: MutationVariables["scheduledFor"];
  createdAt?: MutationVariables["createdAt"];
  memId?: MutationVariables["memId"];
}

export const memClientCreateMem =
  ({ memClient }: MemClientMethodArgs) =>
  /**
   * Creates a new mem, then returns the some details about the created mem.
   */
  async ({
    memId,
    content,
    isRead,
    isArchived,
    scheduledFor,
    createdAt,
  }: MemClientCreateMemArgs) => {
    const input = {
      memId: memId ?? null,
      content,
      format: null,
      isRead: isRead ?? null,
      isArchived: isArchived ?? null,
      scheduledFor: scheduledFor ?? null,
      createdAt: createdAt ?? null,
      richTextDocument: null,
      source: null,
      clientId: null,
    };

    const result = await memClient.graphqlRequest(CreateMemDocument, {
      input,
    });

    const memData = result.createMem.mem;

    return memData;
  };
