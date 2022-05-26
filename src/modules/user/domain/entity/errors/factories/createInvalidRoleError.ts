import { InvalidRole } from "../invalid-role"
const InvalidRoleError = (): InvalidRole => ({
    status: 0,
    ResponseCode:401,
    ResponseText:"Invalid Role.",
    ResponseData:null,
    ResponseError:null,
    
})

export { InvalidRoleError }