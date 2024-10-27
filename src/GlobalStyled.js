import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    li, ul{
        list-style: none;
    }

    a{
        display: block;
        text-decoration: none;
        color: black;
    }

    img{
        width: 100%;
        display: block;
    }
`;
