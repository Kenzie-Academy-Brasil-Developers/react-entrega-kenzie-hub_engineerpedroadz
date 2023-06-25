import { StyledButton } from "../../styles/buttons"
import { ContainerLogin } from "./styles"
import { GridContainer } from "../../styles/grid"
import { StyledForm, StyledInput } from "../../styles/form"

export const Login = () => {
    return(
        <ContainerLogin>
            <div>
                    <h1>Kenzie Hub</h1>
                <StyledForm>
                    <GridContainer>
                        <div>
                        <h2>Login</h2>
                        </div>
                        <label for="email-input">Email</label>
                        <StyledInput placeholder="Digite aqui seu email" type="text" name="email-input"/>
                        <label for="password-input">Senha</label>
                        <StyledInput placeholder="Digite aqui sua senha" type="text" name="password-input"/>
                        <StyledButton backgroundColor="default" height ="medium" type="submit">Entrar</StyledButton>

                        <p>Ainda não possui uma conta?</p>

                        <StyledButton backgroundColor="grey" height="medium">Cadastra-se</StyledButton>
                    </GridContainer>
                </StyledForm>
            </div>
        </ContainerLogin>
    )
}