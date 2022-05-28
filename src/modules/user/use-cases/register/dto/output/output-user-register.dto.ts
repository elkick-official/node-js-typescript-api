import { DomainResponse } from '../../../../../../shared/domain/domain-response'

type register = {
  type: string
  token: string
  userType: string
}

export default interface OutPutUserRegister extends DomainResponse {
  result: register
}
