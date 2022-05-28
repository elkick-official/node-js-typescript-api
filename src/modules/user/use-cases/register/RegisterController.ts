import { Request, Response } from 'express'
import { createFailureResultResponse } from '../../../../shared/domain/domain-result'
import { InternalServerError } from '../../../../shared/errors/internal-server-error'
import { RegisterUseCase } from './RegisterUseCase'
export class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const {
        userType,
        firstName,
        lastName,
        userName,
        email,
        password,
        repeatPassword,
      } = request.body
      const result = await this.registerUseCase.execute({
        userType,
        firstName,
        lastName,
        userName,
        email,
        password,
        repeatPassword,
      })
      if (result.isFailure()) {
        return response.status(400).json(result)
      }
      return response.status(200).json(result)
    } catch (error) {
      console.log(error)
      return response
        .status(500)
        .send(createFailureResultResponse(0, InternalServerError()))
    }
  }
}
