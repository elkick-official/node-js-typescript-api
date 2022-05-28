import UseCase from '../../../../shared/applications/user-case'
import {
  createFailureResultResponse,
  createSuccessResultResponse,
  Either,
} from '../../../../shared/domain/domain-result'
import { InternalServerError } from '../../../../shared/errors/internal-server-error'
import { InvalidRoleError } from '../../domain/entity/errors/factories/createInvalidRoleError'
import { InvalidRole } from '../../domain/entity/errors/invalid-role'
import { IRoleRepository } from '../../repository/IRoleRepository'
import InputDeleteRole from './dto/input/input-delete-role.dto'
import OutPutDeleteRole from './dto/output/output-delete-role.dto'

export class DeleteRoleUseCase implements UseCase<inputParams, outputParams> {
  constructor(private roleRepository: IRoleRepository) {}
  async execute({
    id,
  }: inputParams): Promise<Either<outputParams, InvalidRole | any>> {
    const roleDetails = await this.roleRepository.findByRoleId(id)
    if (!roleDetails) {
      return createFailureResultResponse(0, InvalidRoleError())
    }
    const role = await this.roleRepository.deleteById(id)
    if (role === 0) {
      return createFailureResultResponse(0, InternalServerError())
    }
    const prepareReturnData = {
      message: 'Success.',
      result: null,
      error: null,
    }
    return createSuccessResultResponse(1, prepareReturnData)
  }
}

export type inputParams = InputDeleteRole
export type outputParams = OutPutDeleteRole
