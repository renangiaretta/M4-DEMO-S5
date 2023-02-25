import { Router } from 'express'
import { createUserController, deleteUserController, listUsersController, updateUserController } from '../controllers/users.controller'
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware'
import { ensureUserExistsMiddleware } from '../middlewares/ensureUserExists.middleware'
import { userSchema } from '../schemas/user.schemas'

const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSchema), createUserController)
userRoutes.get('', listUsersController)
userRoutes.delete('/:id', ensureUserExistsMiddleware, deleteUserController)
userRoutes.patch('/:id', ensureDataIsValidMiddleware(userSchema), ensureUserExistsMiddleware, updateUserController )



export { userRoutes }