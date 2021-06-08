import { SetupServerApi } from "msw/lib/types/node";

export interface GlobalMockServerConfig {
  instance?: SetupServerApi;
}
