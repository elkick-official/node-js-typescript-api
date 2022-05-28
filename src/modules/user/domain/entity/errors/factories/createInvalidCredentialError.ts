import { InvalidCredential } from '../invalid-credential'
const InvalidCredentialError = (): InvalidCredential => ({
  message: 'Invalid Credential.',
})

export { InvalidCredentialError }
