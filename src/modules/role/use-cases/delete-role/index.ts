import { RoleRepository } from '../../repository/implementations/RoleRepository'
import { DeleteRoleController } from './DeleteRoleController'
import { DeleteRoleUseCase } from './DeleteRoleUseCase'

const roleRepository = new RoleRepository()
const deleteRoleUseCase = new DeleteRoleUseCase(roleRepository)
const deleteRoleController = new DeleteRoleController(deleteRoleUseCase)
export { deleteRoleController }
