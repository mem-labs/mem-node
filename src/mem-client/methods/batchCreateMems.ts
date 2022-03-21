import { BatchCreateMemsDocument } from "../../api/__codegen__/types";

import { MemClientCreateMemArgs } from "./createMem";
import { MemClientMethodArgs } from "./types";

export interface MemClientBatchCreateMemsArgs extends Array<MemClientCreateMemArgs> {}

export const memClientBatchCreateMems =
  ({ memClient }: MemClientMethodArgs) =>
  /**
   * Creates a new mem for each set of inputs, then returns the some details about the created mems.
   */
  async (batchArgs: MemClientBatchCreateMemsArgs) => {
    const inputs = batchArgs.map(
      ({ memId, content, isRead, isArchived, scheduledFor, createdAt }) => {
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

        return input;
      }
    );

    const result = await memClient.graphqlRequest(BatchCreateMemsDocument, {
      inputs,
    });

    const batchMemsData = result.batchCreateMems.map(data => data.mem);

    return batchMemsData;
  };
