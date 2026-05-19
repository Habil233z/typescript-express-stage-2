import {z} from "zod"

export const loginSchema = z.object({
    email: z.string().min(3, "Nama user minimal 3 karakter"),
    password: z.string().min(8, "Password minimal 8 karakter"),
})