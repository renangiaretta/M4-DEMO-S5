import { userSchema, returnUserSchema, returnListUserSchema, updateUserSchema } from "../schemas/user.schemas";
import { z } from "zod"; 
import { DeepPartial } from "typeorm";

type TUser = z.infer<typeof userSchema>
type TUserReturn = z.infer<typeof returnUserSchema>
type TUserListReturn = z.infer<typeof returnListUserSchema>
type TUserUpdate = DeepPartial<TUser>


export {
    TUser,
    TUserReturn,
    TUserListReturn,
    TUserUpdate
}