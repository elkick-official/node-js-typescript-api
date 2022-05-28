import { DomainResponse } from '../../../../../../shared/domain/domain-response'
export type resutlResponse = {
  token: string
  type: string | undefined
}
export default interface OutPutLogin extends DomainResponse {
  result: resutlResponse
}
