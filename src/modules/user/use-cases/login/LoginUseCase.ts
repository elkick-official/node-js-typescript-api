import { compare } from 'bcrypt'
import UseCase from '../../../../shared/applications/user-case'
import {
  createFailureResultResponse,
  createSuccessResultResponse,
  Either,
} from '../../../../shared/domain/domain-result'
import { InvalidCredentialError } from '../../domain/entity/errors/factories/createInvalidCredentialError'
import { InvalidCredential } from '../../domain/entity/errors/invalid-credential'
import { IUserRepository } from '../../repository/IUsersRepository'
import InputLogin from './dtos/input/input-login.dto'
import OutPutLogin from './dtos/output/output-login.dto'
import { env } from '../../../../shared/applications/env-variables'
export class LoginUseCase implements UseCase<inputParams, outputParams> {
  constructor(private userRepository: IUserRepository) {}
  async execute({
    email,
    password,
  }: inputParams): Promise<Either<outputParams, InvalidCredential>> {
    const user = await this.userRepository.findByEmail(email)
    if (!user) {
      return createFailureResultResponse(0, InvalidCredentialError())
    }
    const doesPasswordMatch = await compare(password, user.password)
    if (!doesPasswordMatch) {
      return createFailureResultResponse(0, InvalidCredentialError())
    }
    const token = await this.userRepository.generateToken(user.id)
    const prepareReturnData = {
      message: 'Success.',
      result: {
        token: token,
        type: env.TOKEN_TYPE,
      },
      error: null,
    }
    return createSuccessResultResponse(1, prepareReturnData)
  }
}

export type inputParams = InputLogin
export type outputParams = OutPutLogin
