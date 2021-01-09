import React from "react";
import styled from "styled-components";

const SectionStyles = styled.section`
  padding: var(--base-size) var(--base-size);
  width: 100%;
  max-width: var(--desktopXXL);
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    padding: calc(var(--base-size) * 2);
  }

  @media screen and (min-width: 1200px) {
    padding: calc(var(--base-size) * 4) 0;
  }
`;

const Section = ({ children }) => {
  return <SectionStyles>{children}</SectionStyles>;
};

export default Section;
