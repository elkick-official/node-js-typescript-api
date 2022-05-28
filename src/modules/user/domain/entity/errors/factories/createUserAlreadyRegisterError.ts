import { UserAlreadyRegister } from '../user-already-register'

const UserAlreadyRegisterError = (): UserAlreadyRegister => ({
  message: 'Email already exists.',
})

export { UserAlreadyRegisterError }
