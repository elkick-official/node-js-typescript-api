import { Router } from 'express'
import { joiValidate } from '../../helpers/validate'
import { IsJWTValid } from '../../middlewares/auth/authorized'
import { userValidate } from '../../middlewares/validators/userValidate'
import { loginController } from '../../modules/user/useCases/login'
import { registerController } from '../../modules/user/useCases/register'

const userRoutes = Router()

userRoutes.post(
  '/register',
  joiValidate(userValidate.register),
  (request, response) => {
    registerController.handle(request, response)
  },
)

userRoutes.post(
  '/login',
  joiValidate(userValidate.login),
  (request, response) => {
    loginController.handle(request, response)
  },
)

export { userRoutes }
