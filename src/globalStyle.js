import { createGlobalStyle } from "styled-components";
import GameOfSquids from "./assets/fonts/GameOfSquids.ttf";
import MontBook from "./assets/fonts/Mont-Book.otf";

const GlobalStyle = createGlobalStyle`
    /*----------------------*\
          Global Variable
    \*----------------------*/
    html {
        --color-red: #B5223F;
        --color-blue: #304B72;
        --color-green: #126B59;
        --color-black: #211E21;
        --color-darkblue: #102037;
        --color-yellow: #E0CD2A;
        --color-pink: #FB2481;
        --color-white: #F9F7F8;

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
        font-family: 'GameOfSquids';
        font-style: normal;
        font-weight: normal;
        src: local("GameOfSquids"), url(${GameOfSquids}) format('truetype');
        font-display: swap;
    }

    @font-face {
        font-family: 'MontBook';
        font-style: normal;
        font-weight: normal;
        src: local("MontBook"), url(${MontBook}) format('opentype');
        font-display: swap;
    }

    body {
        width:100%;
        margin: 0;
        font-family: "MontBook";
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
    .red {
        color: var(--color-red);
    }
    .blue {
        color: var(--color-blue);
    }
    .green {
        color: var(--color-green);
    }
    .darkblue {
        color: var(--color-darkblue);
    }
    .yellow {
        color: var(--color-yellow);
    }
    .pink {
        color: var(--color-pink);
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

    .font-squids {
        font-family: "GameOfSquids";
    }

    .font-mont {
        font-family: "MontBook";
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
        scrollbar-color: var(--color-pink);
    } 

    *::-webkit-scrollbar {
        width: 0.5em;
        background-color: var(--color-white);
    }
    
    *::-webkit-scrollbar-thumb {
        border-radius: 5vmin;
        background-color: var(--color-pink);
    }
`;

export default GlobalStyle;
