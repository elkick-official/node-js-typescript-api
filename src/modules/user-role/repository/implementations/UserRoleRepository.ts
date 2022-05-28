import { UserRole } from '../../domain/model/UserRole'
import InputUserRoleCreate from '../dtos/inputs/input-user-role-create.dto'
import OutPutUserRoleCreate from '../dtos/outputs/output-user-role-create.dto'
import { IUserRoleRepository } from '../IUserRoleRepository'

class UserRoleRepository implements IUserRoleRepository {
  async create({
    userId,
    roleId,
  }: InputUserRoleCreate): Promise<OutPutUserRoleCreate> {
    const userRole = await UserRole.create({ user_id: userId, role_id: roleId })
    if (userRole) {
      return {
        id: userRole.id,
        userId: userRole.user_id,
        roleId: userRole.role_id,
      }
    }
    return userRole
  }
}

export { UserRoleRepository }
