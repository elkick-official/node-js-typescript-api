import InputCreateRole from './dtos/inputs/input-create-role.dto'
import { OutPutFindRoleById } from './dtos/outputs/output-find-role-by-id-dto'
import { OutPutFindRoleByName } from './dtos/outputs/output-find-role-by-name.dto'
import { OutPutGetAllRoles } from './dtos/outputs/output-get-all-roles.dto'

interface IRoleRepository {
  create(role: InputCreateRole): Promise<any>
  findByName(name: string): Promise<OutPutFindRoleByName>
  findAll(): Promise<OutPutGetAllRoles[]>
  findByRoleId(roleId: string): Promise<OutPutFindRoleById | null>
  deleteById(roleId: string): Promise<number>
}
export { IRoleRepository }
