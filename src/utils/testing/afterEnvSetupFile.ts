import { mockServerService } from "../../services/mock-server";

beforeAll(() => {
  /** Enable API mocking before tests. */
  mockServerService.initialize();
  mockServerService.listen();
});

afterEach(() => {
  /** Reset any runtime request handlers we may add during the tests. */
  mockServerService.resetHandlers();

  /** Reset any mocks which may have been triggered */
  jest.resetAllMocks();
});

afterAll(() => {
  /** Disable API mocking after the tests are done. */
  mockServerService.close();
});
