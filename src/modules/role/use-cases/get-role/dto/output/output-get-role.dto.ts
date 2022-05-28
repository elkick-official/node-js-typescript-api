export type result = {
  roles: Role[]
}
export type Role = string

export default interface OutPutGetRole {
  message: string
  result: result
  error: any
}
