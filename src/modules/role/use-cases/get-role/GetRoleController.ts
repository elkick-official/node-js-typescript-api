import { Request, Response } from 'express'
import { createFailureResultResponse } from '../../../../shared/domain/domain-result'
import { InternalServerError } from '../../../../shared/errors/internal-server-error'
import { GetRoleUseCase } from './GetRoleUseCase'

export class GetRoleController {
  constructor(private getRoleUseCase: GetRoleUseCase) {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const result = await this.getRoleUseCase.execute()
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
