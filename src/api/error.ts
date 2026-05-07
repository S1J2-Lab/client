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

export function normalizeApiError(
  data: ApiErrorResponse,
  status?: number,
): ApiError {
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

export function getApiErrorMessage(error: unknown) {
  const apiError = error as ApiError;

  return apiError.message;
}
