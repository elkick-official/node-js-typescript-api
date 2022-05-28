import jwt from 'jsonwebtoken'
import { env } from '../../../../shared/applications/env-variables'
import { User } from '../../domain/model/User'
import InputUserRegister from '../dtos/inputs/input-register-user.dto'
import OutPutFindUserByEmail from '../dtos/outputs/output-user-by-email.dto'
import { IUserRepository } from '../IUsersRepository'
const JWT_SECRET: any = env.JWT_SECRET
export class UserRepository implements IUserRepository {
  async registerUser({
    firstName,
    lastName,
    userName,
    email,
    password,
  }: InputUserRegister): Promise<any> {
    return await User.create({
      first_name: firstName,
      last_name: lastName,
      user_name: userName,
      email: email,
      password: password,
    })
  }
  async findByEmail(email: string): Promise<OutPutFindUserByEmail> {
    const user = await User.findOne({ where: { email: email } })
    if (user) {
      return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        userName: user.user_name,
        email: user.email,
        password: user.password,
      }
    }
    return user
  }

  async generateToken(id: string): Promise<string> {
    return jwt.sign({ id: id }, JWT_SECRET, {
      expiresIn: 86400,
    })
  }

  async deleteById(userId: string): Promise<number> {
    return await User.destroy({ where: { id: userId } })
  }
}
