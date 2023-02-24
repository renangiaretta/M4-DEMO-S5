import { Router } from 'express'
import { createUserController } from '../controllers/users.controller'
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware'
import { userSchema } from '../schemas/user.schemas'

const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSchema), createUserController)


export { userRoutes }