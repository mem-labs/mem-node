import { LogLevel } from "./types";

/**
 * Severity levels for log entries, mapped to comparable numbers.
 */
export const logLevelSeverities: { [key in LogLevel]: number } = {
  [LogLevel.ERROR]: 400,
  [LogLevel.WARN]: 300,
  [LogLevel.INFO]: 200,
  [LogLevel.DEBUG]: 100,
} as const;
