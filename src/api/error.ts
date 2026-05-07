export type FlatApiErrorResponse = {
  status: number;
  code: string;
  message: string;
};

export type NestedApiErrorResponse = {
  status: 'error';
  error: {
    code: string;
    message: string;
    field?: string;
    nonMasked?: string[];
  };
};

export type ApiErrorResponse = FlatApiErrorResponse | NestedApiErrorResponse;

export interface ApiError {
  status?: number;
  code: string;
  message: string;
  field?: string;
  nonMasked?: string[];
}

export const DEFAULT_ERROR: ApiError = {
  code: 'UNKNOWN_ERROR',
  message: '알 수 없는 오류가 발생했어요.',
};

export const NETWORK_ERROR: ApiError = {
  code: 'NETWORK_ERROR',
  message: '네트워크 연결을 확인해주세요.',
};

function isRecord(data: unknown): data is Record<string, unknown> {
  return typeof data === 'object' && data !== null;
}

function isApiErrorResponse(data: unknown): data is ApiErrorResponse {
  if (!isRecord(data)) return false;

  if (
    typeof data.status === 'number' &&
    typeof data.code === 'string' &&
    typeof data.message === 'string'
  ) {
    return true;
  }

  if (data.status !== 'error' || !isRecord(data.error)) return false;

  return (
    typeof data.error.code === 'string' &&
    typeof data.error.message === 'string'
  );
}

export function normalizeApiError(data: unknown, status?: number): ApiError {
  if (!isApiErrorResponse(data)) {
    return {
      ...DEFAULT_ERROR,
      status,
    };
  }

  if (data.status === 'error') {
    return {
      status,
      code: data.error.code,
      message: data.error.message,
      field: data.error.field,
      nonMasked: data.error.nonMasked,
    };
  }

  return {
    status: data.status,
    code: data.code,
    message: data.message,
  };
}

export function getApiErrorMessage(error: ApiError) {
  return error.message;
}
