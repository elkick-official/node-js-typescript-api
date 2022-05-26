import { Request, Response } from "express";
import { ServerError } from "../../../../shared/domain/error/server-error";
import { GetRoleUseCase } from "./GetRoleUseCase";

class GetRoleController{
    constructor(private getRoleUseCase:GetRoleUseCase){}
    async handle(request: Request,response: Response):Promise<any> {
        try {
            const result = await this.getRoleUseCase.execute();
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
export {GetRoleController}
