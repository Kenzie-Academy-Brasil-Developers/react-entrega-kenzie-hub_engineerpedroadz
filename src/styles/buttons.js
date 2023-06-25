import styled, {css} from "styled-components";

export const StyledButton = styled.button`
    color: var(--color-grey-0);
    padding:0 20px;
    border-radius:0.1875rem;
    font-family: var(--font-family);
    width:100%;

    ${({ backgroundColor }) => {
    switch (backgroundColor) {
      case "default":
        return css`
          background-color: var(--color-primary-disable);
        `;
      case "grey":
        return css`
          background-color: var(--color-grey-1);
        `;      
    }
  }}

  ${({ height }) => {
    switch (height) {
      case "small":
        return css`
          height: 30px;
        `;
      case "medium":
        return css`
          height: 40px;
        `;
    }
  }}

  &:hover{
    background-color: var(--color-primary);
    transition: 0.3s;
  }
`;
