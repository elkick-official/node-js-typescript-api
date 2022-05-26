import { UserRole } from "../../domain/model/UserRole";
import { ICreateUserRoleDTO } from "../../dtos/ICreateUserRoleDTO";
import { IUserRoleRepository } from "../IUserRoleRepository";

class UserRoleRepository implements IUserRoleRepository{
    async create({userId,roleId}:ICreateUserRoleDTO):Promise<any>{
        try {
            return await UserRole.create({user_id:userId,role_id:roleId});
        } catch (error) {
            console.log(error);
        }
    };
}

export {UserRoleRepository}