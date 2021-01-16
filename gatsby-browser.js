import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./src/themes/theme";
import GlobalStyles from "./src/styles/GlobalStyles";
import Layout from "./src/components/structure/Layout";

export const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Layout {...props}>{element}</Layout>
  </ThemeProvider>
);
