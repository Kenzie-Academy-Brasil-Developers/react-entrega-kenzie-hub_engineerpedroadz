import { styled } from "styled-components";


export const ContainerLogin = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    background-color: var(--color-grey-4);
    
    > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:400px;
        gap:20px;
        height:500px;
        > h1{
            font-size:1.125rem;
            color: var(--color-primary)
        }
    }
`