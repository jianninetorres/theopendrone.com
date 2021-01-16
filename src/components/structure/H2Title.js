import React from "react";
import styled from "styled-components";

const H2TitleStyles = styled.h2`
  font-size: 2rem;
  text-align: ${(props) => props.textAlign || "left"};
  @media ${(props) => props.theme.breakpoints.tabletLandscape} {
    font-size: 3rem;
  }
`;

const H2Title = ({ children, textAlign }) => {
  return <H2TitleStyles textAlign={textAlign}>{children}</H2TitleStyles>;
};

export default H2Title;
