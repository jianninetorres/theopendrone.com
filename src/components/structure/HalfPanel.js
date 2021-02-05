import React from "react";
import styled from "styled-components";

const HalfPanelStyles = styled.article`
  display: grid;
  grid-gap: calc(var(--base-size) * 2);
  width: 100%;
  max-width: ${(props) => props.theme.maxWidths.desktopL};
  margin: 0 auto;
  place-items: ${(props) => props.placeItems || "normal"};
  justify-items: ${(props) => props.justifyItems || "normal"};

  @media ${(props) => props.theme.breakpoints.tabletPortrait} {
    grid-template-columns: 1fr 1fr;
    grid-gap: calc(var(--base-size) * 4);
  }
`;

const HalfPanel = ({ children, justifyItems, placeItems }) => {
  return (
    <HalfPanelStyles justifyItems={justifyItems} placeItems={placeItems}>
      {children}
    </HalfPanelStyles>
  );
};

export default HalfPanel;
