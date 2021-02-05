import React from "react";
import Section from "./Section";
import H2Title from "./H2Title";
import ContentP from "./ContentP";
import styled from "styled-components";

const FullPanelStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    margin-top: var(--base-size);
    width: 100%;
    max-width: 700px;
    font-size: 1.25rem;
    text-align: center;
    line-height: 1.5;
    @media ${(props) => props.theme.breakpoints.tabletLandscape} {
      margin-top: calc(var(--base-size) * 2);
      font-size: 2rem;
    }
  }
`;

const FullPanel = ({ children, h2Title }) => {
  return (
    <Section>
      <FullPanelStyles>
        <H2Title textAlign={"center"}>{h2Title}</H2Title>
        <ContentP textAlign={"center"} maxWidth={"720px"}>
          {children}
        </ContentP>
      </FullPanelStyles>
    </Section>
  );
};

export default FullPanel;
