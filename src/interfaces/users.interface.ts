import { userSchema, returnUserSchema } from "../schemas/user.schemas";
import { z } from "zod"; 

type TUser = z.infer<typeof userSchema>
type TUserReturn = z.infer<typeof returnUserSchema>


export {
    TUser,
    TUserReturn
}