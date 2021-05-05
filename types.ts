export interface IMemClient {
  createMem(request: CreateMemRequest): Promise<void>;
  batchCreateMems(request: BatchCreateMemsRequest): Promise<void>;
}

export interface MemClientConfig {
  apiKey: string;
}

export interface CreateMemRequest {
  content: string;
}

export type BatchCreateMemsRequest = CreateMemRequest[];

export interface InternalCreateMemRequest {
  content: string;
}

export interface InternalBatchCreateMemsRequest {
  mems: CreateMemRequest[];
}