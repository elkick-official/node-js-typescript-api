import { InvalidRole } from '../invalid-role'

export const InvalidRoleError = (): InvalidRole => ({
  message: 'Invalid Role.',
})
