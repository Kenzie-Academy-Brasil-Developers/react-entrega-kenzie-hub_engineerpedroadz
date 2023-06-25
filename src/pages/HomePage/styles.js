import { styled } from "styled-components";

export const TotalContainer = styled.div`
    background-color: var(--color-grey-4);
    color: var(--color-grey-0);
    height:100vh;

    section:nth-child(1){
        border-bottom: var(--color-grey-3) solid 2px;;
        
        p{
            margin-top:1rem;
            color:var(--color-grey-1);
            font-size: 12px;
        }
    }
    section:nth-child(2){
        p{
            margin-top:1rem;
        }
    }

   header > div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: var(--color-grey-3) solid 2px;
   } 

   h1{
    color: var(--color-primary);
    font-size:1rem;
   }

   h2{
    font-size:1rem;
   }

   button{
    width:70px;
   }
`