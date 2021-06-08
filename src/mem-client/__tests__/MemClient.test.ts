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
    it("fires off a graphql request", () => {
      const result = await getMockClient().healthCheck();
    });
  });
});
