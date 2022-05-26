import { Request, Response } from "express";
import { ServerError } from "../../../../shared/domain/error/server-error";
import { RegisterUseCase } from "./RegisterUseCase";

interface IRequest {
    userType:string
    firstName:string
    lastName:string
    userName:string
    email:string
    password:string
    repeatPassword:string
}
  


class RegisterController {
  constructor(private registerUseCase: RegisterUseCase) {}
  async handle(request: Request, response: Response): Promise<any> {
    try {
      const {userType,firstName,lastName,userName,email,password,repeatPassword}:IRequest = request.body;
      const result = await this.registerUseCase.execute({userType,firstName,lastName,userName,email,password,repeatPassword});
      if (result.isFailure()) {
        return response.status(result.ResponseCode).json(result);
      }
      return response.status(result.ResponseCode).json(result);  
    } catch (error) {
      console.log(error);
      return response.status(500).send(ServerError())
    }
  }
}
export { RegisterController };
