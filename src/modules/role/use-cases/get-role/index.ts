import { RoleRepository } from '../../repository/implementations/RoleRepository'
import { GetRoleController } from './GetRoleController'
import { GetRoleUseCase } from './GetRoleUseCase'

const roleRepository = new RoleRepository()
const getRoleUseCase = new GetRoleUseCase(roleRepository)
const getRoleController = new GetRoleController(getRoleUseCase)

export { getRoleController }
