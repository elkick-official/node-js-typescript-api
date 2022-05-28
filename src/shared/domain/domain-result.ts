export interface DomainResult<Success, Fail> {
  responseData: Success | Fail
  isSuccess: () => boolean
  isFailure: () => boolean
}

export interface SuccessResultResponse<Success, Fail>
  extends DomainResult<Success, Fail> {
  responseStatus: number
  responseData: Success
  isSuccess: () => true
  isFailure: () => false
}

export interface FailResultResponse<Success, Fail>
  extends DomainResult<Success, Fail> {
  responseStatus: number
  responseData: Fail
  isSuccess: () => false
  isFailure: () => true
}

export const createSuccessResultResponse = <Success, Fail>(
  responseStatus: number,
  responseData: Success,
): SuccessResultResponse<Success, Fail> => ({
  responseStatus,
  responseData,
  isSuccess: () => true,
  isFailure: () => false,
})

export const createFailureResultResponse = <Success, Fail>(
  responseStatus: number,
  responseData: Fail,
): FailResultResponse<Success, Fail> => ({
  responseStatus,
  responseData,
  isSuccess: () => false,
  isFailure: () => true,
})
export type Either<Success, Fail> =
  | SuccessResultResponse<Success, Fail>
  | FailResultResponse<Success, Fail>
