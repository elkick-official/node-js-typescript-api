import { createSuccessResult } from '../../../../shared/domain/domain-result'
import { IRoleRepository } from '../../repository/IRoleRepository'

class GetRoleUseCase {
  constructor(private roleRepository: IRoleRepository) {}
  async execute(): Promise<any> {
    let roles = await this.roleRepository.findAll()
    roles = roles.map((role: any) => role.name)
    const prepareReturnData = {
      status: 1,
      ResponseCode: 200,
      ResponseText: 'Role gets successfully.',
      ResponseData: {
        roles: roles,
      },
      ResponseError: null,
    }
    return createSuccessResult(prepareReturnData)
  }
}

export { GetRoleUseCase }
