import { Request, Response } from 'express'
import { createFailureResultResponse } from '../../../../shared/domain/domain-result'
import { InternalServerError } from '../../../../shared/errors/internal-server-error'
import { CreateRoleUseCase } from './CreateRoleUseCase'

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const result = await this.createRoleUseCase.execute(request.body)
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
