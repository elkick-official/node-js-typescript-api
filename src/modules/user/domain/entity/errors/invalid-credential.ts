import { DomainError } from '../../../../../shared/domain/domain-error'

export interface InvalidCredential extends DomainError {
  message: string
}
