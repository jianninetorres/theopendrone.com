import React from "react";
import styled from "styled-components";

const HeaderH1Styles = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  background-color: ${(props) => props.theme.colors.black2};
  color: ${(props) => `${props.colour}` || props.theme.colors.black};

  @media ${(props) => props.theme.breakpoints.tabletLandscape} {
    font-size: 3.5rem;
  }
`;

const HeaderH1 = ({ children, colour }) => {
  return <HeaderH1Styles colour={colour}>{children}</HeaderH1Styles>;
};

export default HeaderH1;
