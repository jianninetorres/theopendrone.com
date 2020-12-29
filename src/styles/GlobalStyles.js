import { createGlobalStyle } from "styled-components";

import "./typography.css";

const GlobalStyles = createGlobalStyle`
    :root {
        --base-size: 16px;
        --black: #212F3D;
        --white: #fff;
        --mobile: 425px;
        --tabletPortrait: 768px;
        --tabletLandscape: 1024px;
        --desktop: 1200px;
        --desktopL: 1440px;
        --desktopXL: 1600px;
        --desktopXXL: 1920px;
    }

    html {
        font-size: var(--base-size);
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        color: var(--black);
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    h1, h2 {
        font-weight: bold;
        line-height: 1.2;
    }

    h1 {
        font-size: calc(var(--base-size) * 2.5);
        margin: 0 0 calc(var(--base-size) * 2);
        @media screen and (min-width: 768px) {
            margin-top: calc(var(--base-size) * 2);
        }
    }

    h2 {
        font-size: calc(var(--base-size) * 2);
    }

    h3, h4, h5, h6 {
        line-height: 1.2;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
    }

    input,
    button {
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;
