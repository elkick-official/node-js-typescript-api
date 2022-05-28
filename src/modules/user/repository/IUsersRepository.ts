import InputUserRegister from './dtos/inputs/input-register-user.dto'
import OutPutFindUserByEmail from './dtos/outputs/output-user-by-email.dto'

interface IUserRepository {
  registerUser(userRegister: InputUserRegister): Promise<any>
  findByEmail(email: string): Promise<OutPutFindUserByEmail>
  generateToken(id: string): Promise<string>
  deleteById(userId: string): Promise<number>
}

export { IUserRepository }
