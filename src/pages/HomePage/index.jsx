import { useContext } from "react"
import { StyledButton } from "../../styles/buttons"
import { GridContainer } from "../../styles/grid"
import { TotalContainer } from "./styles"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../providers/userContext"

export const HomePage = () => {

    const {user} = useContext(UserContext)
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
                    <p>{ user.course_module + '(Introdução ao frontend)'}</p>
                </GridContainer>
            </section>

            


        </main>
       </TotalContainer>

    )

}