import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { env } from '../../shared/applications/env-variables'
import { createFailureResultResponse } from '../../shared/domain/domain-result'
const jwtSecret: any = env.JWT_SECRET
const IsJWTValid = async (
  request: any,
  response: Response,
  next: NextFunction,
) => {
  let tokenData: any
  if (request.headers.authorization) {
    try {
      let authorization = request.headers.authorization.split(' ')
      if (authorization[0] !== 'Bearer') {
        response.status(401).send(
          createFailureResultResponse(0, {
            messsage: 'Unauthorized user.',
          }),
        )
      } else {
        try {
          tokenData = jwt.verify(authorization[1], jwtSecret)
        } catch (error) {
          response.status(401).send(
            createFailureResultResponse(0, {
              messsage: 'Unauthorized user.',
            }),
          )
        }
        const { id, iat, exp } = tokenData
        request.body.id = id
        return next()
      }
    } catch (err) {
      console.log(err)
      response.status(401).send(
        createFailureResultResponse(0, {
          messsage: 'Unauthorized user.',
        }),
      )
    }
  } else {
    response.status(401).send(
      createFailureResultResponse(0, {
        messsage: 'Unauthorized user.',
      }),
    )
  }
}

export { IsJWTValid }
