import { ICreateUserRoleDTO } from "../dtos/ICreateUserRoleDTO";

interface IUserRoleRepository{
    create({userId,roleId}:ICreateUserRoleDTO):Promise<any>;
}

export {IUserRoleRepository}
