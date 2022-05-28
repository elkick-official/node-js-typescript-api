import UseCase from '../../../../shared/applications/user-case'
import {
  createSuccessResultResponse,
  Either,
} from '../../../../shared/domain/domain-result'
import { IRoleRepository } from '../../repository/IRoleRepository'
import OutPutGetRole from './dto/output/output-get-role.dto'

export class GetRoleUseCase implements UseCase<inputParams, outputParams> {
  constructor(private roleRepository: IRoleRepository) {}
  async execute(): Promise<Either<outputParams, any>> {
    const roles = await this.roleRepository.findAll()
    const nameOfRoles = roles.map((role: { name: string }) => role.name)
    const prepareReturnData = {
      message: 'Success.',
      result: {
        roles: nameOfRoles,
      },
      error: null,
    }
    return createSuccessResultResponse(1, prepareReturnData)
  }
}

export type inputParams = {}
export type outputParams = OutPutGetRole
