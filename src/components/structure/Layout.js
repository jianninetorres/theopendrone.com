import React from "react";

import "normalize.css";
import "reset.css";
import styled from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import Nav from "./Nav";

const MainContentStyles = styled.div`
  padding: calc(var(--base-size) * 5) var(--base-size) 0;
  position: relative;
  min-height: 100vh;
  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Nav />
    <MainContentStyles>{children}</MainContentStyles>
  </>
);

export default Layout;
