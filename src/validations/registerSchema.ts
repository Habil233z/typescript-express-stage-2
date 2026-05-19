import {z} from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, "Nama user minimal 3 karakter"),
    email: z.string().min(1, "Email harus diisi karakter"),
    password: z.string().min(8, "Password minimal 8 karakter")
})