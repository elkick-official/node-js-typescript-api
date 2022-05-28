import UseCase from '../../../../shared/applications/user-case'
import {
  createFailureResultResponse,
  createSuccessResultResponse,
  Either,
} from '../../../../shared/domain/domain-result'
import { RoleAlreadyExistsError } from '../../domain/entity/errors/factories/createRoleExistsError'
import { RoleExists } from '../../domain/entity/errors/role-exists'
import { IRoleRepository } from '../../repository/IRoleRepository'
import InputCreateRole from './dto/input/input-create-role.dto'
import OutPutCreateRole from './dto/output/output-create-role.dto'
export class CreateRoleUseCase implements UseCase<inputParams, outputParams> {
  constructor(private roleRepository: IRoleRepository) {}
  async execute({
    name,
  }: inputParams): Promise<Either<outputParams, RoleExists>> {
    const role = await this.roleRepository.findByName(name)
    if (role !== null) {
      return createFailureResultResponse(0, RoleAlreadyExistsError())
    }
    await this.roleRepository.create({
      name,
    })
    const prepareReturnData = {
      message: 'Role created successfully.',
      result: null,
      error: null,
    }
    return createSuccessResultResponse(1, prepareReturnData)
  }
}
export type inputParams = InputCreateRole
export type outputParams = OutPutCreateRole
