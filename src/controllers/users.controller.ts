import { Request, Response } from "express";
import { TUser } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createuser.service";




const createUserController = async ( req: Request, res: Response ) => {


    const userData: TUser = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)


}

export { createUserController }