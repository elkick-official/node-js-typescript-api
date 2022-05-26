import { DomainError } from "../../../../../shared/domain/error/domain-error";

export interface UserAlreadyRegister extends DomainError{
    status:number,
    ResponseCode:number,
    ResponseText:string,
    ResponseData:any,
    ResponseError:any,
}