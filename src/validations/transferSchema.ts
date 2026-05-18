import {z} from "zod";

export const transferPointSchema = z.object({
    senderId: z.coerce.number("Harus angka"),
    receiverId: z.coerce.number("Harus angka"),
    amount: z.coerce.number("Harus angka")
})