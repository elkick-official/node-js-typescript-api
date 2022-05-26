import { RoleExists } from '../role-exists'

const RoleAlreadyExistsError = (): RoleExists => ({
  status: 0,
  ResponseCode: 409,
  ResponseText: 'Role already exists.',
  ResponseData: null,
  ResponseError: null,
})

export { RoleAlreadyExistsError }
