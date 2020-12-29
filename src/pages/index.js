import React from "react";
import styled from "styled-components";
import Section from "../components/structure/Section";

const IndexStyles = styled.div`
  padding: var(--base-size) 0;
  @media screen and (min-width: 1024px) {
    padding: calc(var(--base-size) * 6) 0;
  }
`;

const Index = () => {
  return (
    <IndexStyles>
      <Section>
        <h1>The Open Drone</h1>
      </Section>
    </IndexStyles>
  );
};

export default Index;
