import {z} from "zod"

export const registerFormSchema = z.object({
    name: z.string().min(3,"No mínimo três caracteres"),
    course_module: z.string(),
    email: z.string().email("Email inválido"),
    contact: z.string().min(3),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
    confirmPassword: z
    .string()
    ,
    bio: z.string(),
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "A confirmação e a senha precisam corresponder.",
    path: ["confirmPassword"],
}
)