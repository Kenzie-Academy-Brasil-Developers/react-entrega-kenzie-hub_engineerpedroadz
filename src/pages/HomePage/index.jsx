import { StyledButton } from "../../styles/buttons"
import { GridContainer } from "../../styles/grid"
import { TotalContainer } from "./styles"

export const HomePage = () => {
    return(
       <TotalContainer>
            <header>
                <GridContainer>
                <h1>Kenzie Hub</h1>
                <StyledButton backgroundColor="grey">Sair</StyledButton>
                </GridContainer>
            </header>
        <main>
            <section>
                <GridContainer>
                    <h2>Olá, {}</h2>
                    <p>Primeiro módulo{'(Introdução ao frontend)'}</p>
                </GridContainer>
            </section>

            


        </main>
       </TotalContainer>

    )

}