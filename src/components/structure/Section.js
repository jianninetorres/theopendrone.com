import React from "react";
import styled from "styled-components";

const SectionStyles = styled.section`
  margin: var(--base-size) 0;
  @media screen and (min-width: 1024px) {
    margin: calc(var(--base-size) * 2) 0;
  }
`;

const Section = ({ children }) => {
  return <SectionStyles>{children}</SectionStyles>;
};

export default Section;
