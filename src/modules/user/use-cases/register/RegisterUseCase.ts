import { hashPassword } from '../../../../helpers/bcrypt'
import { env } from '../../../../shared/applications/env-variables'
import UseCase from '../../../../shared/applications/user-case'
import {
  createFailureResultResponse,
  createSuccessResultResponse,
  Either,
} from '../../../../shared/domain/domain-result'
import { InternalServerError } from '../../../../shared/errors/internal-server-error'
import { InvalidRoleError } from '../../../role/domain/entity/errors/factories/createInvalidRoleError'
import { InvalidRole } from '../../../role/domain/entity/errors/invalid-role'
import { IRoleRepository } from '../../../role/repository/IRoleRepository'
import { IUserRoleRepository } from '../../../user-role/repository/IUserRoleRepository'
import { UserAlreadyRegisterError } from '../../domain/entity/errors/factories/createUserAlreadyRegisterError'
import { UserAlreadyRegister } from '../../domain/entity/errors/user-already-register'
import { IUserRepository } from '../../repository/IUsersRepository'
import InputUserRegister from './dto/input/input-user-register.dto'
import OutPutUserRegister from './dto/output/output-user-register.dto'

export class RegisterUseCase implements UseCase<inputParams, outputParams> {
  constructor(
    private userRepository: IUserRepository,
    private roleRepository: IRoleRepository,
    private userRoleRepository: IUserRoleRepository,
  ) {}
  async execute({
    userType,
    firstName,
    lastName,
    userName,
    email,
    password,
    repeatPassword,
  }: inputParams): Promise<
    Either<outputParams, InvalidRole | UserAlreadyRegister | any>
  > {
    let roleId: string
    let preparingReturn: any
    const isAlreadyRegister = await this.userRepository.findByEmail(email)

    if (isAlreadyRegister) {
      return createFailureResultResponse(0, UserAlreadyRegisterError())
    }

    //userType 1 - seller / 0 - user
    if (userType === '1') {
      const role = await this.roleRepository.findByName('seller')
      roleId = role.id
    } else if (userType === '0') {
      const role = await this.roleRepository.findByName('user')
      roleId = role.id
    } else {
      return createFailureResultResponse(0, InvalidRoleError())
    }

    password = await hashPassword(password)
    const userData = await this.userRepository.registerUser({
      firstName,
      lastName,
      userName,
      email,
      password,
      repeatPassword,
    })
    const userId: string = userData.id
    if (userData === null) {
      return createFailureResultResponse(0, InternalServerError())
    }
    const userRoles = await this.userRoleRepository.create({
      userId: userId,
      roleId: roleId,
    })
    if (!userRoles) {
      await this.userRepository.deleteById(userId)
      return createFailureResultResponse(0, InternalServerError())
    }
    const token = await this.userRepository.generateToken(userId)
    preparingReturn = {
      message: 'Success.',
      result: {
        type: env.TOKEN_TYPE,
        token: token,
        userType: userType,
      },
      error: null,
    }
    return createSuccessResultResponse(1, preparingReturn)
  }
}

export type inputParams = InputUserRegister
export type outputParams = OutPutUserRegister
