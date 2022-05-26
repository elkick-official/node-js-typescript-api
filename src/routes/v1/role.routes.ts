import { Router } from 'express'
import { joiValidate } from '../../helpers/validate'
import { roleValidate } from '../../middlewares/validators/roleValidate'
import { createRoleController } from '../../modules/role/useCases/creatRole'
import { getRoleController } from '../../modules/role/useCases/getRole'

const roleRouter = Router()

roleRouter.get('/', (request, response) => {
  getRoleController.handle(request, response)
})

roleRouter.post(
  '/create',
  joiValidate(roleValidate.create),
  (request, response) => {
    createRoleController.handle(request, response)
  },
)

export { roleRouter }
