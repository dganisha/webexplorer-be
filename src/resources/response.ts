// src/utils/response.ts

export interface ErrorResponse {
  status: number;
  error: string;
}

export interface SuccessResponse {
  status: number;
  message: string;
  data?: any;
}

export function newErrorResponse(status: number, msg: string): ErrorResponse {
  return {
    status: status,
    error: msg,
  };
}

export function newSuccessResponse(
  status: number,
  msg: string,
  data?: any
): SuccessResponse {
  return {
    status: status,
    message: msg,
    data: data,
  };
}

export function newSuccessGetResponse(
  status: number,
  message: string,
  data: any,
  page: number,
  limit: number,
  totalItems: number
) {
  const totalPages = Math.ceil(totalItems / limit);

  return {
    status: status,
    message,
    data,
    pagination: {
      page,
      limit,
      totalItems,
      totalPages,
    },
  };
}