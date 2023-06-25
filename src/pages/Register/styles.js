import { styled } from "styled-components";
import {css} from "styled-components";

export const ContainerRegister = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    background-color: var(--color-grey-4);
    

    > div > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:20px;
        height:500px;
    } 
            
    > div > div > form > div > div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap:1.25rem;

        p{
            color:var(--color-grey-1);
            font-size: 0.625rem;
        }
    }
    
    #container-title{
        display: flex;
        flex-direction: row;
        width:100%;
        justify-content: space-between;
        h1{
            font-size:1.125rem;
            color: var(--color-primary)
        }
        button{
            max-width: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--color-grey-2)
        }
    }
    
`