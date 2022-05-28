import { Either } from '../domain/domain-result'

export default interface UseCase<inputParams, outputParams> {
  execute(
    _: any,
    __: any,
    input: inputParams,
  ): outputParams | Promise<Either<outputParams, any>>
}
