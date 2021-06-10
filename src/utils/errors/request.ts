import { ClientError } from "./base";

export class ClientRequestError extends ClientError {
  constructor({ message }: { message?: string } = {}) {
    const errorMessage = message ?? "Unknown Error";

    super({ message: errorMessage });
  }
}
