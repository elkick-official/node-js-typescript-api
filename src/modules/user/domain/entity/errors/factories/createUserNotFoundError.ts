import { UserNotFound } from "../user-not-found"

const UserNotFoundError = (): UserNotFound => ({
    status: 0,
    ResponseCode:401,
    ResponseText:"User not found.",
    ResponseData:null,
    ResponseError:null,  
})

export { UserNotFoundError }