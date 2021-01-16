import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Theme from "./src/themes/theme";
import Layout from "./src/components/structure/Layout";

const GlobalStyles = createGlobalStyle`
    :root {
        --base-size: ${(props) => props.theme.spacings.base};
        --black: ${(props) => props.theme.colors.black};
        --blue: ${(props) => props.theme.colors.blue};
        --white: ${(props) => props.theme.colors.white};
        --border-radius: ${(props) => props.theme.borderStyles.radius};
    }

    html {
        font-size: var(--base-size);
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.main};
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
    }

    input,
    button {
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }
`;

export const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Layout {...props}>{element}</Layout>
  </ThemeProvider>
);

export const onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: "no-js",
  });
};
