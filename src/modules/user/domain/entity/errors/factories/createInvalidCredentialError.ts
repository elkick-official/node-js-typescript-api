import { InvalidCredential } from "../invalid-credential"
const InvalidCredentialError = (): InvalidCredential => ({
    status: 0,
    ResponseCode:401,
    ResponseText:"Invalid Credential.",
    ResponseData:null,
    ResponseError:null,
    
})

export { InvalidCredentialError }