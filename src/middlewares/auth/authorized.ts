import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
const jwtSecret: string =
  process.env.JWT_SECRET || 'thisisdevelopmentjwttokenfornodejstypescript'
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
        response.status(401).send({
          status: 0,
          ResponseCode: 401,
          ResponseText: 'Unauthorized user.',
          ResponseData: null,
          ResponseError: null,
        })
      } else {
        try {
          tokenData = jwt.verify(authorization[1], jwtSecret)
        } catch (error) {
          response.status(401).send({
            status: 0,
            ResponseCode: 401,
            ResponseText: 'Unauthorized user.',
            ResponseData: null,
            ResponseError: null,
          })
        }
        const { id, iat, exp } = tokenData
        request.body.id = id
        return next()
      }
    } catch (err) {
      console.log(err)
      response.status(401).send({
        status: 0,
        ResponseCode: 401,
        ResponseText: 'Unauthorized user.',
        ResponseData: null,
        ResponseError: null,
      })
    }
  } else {
    response.status(401).send({
      status: 0,
      ResponseCode: 401,
      ResponseText: 'Unauthorized user.',
      ResponseData: null,
      ResponseError: null,
    })
  }
}

export { IsJWTValid }
