import { Role } from '../../domain/model/Role'
import InputCreateRole from '../dtos/inputs/input-create-role.dto'
import { OutPutFindRoleById } from '../dtos/outputs/output-find-role-by-id-dto'
import { OutPutFindRoleByName } from '../dtos/outputs/output-find-role-by-name.dto'
import { OutPutGetAllRoles } from '../dtos/outputs/output-get-all-roles.dto'
import { IRoleRepository } from '../IRoleRepository'

export class RoleRepository implements IRoleRepository {
  async create({ name }: InputCreateRole): Promise<any> {
    return await Role.create({ name: name })
  }

  async findByName(name: string): Promise<OutPutFindRoleByName> {
    const role = await Role.findOne({ where: { name: name } })
    if (role) {
      return {
        id: role.id,
        name: role.name,
      }
    }
    return role
  }

  async findAll(): Promise<OutPutGetAllRoles[]> {
    const roles = await Role.findAll()
    if (roles) {
      return roles?.map((role: { id: string; name: string }) => {
        return {
          id: role.id,
          name: role.name,
        }
      })
    }
    return []
  }

  async findByRoleId(roleId: string): Promise<OutPutFindRoleById | null> {
    const role = await Role.findOne({ where: { id: roleId } })
    if (role) {
      return {
        id: role.id,
        name: role.name,
      }
    }
    return null
  }

  async deleteById(roleId: string): Promise<number> {
    return await Role.destroy({ where: { id: roleId } })
  }
}
