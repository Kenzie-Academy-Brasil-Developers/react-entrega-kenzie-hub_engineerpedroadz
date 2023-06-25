import { StyledForm, StyledInput, StyledSelect } from "../../styles/form"
import { GridContainer } from "../../styles/grid"
import { StyledButton } from "../../styles/buttons"
import { ContainerRegister } from "../Register/styles"
import { useForm } from "react-hook-form"

export const Register = () => {
    const {register, handleSubmit, reset} = useForm()

    const submit = (formData)=>{
        console.log(formData)

    }

    return(
        <ContainerRegister>
            <div>
                
                <div>
                    <div id="container-title">
                        <h1>Kenzie Hub</h1>

                        <StyledButton backgroundColor="grey">Voltar</StyledButton>
                    </div>
                    <StyledForm>
                        <GridContainer> 
                            <div>
                            <h2>Crie sua conta</h2>

                            <p>Rápido e grátis, vamos nessa</p>
                            </div>
                            <label for="name-input">Nome</label>
                            <StyledInput placeholder="Digite aqui seu nome" type="text" name="name-input" {...register("name")}/>
                            <label for="email-input">Email</label>
                            <StyledInput placeholder="Digite aqui seu email" type="text" name="email-input" {...register("email")}/>

                            <label for="password-input">Senha</label>                
                            <StyledInput placeholder="Digite aqui sua senha" type="text" name="password-input" {...register("password")}/>

                            <label for="password-input-confirm">Confirme sua senha</label>                
                            <StyledInput placeholder="Digite aqui sua senha" type="text" name="password-input-confirm"/>

                            <label for="bio-input">Bio</label>                
                            <StyledInput placeholder="Fale sobre você" type="text" name="bio-input" {...register("bio")}/>

                            <label for="contact-input">Contato</label>                
                            <StyledInput placeholder="Opção de contato" type="text" name="contact-input" {...register("contact")}/>
                            
                            <label for="select-m" >Selecionar módulo</label>
                            <StyledSelect name="select-m" {...register("course_module")}>
                                <option value="">Primeiro módulo</option>
                            </StyledSelect>

                            <StyledButton backgroundColor="default" height ="medium" type="submit">Cadastrar</StyledButton>


                        </GridContainer>
                    </StyledForm>
                </div>
            </div>            
            </ContainerRegister>
    )
}