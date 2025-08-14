import z from "zod"
import { UserRole } from "./user.constraint"

 const userCreatezodSchema = z.object({
    name: z.string().min(3, "name must be at least 3 character"),
    email: z.email({error: "invalid email"}),
    phone: z.string(),
    role: z.enum(UserRole),
    password: z.string()
  })
export const userZodSchema = {
    userCreatezodSchema
}