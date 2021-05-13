import { logLevelSeverities } from "./constants";
import { LogLevel } from "./types";

/**
 * Default logger which logs to stdout and stderr.
 */
export class Logger {
  /** Setting for level. */
  level: LogLevel;

  constructor({ level }: { level?: LogLevel }) {
    this.level = level ?? LogLevel.INFO;
  }

  /**
   * Log a debug message.
   */
  public debug(...msg: unknown[]): void {
    if (this.shouldLogSeverity(LogLevel.DEBUG)) {
      console.debug(`[debug]`, ...msg);
    }
  }

  /**
   * Log an info message.
   */
  public info(...msg: unknown[]): void {
    if (this.shouldLogSeverity(LogLevel.INFO)) {
      console.info(`[info]`, ...msg);
    }
  }
  /**
   * Log a warning message.
   */
  public warn(...msg: unknown[]): void {
    if (this.shouldLogSeverity(LogLevel.WARN)) {
      console.warn(`[warn]`, ...msg);
    }
  }
  /**
   * Log an error message
   */
  public error(...msg: unknown[]): void {
    if (this.shouldLogSeverity(LogLevel.ERROR)) {
      console.error(`[error]`, ...msg);
    }
  }

  /**
   * Check if the inputLevel is >= the current log level.
   */
  private shouldLogSeverity(inputLevel: LogLevel): boolean {
    const minimumSeverity = logLevelSeverities[this.level];
    const inputSeverity = logLevelSeverities[inputLevel];

    return inputSeverity >= minimumSeverity;
  }
}
