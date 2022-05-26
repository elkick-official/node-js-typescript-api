import { DomainError } from "../../../../../shared/domain/error/domain-error";

export interface UserNotFound extends DomainError{
    status:number,
    ResponseCode:number,
    ResponseText:string,
    ResponseData:any,
    ResponseError:any,
}