import {styled, css } from "styled-components";

export const DefaultInputStyle = css`
    background-color: var(--color-grey-2);
    border-radius: 3px;
    height: 40px;
    width:100%;
    padding-left: 15px;

    &::placeholder{
        color: var(--color-grey-1)
    }
`

export const StyledForm = styled.form`
    background-color: var(--color-grey-3);
    overflow-y: auto;
   > div{
        display: flex;
        flex-direction: column;
        gap:1rem;
        width:100%;
        align-items: center;
    }
    
    > div > div{
        display: flex;
        justify-content: center;
        padding:15px;

        > h2{
            color: var(--color-grey-0);
            font-size: 0.875rem;
            font-weight: 700;
        }
        
    }
    
    > div > p{
        color:var(--color-grey-1);
        font-weight: 600;
        font-size:10px;
    }

    >div> label{
        align-self: flex-start;
        color: var(--color-grey-0);
        font-size:0.625rem;
    }
`

export const StyledInput = styled.input`
    ${DefaultInputStyle}
    color: var(--color-grey-0);
    
    &:hover{
        border: solid 1px var(--color-grey-0);
        transition: 0.3s;
    }
    `

export const StyledSelect = styled.select`
    ${DefaultInputStyle};
    border:none;
    color: var(--color-grey-1);
    outline: none;

`