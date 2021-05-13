import { HealthCheckDocument } from "../../api/__codegen__/types";
import { MemClientMethodArgs } from "./types";

export const memClientHealthCheck =
  ({ memClient }: MemClientMethodArgs) =>
  /**
   * Returns true if the client is are able to successfully contact the server.
   *
   * Useful for verifying that your `apiKey` is working successfully.
   */
  async () => {
    const result = await memClient.graphqlRequest(HealthCheckDocument);

    return result.healthCheckDetails.apiStatus;
  };
