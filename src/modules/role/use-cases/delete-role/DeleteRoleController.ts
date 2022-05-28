import { Request, Response } from 'express'
import { createFailureResultResponse } from '../../../../shared/domain/domain-result'
import { InternalServerError } from '../../../../shared/errors/internal-server-error'
import { DeleteRoleUseCase } from './DeleteRoleUseCase'

export class DeleteRoleController {
  constructor(private deleteRoleUseCase: DeleteRoleUseCase) {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { id } = request.params
      const result = await this.deleteRoleUseCase.execute({ id })
      if (result.isFailure()) {
        return response.status(400).json(result)
      }
      return response.status(200).json(result)
    } catch (error) {
      console.error(error)
      return response
        .status(500)
        .send(createFailureResultResponse(0, InternalServerError()))
    }
  }
}
