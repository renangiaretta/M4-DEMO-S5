import { Request, Response, NextFunction } from 'express'
import { ZodTypeAny } from 'zod'


const ensureDataIsValidMiddleware = ( schema: ZodTypeAny ) => ( req: Request, res: Response, next: NextFunction ) => {

    const validatedData = schema.parse(req.body)
    return next()

}

export { 
    ensureDataIsValidMiddleware
}