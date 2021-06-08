import { CustomError } from "ts-custom-error";

export class RuntimeError extends CustomError {
  constructor({ message }: { message?: string } = {}) {
    const errorMessage = message ?? "Runtime Error";

    super(errorMessage);
  }
}
