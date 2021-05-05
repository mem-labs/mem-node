import fetch from "node-fetch";
import { BatchCreateMemsRequest, CreateMemRequest, IMemClient, InternalBatchCreateMemsRequest, InternalCreateMemRequest, MemClientConfig } from "./types";

export class MemClient implements IMemClient {
  private apiKey: string;

  private static ROOT_URL = "https://api.mem.ai/v0";

  public constructor(config: MemClientConfig) {
    this.apiKey = config.apiKey;
    return this;
  }

  public async createMem(request: CreateMemRequest): Promise<void> {
    await this.makePostRequest<InternalCreateMemRequest>({
      path: "/mems",
      request,
    })
  }

  public async batchCreateMems(request: BatchCreateMemsRequest): Promise<void> {
    await this.makePostRequest<InternalBatchCreateMemsRequest>({
      path: "/mems/batch",
      request: {
        mems: request,
      },
    })
  }

  private async makePostRequest<RequestType>({
    path,
    request
  }: {
    path: string;
    request: RequestType;
  }): Promise<void> {
    await fetch(MemClient.buildUrl(path), {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
        "Authentication": this.apiKey
      },
    });
  }

  private static buildUrl(path: string) {
    return `${MemClient.ROOT_URL}${path}`;
  }
}

export default MemClient;
