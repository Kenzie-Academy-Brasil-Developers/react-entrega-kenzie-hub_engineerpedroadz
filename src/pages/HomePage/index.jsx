import { StyledButton } from "../../styles/buttons"
import { GridContainer } from "../../styles/grid"
import { TotalContainer } from "./styles"
import { useNavigate } from "react-router-dom"

export const HomePage = ({user}) => {

    const navigate = useNavigate();
    return(
       <TotalContainer>
            <header>
                <GridContainer>
                <h1>Kenzie Hub</h1>
                <StyledButton onClick={()=>{navigate("/"); localStorage.clear()}} backgroundColor="grey">Sair</StyledButton>
                </GridContainer>
            </header>
        <main>
            <section>
                <GridContainer>
                    <h2>Olá, {user.name}</h2>
                    <p>Primeiro módulo{'(Introdução ao frontend)'}</p>
                </GridContainer>
            </section>

            


        </main>
       </TotalContainer>

    )

}