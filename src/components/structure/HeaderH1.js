import React from "react";
import styled from "styled-components";

const HeaderH1Styles = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  @media screen and (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

const HeaderH1 = ({ children }) => {
  return <HeaderH1Styles>{children}</HeaderH1Styles>;
};

export default HeaderH1;
