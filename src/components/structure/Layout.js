import React from "react";

import "normalize.css";
import "reset.css";
import "fontsource-poppins";
import "fontsource-open-sans";
import "fontsource-montserrat";
import styled from "styled-components";
import Nav from "./Nav";
import Footer from "./Footer";

const MainContentStyles = styled.div`
  padding: calc(var(--base-size) * 5) 0 0;
  position: relative;
  min-height: 100vh;
  @media ${(props) => props.theme.breakpoints.tabletLandscape} {
    padding: 0;
  }
`;

const Layout = ({ children }) => (
  <>
    <Nav />
    <MainContentStyles>{children}</MainContentStyles>
    <Footer />
  </>
);

export default Layout;
