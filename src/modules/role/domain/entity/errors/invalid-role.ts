import { DomainError } from '../../../../../shared/domain/domain-error'

export interface InvalidRole extends DomainError {
  message: string
}
