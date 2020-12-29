import React from "react";
import styled from "styled-components";

const HalfPanelStyles = styled.section`
  display: grid;
  @media screen and (min-width: 1024px) {
    grid-template-columns: 50% 50%;
  }
`;

const HalfPanel = ({ children }) => {
  return <HalfPanelStyles>{children}</HalfPanelStyles>;
};

export default HalfPanel;
