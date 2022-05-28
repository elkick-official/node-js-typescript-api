import { Request, Response } from 'express'
import { createFailureResultResponse } from '../../../../shared/domain/domain-result'
import { InternalServerError } from '../../../../shared/errors/internal-server-error'
import { LoginUseCase } from './LoginUseCase'

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { email, password } = request.body
      const result = await this.loginUseCase.execute({ email, password })
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
