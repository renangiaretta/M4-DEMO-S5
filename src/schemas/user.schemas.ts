import { z } from 'zod'
import { hashSync } from 'bcryptjs'



const userSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().min(10).max(45),
    password: z.string().min(4).max(20).transform((pass) => {
        return hashSync(pass,10)
    }),
    birthDate: z.date().optional()
})

const returnUser = userSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date()
}).omit({password: true})


export { userSchema, returnUser }