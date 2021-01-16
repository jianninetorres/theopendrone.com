import React from "react";
import styled from "styled-components";

const SectionStyles = styled.section`
  padding: calc(var(--base-size) * 2) var(--base-size);
  width: 100%;
  max-width: var(--desktopXXL);
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.tabletLandscape} {
    padding: calc(var(--base-size) * 2);
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    padding: calc(var(--base-size) * 6) 0;
  }
`;

const Section = ({ children }) => {
  return <SectionStyles>{children}</SectionStyles>;
};

export default Section;
