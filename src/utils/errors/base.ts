import { CustomError } from "ts-custom-error";

export class ClientError extends CustomError {
  constructor({ message }: { message?: string } = {}) {
    const errorMessage = message ?? "Unknown Error";

    super(errorMessage);
  }
}

export class ClientInitializationError extends CustomError {
  constructor({ message }: { message?: string } = {}) {
    const errorMessage = message ?? "An unknown error ocurred during client initialization.";

    super(errorMessage);
  }
}
