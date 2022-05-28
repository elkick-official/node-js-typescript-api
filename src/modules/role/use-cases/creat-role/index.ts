import { RoleRepository } from '../../repository/implementations/RoleRepository'
import { CreateRoleController } from './CreateRoleController'
import { CreateRoleUseCase } from './CreateRoleUseCase'

const roleRepository = new RoleRepository()
const createRoleUseCase = new CreateRoleUseCase(roleRepository)
const createRoleController = new CreateRoleController(createRoleUseCase)

export { createRoleController }
