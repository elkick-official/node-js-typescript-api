import { DomainError } from "../../../../../shared/domain/error/domain-error";

interface RoleExists extends DomainError{
    status:number,
    ResponseCode:number,
    ResponseText:string,
    ResponseData:any,
    ResponseError:any,
}
export {RoleExists}
