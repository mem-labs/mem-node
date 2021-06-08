import { HealthCheckDocument } from "../../api/__codegen__/types";
import { mockQuery } from "../../services/mock-server/mocking";
import { MemClient } from "../MemClient";

const mockApiKey = "mock-api-key";

const getMockClient = () => {
  const mockClient = new MemClient({ apiKey: mockApiKey });

  return mockClient;
};

describe("MemClient", () => {
  it("can be instantiated", () => {
    const client = getMockClient();

    expect(client).toBeInstanceOf(MemClient);
  });

  describe("healthCheck", () => {
    it("fires off a graphql request", async () => {
      mockQuery({
        document: HealthCheckDocument,
        mockData: {
          healthCheckDetails: { apiStatus: true },
        },
      });

      const result = await getMockClient().healthCheck();

      expect(result).toBeTrue();
    });
  });
});
