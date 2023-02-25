import { z } from 'zod'
import { hashSync } from 'bcryptjs'



const userSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().min(10).max(45),
    password: z.string().min(4).max(20).transform((pass) => {
        return hashSync(pass,10)
    }),
    birthDate: z.preprocess((date) => {
        if (typeof date == 'string' || date instanceof Date){
            return new Date(date)
        }
    }, z.date().or(z.string()).optional().nullable())
})

const returnUserSchema = userSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).omit({password: true})

const returnListUserSchema = returnUserSchema.array()

// .partial() transforma todas as propriedades em opcionais
const updateUserSchema = userSchema.partial({

})




export { userSchema, returnUserSchema, returnListUserSchema, updateUserSchema }