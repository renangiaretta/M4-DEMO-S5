import { Request, Response, NextFunction } from "express-serve-static-core"
import { ZodError } from "zod"

class AppError extends Error {
    statusCode: number
    
    constructor( message: string, statusCode: number ) {
        super( message )
        this.statusCode = statusCode
    }
}


const handleErrors = ( err: any, req: Request, res: Response, _: NextFunction ) => {
    
    if( err.message === 'duplicate key value violates unique constraint "UQ_97672ac88f789774dd47f7c8be3"') {
        return res.status(409).json({
            message: 'E-mail already exists.'
        })
    }
    if( err instanceof AppError ) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    if( err instanceof ZodError ) {
        return res.status(400).json(err.flatten().fieldErrors)
    }

    console.log(err)
    return res.status(500).json({
        message: 'Internal server error'
    })
}

export { 
    AppError,
    handleErrors
}