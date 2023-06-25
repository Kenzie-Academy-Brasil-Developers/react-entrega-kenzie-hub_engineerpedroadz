import { createGlobalStyle, styled } from "styled-components";


export const Reset = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
}

body{
    font-family: var(--font-family);
}

button{
    cursor: pointer;
    background: transparent;
    border: none;
}

input{
    border:none;
    outline:none;
}

ul, ol {
    list-style: none;
}

a{
    text-decoration: none;
}        
`