import { UserAlreadyRegister } from "../user-already-register"

const UserAlreadyRegisterError = (): UserAlreadyRegister => ({
    status: 0,
    ResponseCode:403,
    ResponseText:"Email already exists.",
    ResponseData:null,
    ResponseError:null,
    
})

export { UserAlreadyRegisterError }