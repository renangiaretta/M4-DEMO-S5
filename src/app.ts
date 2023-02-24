import 'express-async-errors'
import express, { Application } from 'express'
import { handleErrors } from './errors'
import { userRoutes } from './routers/user.routes'


const app: Application = express()
app.use(express.json())
app.use(handleErrors)
app.use('/users', userRoutes)




export { app }