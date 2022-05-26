const ServerError = () => {
  return {
    status: 0,
    ResponseCode: 500,
    ResponseText: 'Something went wrong.',
    ResponseData: null,
    ResponseError: null,
  }
}

export { ServerError }
