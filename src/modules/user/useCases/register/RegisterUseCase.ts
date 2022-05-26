import { hashPassword } from "../../../../helpers/bcrypt";
import { createFailureResult, createSuccessResult } from "../../../../shared/domain/domain-result";
import { ServerError } from "../../../../shared/domain/error/server-error";
import { IRoleRepository } from "../../../role/repository/IRoleRepository";
import { IUserRoleRepository } from "../../../userRole/repository/IUserRoleRepository";
import { InvalidRoleError } from "../../domain/entity/errors/factories/createInvalidRoleError";
import { UserAlreadyRegisterError } from "../../domain/entity/errors/factories/createUserAlreadyRegisterError";
import { UserNotFoundError } from "../../domain/entity/errors/factories/createUserNotFoundError";
import { IUserRepository } from "../../repository/IUsersRepository";
interface IRequest {
  userType: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

class RegisterUseCase {
  constructor(private userRepository: IUserRepository,
              private roleRepository:IRoleRepository,
              private userRoleRepository:IUserRoleRepository) {}
  async execute({userType,firstName,lastName,userName,email,password,repeatPassword}: IRequest): Promise<any> {
    const tokenType = process.env.NODE_ENV === "development" ? process.env.DEVELOPMENT_TOKEN_TYPE: process.env.PRODUCTION_TOKEN_TYPE ;
    let roleId;

    let preparingReturn: any;
    const isAlreadyRegister = await this.userRepository.findByEmail(email);
    if(isAlreadyRegister){
      return createFailureResult(UserAlreadyRegisterError());
    }

    //userType 1 - seller / 0 - user
    if(userType === "1"){
      roleId = await this.roleRepository.getRoleIdByName("seller");
    }else if(userType === "0"){
      roleId = await this.roleRepository.getRoleIdByName("user");
    }else{
      return createFailureResult(InvalidRoleError());
    }
    

    password = await hashPassword(password);
    const userData = await this.userRepository.registerUser({firstName,lastName,userName,email,password,repeatPassword});
    const id:string = userData.id;
    if(userData === null) {
      return createFailureResult(UserNotFoundError());
    }
    const userRoles = await this.userRoleRepository.create({userId:id,roleId:roleId.id});
    if(!userRoles){
      await this.userRepository.deleteById(id);
      return createFailureResult(ServerError());
    }

    const token = await this.userRepository.generateToken(id);
    preparingReturn = {
      status:1,
      ResponseCode:200,
      ResponseText:"Register successfully.",
      ResponseData: {
        type:tokenType,
        token:token,
        userType:userType
      },
      ResponseError:null 
    };
    return createSuccessResult(preparingReturn);
  }
}

export { RegisterUseCase };
