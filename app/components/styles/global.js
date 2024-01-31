import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: arial;
        font-style: normal;
    }
`

export default GlobalStyles