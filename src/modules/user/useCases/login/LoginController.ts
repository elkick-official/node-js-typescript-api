import { Request, Response } from "express";
import { ServerError } from "../../../../shared/domain/error/server-error";
import { ILoginDTO } from "../../dtos/ILoginDTO";
import { LoginUseCase } from "./LoginUseCase";

class LoginController {
    constructor(private loginUseCase: LoginUseCase) {}
    async handle(request: Request,response: Response):Promise<any> {
        try {
            const {email,password}:ILoginDTO = request.body;
            const result = await this.loginUseCase.execute({email,password});
            if(result.isFailure()) {
                return response.status(result.ResponseCode).json(result);
            }
            return response.status(result.ResponseCode).json(result);
        } catch (error) {
            console.log(error);
            return response.status(500).send(ServerError())
        }
    }
}

export { LoginController }
