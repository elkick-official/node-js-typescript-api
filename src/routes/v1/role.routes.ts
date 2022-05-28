import { Router } from 'express'
import { joiValidate } from '../../helpers/validate'
import { roleValidate } from '../../middlewares/validators/roleValidate'
import { createRoleController } from '../../modules/role/use-cases/creat-role'
import { deleteRoleController } from '../../modules/role/use-cases/delete-role'
import { getRoleController } from '../../modules/role/use-cases/get-role'

const roleRouter = Router()

// Get All Role
roleRouter.get('/', (request, response) => {
  getRoleController.handle(request, response)
})

// create a new role
roleRouter.post(
  '/create',
  joiValidate(roleValidate.create),
  (request, response) => {
    createRoleController.handle(request, response)
  },
)

roleRouter.delete('/delete/:id', (request, response) => {
  deleteRoleController.handle(request, response)
})

export { roleRouter }
