import {z} from "zod"

export const createProductSchema = z.object({
    name: z.string().min(3, "Nama produk minimal 3 karakter"),
    price: z.coerce.number().positive("Harga harus berupa angka positif"),
    stock: z.coerce.number().positive("Stok harus berupa angka positif"),
    category: z.string().optional()
})