import { Request, Response, NextFunction } from 'express'
import { createFailureResultResponse } from '../shared/domain/domain-result'
const node_env = process.env.NODE_ENV

const joiValidate = (schema: any) => {
  return (request: Request, response: Response, next: NextFunction) => {
    let { error } = schema.validate(request.body ? request.body : {})
    const valid = error == null
    if (valid) {
      next()
    } else {
      const { details } = error
      const message = details.map((i: any) => i.message).join(',')
      const key = details.map((i: any) => i.context.key).join(',')
      if (node_env === 'development') {
        response.status(422).json(
          createFailureResultResponse(0, {
            validationKey: key,
            validationMessage: message,
          }),
        )
      } else {
        createFailureResultResponse(0, {
          validationKey: null,
          validationMessage: 'Validation failed',
        })
      }
    }
  }
}

export { joiValidate }
