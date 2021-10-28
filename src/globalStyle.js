import { createGlobalStyle } from "styled-components";
// import Kollektif from "./assets/fonts/Kollektif.woff";
// import IndonesiaScript from "./assets/fonts/Indonesia-Script.woff";
// import patternBGWhite from "./assets/img/pattern-bg-white.webp";
// import patternBGDarkBlue from "./assets/img/pattern-bg-darkblue.webp";

const GlobalStyle = createGlobalStyle`
    /*----------------------*\
          Global Variable
    \*----------------------*/
    html {
        --color-red: #C50034;
        --color-redpink: #F31958;
        --color-blue: #0593F7;
        --color-darkblue: #01385E;
        --color-footerblue: #0074AF;
        --color-orange: #FF7C02;
        --color-yellow: #FFBE00;
        --color-black: #2D2D2D;
        --color-white: #ffffff;

        --delay-multiplier: 0.1s;
        --spacer: 1rem;
    }
`;

export default GlobalStyle;
