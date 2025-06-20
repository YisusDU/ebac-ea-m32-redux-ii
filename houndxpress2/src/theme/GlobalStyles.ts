import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        font-family: "Open Sans", sans-serif !Important;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        line-height: normal;
    }

    html {
        min-width: 19rem !Important;
    }
    body{
        font-family: ${(props) => props.theme.fonts.base};
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;

        #root{
            margin: 0;
            padding: 0;
            width: 100%;
            display: grid;
            min-height: 100dvh;
            grid-template-rows: auto 1fr auto;
            grid-template-columns: 100%;    
        }
    }

/*880px*/
@media screen and (max-width: 55rem) {
    body {
        font-size: 18px;
    }
}


//Dark Mode
@media screen and (prefers-color-scheme: dark) {
    body {
        background-color: ${(props) => props.theme.colors.darkModeBg};
    }
}
`;
export default GlobalStyles;
