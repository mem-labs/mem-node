console.log("yahoo");
import { setupServer } from "msw/node";

import { RuntimeError } from "../../utils/errors/runtime";

import { GLOBAL_MOCK_SERVER_CONFIG } from "./constants";

/**
 * Initialize the mock server.
 * We can configure any default endpoints here.
 */
export const _initializeMockServer = async () => {
  GLOBAL_MOCK_SERVER_CONFIG.instance = setupServer();
};

export const _mockServerInstance = () => {
  const { instance } = GLOBAL_MOCK_SERVER_CONFIG;

  if (!instance) {
    throw new RuntimeError({
      message: `
        The globally shared mock server instance has not yet been initialized.\
        You can do so using => mockServerService.initialize()
      `,
    });
  }

  return instance;
};

export const _mockServerListen = () => _mockServerInstance().listen();

export const _mockServerResetHandlers = () => _mockServerInstance().resetHandlers();

export const _mockServerClose = () => _mockServerInstance().close();
