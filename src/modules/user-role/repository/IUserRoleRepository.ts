import InputUserRoleCreate from './dtos/inputs/input-user-role-create.dto'
import OutPutUserRoleCreate from './dtos/outputs/output-user-role-create.dto'

interface IUserRoleRepository {
  create({ userId, roleId }: InputUserRoleCreate): Promise<OutPutUserRoleCreate>
}

export { IUserRoleRepository }
