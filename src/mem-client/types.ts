import { LogLevel } from "../utils/logger/types";

export interface MemClientConfig {
  apiEndpoint?: string;
  logLevel?: LogLevel;
  apiAccessToken: string;
}
