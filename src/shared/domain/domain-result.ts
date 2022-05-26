export interface Response {
  status: number
  ResponseCode: number
  ResponseText: string
  ResponseData: any
  ResponseError: any
}

export const createSuccessResult = ({
  status,
  ResponseCode,
  ResponseText,
  ResponseData,
  ResponseError,
}: Response) => ({
  status,
  ResponseCode,
  ResponseText,
  ResponseData,
  ResponseError,
  isSuccess: () => true,
  isFailure: () => false,
})

export const createFailureResult = ({
  status,
  ResponseCode,
  ResponseText,
  ResponseData,
  ResponseError,
}: Response) => ({
  status,
  ResponseCode,
  ResponseText,
  ResponseData,
  ResponseError,
  isSuccess: () => false,
  isFailure: () => true,
})
