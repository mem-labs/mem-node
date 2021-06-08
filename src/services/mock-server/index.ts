import {
  _initializeMockServer,
  _mockServerClose,
  _mockServerInstance,
  _mockServerListen,
  _mockServerResetHandlers,
} from "./lifecycle";

export const mockServerService = {
  initialize: _initializeMockServer,
  instance: _mockServerInstance,
  listen: _mockServerListen,
  resetHandlers: _mockServerResetHandlers,
  close: _mockServerClose,
} as const;
