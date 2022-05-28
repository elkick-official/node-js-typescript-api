import { DomainError } from '../../../../../shared/domain/domain-error'

export interface UserAlreadyRegister extends DomainError {
  message: string
}
