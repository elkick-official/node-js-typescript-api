import { RoleExists } from '../role-exists'

const RoleAlreadyExistsError = (): RoleExists => ({
  message: 'Role already exists.',
})

export { RoleAlreadyExistsError }
