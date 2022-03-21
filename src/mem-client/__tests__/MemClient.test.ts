import {
  BatchCreateMemsDocument,
  CreateMemDocument,
  HealthCheckDocument,
} from "../../api/__codegen__/types";
import { mockServerService } from "../../services/mock-server";
import { MemClient } from "../MemClient";

const mockApiKey = "mock-api-key";

const getMockClient = () => {
  const mockClient = new MemClient({ apiAccessToken: mockApiKey });

  return mockClient;
};

describe("MemClient", () => {
  it("can be instantiated", () => {
    const client = getMockClient();

    expect(client).toBeInstanceOf(MemClient);
  });

  describe("healthCheck", () => {
    beforeEach(() => {
      mockServerService.mockQuery({
        document: HealthCheckDocument,
        data: {
          healthCheckDetails: { apiStatus: true },
        },
      });
    });

    it("returns true", async () => {
      const result = await getMockClient().healthCheck();

      expect(result).toBeTrue();
    });

    describe("when the api status is false", () => {
      beforeEach(() => {
        mockServerService.mockQuery({
          document: HealthCheckDocument,
          data: {
            healthCheckDetails: { apiStatus: false },
          },
        });
      });

      it("return false", async () => {
        const result = await getMockClient().healthCheck();

        expect(result).toBeFalse();
      });
    });
  });

  describe("createMem", () => {
    beforeEach(() => {
      mockServerService.mockMutation({
        document: CreateMemDocument,
        data: {
          createMem: {
            success: true,
            mem: {
              id: "mock-id",
            },
          },
        },
      });
    });

    it("returns the created mem's data", async () => {
      const result = await getMockClient().createMem({
        content: "abc",
      });

      expect(result).toMatchObject({
        id: "mock-id",
      });
    });

    it("accepts all of the configuration options", async () => {
      const result = await getMockClient().createMem({
        content: "abc",
        isRead: false,
        isArchived: true,
        createdAt: new Date("July 1, 1867").toISOString(),
        scheduledFor: new Date("March 7, 2511").toISOString(),
        memId: "10000000-0000-4000-a000-000000000000",
      });

      expect(result).toMatchObject({
        id: "mock-id",
      });
    });
  });

  describe("batchCreateMems", () => {
    beforeEach(() => {
      mockServerService.mockMutation({
        document: BatchCreateMemsDocument,
        data: {
          batchCreateMems: [
            {
              success: true,
              mem: {
                id: "mock-id-1",
              },
            },
            {
              success: true,
              mem: {
                id: "mock-id-2",
              },
            },
          ],
        },
      });
    });

    it("returns the created mem's data", async () => {
      const result = await getMockClient().batchCreateMems([
        {
          content: "abc",
        },
        {
          content: "def",
        },
      ]);

      expect(result).toIncludeSameMembers([
        {
          id: "mock-id-1",
        },
        {
          id: "mock-id-2",
        },
      ]);
    });

    it("accepts all of the configuration options", async () => {
      const result = await getMockClient().batchCreateMems([
        {
          content: "abc",
          isRead: false,
          isArchived: true,
          createdAt: new Date("July 1, 1867").toISOString(),
          scheduledFor: new Date("March 7, 2511").toISOString(),
          memId: "10000000-0000-4000-a000-000000000000",
        },
        {
          content: "def",
          isRead: true,
          isArchived: false,
          createdAt: new Date("July 4, 1776").toISOString(),
          scheduledFor: new Date("October 27, 2560").toISOString(),
          memId: "20000000-0000-4000-a000-000000000000",
        },
      ]);

      expect(result).toIncludeSameMembers([
        {
          id: "mock-id-1",
        },
        {
          id: "mock-id-2",
        },
      ]);
    });
  });
});
