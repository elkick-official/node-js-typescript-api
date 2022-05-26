import { Router } from 'express'
import { roleRouter } from './role.routes'
import { userRoutes } from './user.routes'

const router = Router()
router.use('/v1/role/', roleRouter)
router.use('/v1/user/', userRoutes)

export { router }
