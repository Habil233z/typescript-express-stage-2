import {z} from "zod"

export const createProductSchema = z.object({
    name: z.string().min(2, "Nama produk minimal 2 karakter"),
    price: z.coerce.number().positive("Harga harus berupa angka positif"),
    stock: z.coerce.number().positive("Stok harus berupa angka positif"),
    description: z.string().optional(),
    category: z.string().optional()
})