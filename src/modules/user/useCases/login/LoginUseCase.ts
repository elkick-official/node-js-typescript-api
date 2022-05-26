import { compare } from "bcrypt";
import { createFailureResult, createSuccessResult } from "../../../../shared/domain/domain-result";
import { InvalidCredentialError } from "../../domain/entity/errors/factories/createInvalidCredentialError";
import { IUserRepository } from "../../repository/IUsersRepository";

interface IRequest{
    email: string;
    password: string;
}


class LoginUseCase { 
    constructor(private userRepository:IUserRepository){}
    async execute({email, password}:IRequest):Promise<any>{
        const tokenType = process.env.NODE_ENV === "development" ? process.env.DEVELOPMENT_TOKEN_TYPE: process.env.PRODUCTION_TOKEN_TYPE ;
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            return createFailureResult(InvalidCredentialError());
        }
        const doesPasswordMatch = await compare(password, user.password);
        if(!doesPasswordMatch) {
            return createFailureResult(InvalidCredentialError());
        }
        const token = await this.userRepository.generateToken(user.id);
        const prepareReturnData = {
            status:1,
            ResponseCode:200,
            ResponseText:"Login successfully.",
            ResponseData: {
                data:{
                    type:tokenType,
                    token:token,
                }
            },
            ResponseError:null 
        }
        return createSuccessResult(prepareReturnData);
    }
}

export {LoginUseCase}
