import {
  _initializeMockServer,
  _mockServerClose,
  _mockServerInstance,
  _mockServerListen,
  _mockServerResetHandlers,
} from "./lifecycle";
import { _mockServerMutation, _mockServerQuery } from "./mocking";

export const mockServerService = {
  initialize: _initializeMockServer,
  instance: _mockServerInstance,
  listen: _mockServerListen,
  resetHandlers: _mockServerResetHandlers,
  close: _mockServerClose,
  mockQuery: _mockServerQuery,
  mockMutation: _mockServerMutation,
} as const;
