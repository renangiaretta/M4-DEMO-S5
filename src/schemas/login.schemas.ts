import { z } from 'zod'

const createLoginSchema = z.object({
    email: z.string().min(10).max(45),
    password: z.string().min(4).max(20)
})

export {createLoginSchema}