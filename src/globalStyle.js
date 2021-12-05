import { createGlobalStyle } from "styled-components";
import Bright from "./assets/fonts/Bright.otf";
import Quacker from "./assets/fonts/Quacker.ttf";
import Montserrat from "./assets/fonts/Montserrat-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    /*----------------------*\
          Global Variable
    \*----------------------*/
    html {
        --color-green: #3e6456;
        --color-black: #302f2b;
        --color-white: #d0c8b3;

        --delay-multiplier: 0.1s;
        --spacer: 1rem;
    }

    * {
        box-sizing: border-box;
    }

    img {
       -webkit-user-drag: none;
    }

    html {
        scroll-behavior: smooth;
    }

    /*----------------------*\
               Font
    \*----------------------*/
    @font-face {
        font-family: 'Bright';
        font-style: normal;
        font-weight: normal;
        src: local("Bright"), url(${Bright}) format('opentype');
        font-display: swap;
    }

    @font-face {
        font-family: 'Quacker';
        font-style: normal;
        font-weight: normal;
        src: local("Quacker"), url(${Quacker}) format('truetype');
        font-display: swap;
    }

    @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: normal;
        src: local("Montserrat"), url(${Montserrat}) format('truetype');
        font-display: swap;
    }

    body {
        width:100%;
        margin: 0;
        font-family: "Montserrat";
    }

    .font-bold {
        font-weight: 700;
    }

    .font-normal {
        font-weight: 400;
    }


    /*----------------------*\
              Color
    \*----------------------*/

    .green {
        color: var(--color-green);
    }
    .black {
        color: var(--color-black);
    }
    .white {
        color: var(--color-white);
    }

       /*----------------------*\
            Typography
    \*----------------------*/
    .text-center {
        text-align: center;
    }

    .text-left {
        text-align: left;
    }

    .text-right {
        text-align: right;
    }

    .font-title {
        font-family: "Bright";
    }

    .font-number {
        font-family: "Quacker";
    }

    .font-default {
        font-family: "Montserrat";
    }

    p{
        font-size: calc(0.5rem + 1.2vmin);
    }
    h1{
        font-size: calc(0.5rem + 8vmin);
    }
    h2{
        font-size: calc(0.5rem + 3vmin);
    }
    h3{
        font-size: calc(0.5rem + 2.5vmin);
    }
    h4{
        font-size: calc(0.5rem + 2vmin);
    }
    h5{
        font-size: calc(0.5rem + 1.5vmin);
    }
   /*----------------------*\
            Animation
    \*----------------------*/
    @keyframes fadeInFromUp {
    0% {
        opacity: 0;
        transform: translateY(-20%);
        }
    100% {
        opacity: 1;
        transform: translateY(0);
        }
    }

    @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
    }

    /*----------------------*\
            Scrollbar
    \*----------------------*/
    body {
        overflow-y: scroll;
        scrollbar-color: var(--color-black);
    } 

    *::-webkit-scrollbar {
        width: 0.5em;
        background-color: var(--color-white);
    }
    
    *::-webkit-scrollbar-thumb {
        border-radius: 5vmin;
        background-color: var(--color-black);
    }
`;

export default GlobalStyle;
