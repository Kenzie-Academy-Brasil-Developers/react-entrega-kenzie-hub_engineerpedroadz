import {z} from "zod"

export const loginFormSchema = z.object({
    
    email: z.string().email("Email inválido").nonempty("O campo de email é obrigatório"),
    password: z.string().nonempty("O campo de senha é obrigatório"),
}
)