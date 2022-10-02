import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

.add-contact-btn{
    display: block;
    padding: .6rem;
    border: solid 1px ${(props) => props.theme.darkGray};
    background-color: transparent;
    font-size: 1.1rem;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: 2rem;
    border-radius: 5px;
    cursor: pointer;
    width: fit-content;
    text-decoration: none;
    color: ${(props) => props.theme.darkGray};
    
}
`;
