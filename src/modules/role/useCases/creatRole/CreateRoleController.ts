import { Request, Response } from 'express'
import { ServerError } from '../../../../shared/domain/error/server-error'
import { CreateRoleUseCase } from './CreateRoleUseCase'

class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const { name } = request.body
      const result = await this.createRoleUseCase.execute(name)
      if (result.isFailure()) {
        return response.status(result.ResponseCode).json(result)
      }
      return response.status(result.ResponseCode).json(result)
    } catch (error) {
      console.log(error)
      return response.status(500).send(ServerError())
    }
  }
}

export { CreateRoleController }
