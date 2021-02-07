import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --base-size: ${(props) => props.theme.spacings.base};
        --black: ${(props) => props.theme.colors.black};
        --black2: ${(props) => props.theme.colors.black2};
        --blue: ${(props) => props.theme.colors.blue};
        --white: ${(props) => props.theme.colors.white};
        --border-radius: ${(props) => props.theme.borderStyles.radius};
    }

    html {
        font-size: var(--base-size);
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.mainFallbacks};
        font-family: ${(props) => props.theme.fonts.main};
    }

    body {
        color: var(--black);
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${(props) => props.theme.fonts.headersFallbacks};
        font-family: ${(props) => props.theme.fonts.headers};
    }

    h1, h2 {
        font-weight: bold;
        line-height: 1.2;
    }

    h1 {
        font-size: calc(var(--base-size) * 2.5);
        margin: 0 0 calc(var(--base-size) * 2);
        @media ${(props) => props.theme.breakpoints.tabletPortrait} {
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
        line-height: 1.75;
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
