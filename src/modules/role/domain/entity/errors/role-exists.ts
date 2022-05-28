import { DomainError } from '../../../../../shared/domain/domain-error'

export interface RoleExists extends DomainError {
  message: string
}
