import { Role } from '../../domain/model/Role'
import { IRoleRepository } from '../IRoleRepository'

class RoleRepository implements IRoleRepository {
  async create(name: string): Promise<any> {
    return await Role.create({ name: name })
  }

  async findByName(name: string): Promise<any> {
    return await Role.findOne({ where: { name: name } })
  }

  async findAll(): Promise<any> {
    return await Role.findAll()
  }

  async getRoleIdByName(name: string): Promise<any> {
    return await Role.findOne({
      raw: true,
      attributes: ['id'],
      where: {
        name: name,
      },
    })
  }
}

export { RoleRepository }
