import {
  createFailureResult,
  createSuccessResult,
} from '../../../../shared/domain/domain-result'
import { InvalidRoleError } from '../../domain/entity/errors/factories/createInvalidRoleError'
import { RoleAlreadyExistsError } from '../../domain/entity/errors/factories/createRoleExistsError'
import { IRoleRepository } from '../../repository/IRoleRepository'

class CreateRoleUseCase {
  constructor(private roleRepository: IRoleRepository) {}
  async execute(name: string): Promise<any> {
    let roles = await this.roleRepository.findAll()
    roles = roles.map((role: any) => role.name)
    if (!roles.includes(name)) {
      return createFailureResult(InvalidRoleError())
    }
    const role = await this.roleRepository.findByName(name)
    if (role !== null) {
      return createFailureResult(RoleAlreadyExistsError())
    }
    await this.roleRepository.create(name)
    const prepareReturnData = {
      status: 1,
      ResponseCode: 200,
      ResponseText: 'Role created successfully.',
      ResponseData: null,
      ResponseError: null,
    }
    return createSuccessResult(prepareReturnData)
  }
}

export { CreateRoleUseCase }
