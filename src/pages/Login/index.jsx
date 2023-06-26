import { StyledButton } from "../../styles/buttons"
import { ContainerLogin } from "./styles"
import { GridContainer } from "../../styles/grid"
import { StyledForm, StyledInput } from "../../styles/form"
import { api } from "../../services/api"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "./loginFormSchema"

export const Login = ({user,setUser}) => {
    const {register, handleSubmit,formState:{errors}, reset} = useForm({
        resolver: zodResolver(loginFormSchema)
    })

    const navigate =  useNavigate()

    const loginUser = async (formData) =>{

        try{
            const logar = await api.post('/sessions', formData)
            navigate("/dashboard")
            const data = logar.data;
            setUser(data.user)
            localStorage.setItem('userID', JSON.stringify(data.user.id));
            localStorage.setItem('token', JSON.stringify(data.token));

        }catch{

        }
    }

    const submit = (formData) => {
        loginUser(formData)
    }

    return(
        <ContainerLogin>
            <div>
                    <h1>Kenzie Hub</h1>
                <StyledForm onSubmit={handleSubmit(submit)}>
                    <GridContainer>
                        <div>
                        <h2>Login</h2>
                        </div>
                        <label for="email">Email</label>
                        <StyledInput placeholder="Digite aqui seu email" type="text" name="email" required {...register("email")}/>
                        {errors.email?.message}
                        <label for="password">Senha</label>
                        <StyledInput placeholder="Digite aqui sua senha" type="text" name="password-input"  {...register("password")} required/>
                        {errors.password?.message}
                        <StyledButton backgroundColor="default" height ="medium" type="submit">Entrar</StyledButton>

                        <p>Ainda não possui uma conta?</p>

                        <StyledButton backgroundColor="grey" height="medium" onClick={()=>{navigate("/register")}}>Cadastra-se</StyledButton>
                    </GridContainer>
                </StyledForm>
            </div>
        </ContainerLogin>
    )
}