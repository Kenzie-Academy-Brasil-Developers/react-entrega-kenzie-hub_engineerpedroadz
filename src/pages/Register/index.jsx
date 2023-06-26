import { StyledForm, StyledInput, StyledSelect } from "../../styles/form"
import { GridContainer } from "../../styles/grid"
import { StyledButton } from "../../styles/buttons"
import { ContainerRegister } from "../Register/styles"
import { useForm } from "react-hook-form"
import { useContext, useEffect } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./registerFormSchema"
import { UserContext } from "../../providers/userContext"

export const Register = () => {

    const {register, handleSubmit,formState:{errors}, reset} = useForm({
        resolver: zodResolver(registerFormSchema)
    })

    const navigate = useNavigate();

   const {registerUser} = useContext(UserContext)


    const submit = (formData)=>{
        registerUser(formData)
    }

    return(
        <ContainerRegister>
            <div>             
                <div>
                    <div id="container-title">
                        <h1>Kenzie Hub</h1>

                        <StyledButton onClick={()=>{navigate("/")}} backgroundColor="grey">Voltar</StyledButton>
                    </div>
                    <StyledForm onSubmit={handleSubmit(submit)} >
                        <GridContainer> 
                            <div>
                            <h2>Crie sua conta</h2>

                            <p>Rápido e grátis, vamos nessa</p>
                            </div>
                            <label for="name">Nome</label>
                            <StyledInput placeholder="Digite aqui seu nome" type="text" name="name" {...register("name")}/>
                            {errors.name?.message}
                            <label for="email">Email</label>
                            <StyledInput placeholder="Digite aqui seu email" type="text" name="email" {...register("email")}/>
                            {errors.email?.message}

                            <label for="password">Senha</label>                
                            <StyledInput placeholder="Digite aqui sua senha" type="password" name="password" {...register("password")}/>
                            {errors.password?.message}

                            <label for="confirmPassword">Confirme sua senha</label>                
                            <StyledInput placeholder="Digite aqui sua senha" type="password" name="confirmPassword" {...register("confirmPassword")} />

                            {errors.confirmPassword?.message}

                        

                            <label for="bio">Bio</label>                
                            <StyledInput placeholder="Fale sobre você" type="text" name="bio" {...register("bio")}/>
                            {errors.bio?.message}
                            
                            <label for="contact">Contato</label>                
                            <StyledInput placeholder="Opção de contato" type="text" name="contact" {...register("contact")}/>
                            {errors.contact?.message}
                            
                            <label for="course_module" >Selecionar módulo</label>
                            <StyledSelect name="course_module" {...register("course_module")}>
                                <option value="">Selecione</option>
                                <option value="Primeiro módulo">Primeiro módulo</option>
                                <option value="Segundo módulo">Segundo módulo</option>
                                <option value="Terceiro módulo">Terceiro módulo</option>
                                <option value="Quarto módulo">Quarto módulo</option>
                                <option value="Quinto módulo">Quinto módulo</option>
                                <option value="Sexto módulo">Sexto módulo</option>
                            </StyledSelect>

                            <StyledButton backgroundColor="default" height ="medium" type="submit">Cadastrar</StyledButton>


                        </GridContainer>
                    </StyledForm>
                </div>
            </div>            
            </ContainerRegister>
    )
}