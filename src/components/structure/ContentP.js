import React from "react";
import styled from "styled-components";

const ContentPStyles = styled.p`
  width: 100%;
  max-width: ${(props) => props.maxWidth || ""};
  font-size: 1rem;

  @media ${(props) => props.theme.breakpoints.tabletPortrait} {
    font-size: 1.25rem;
  }
`;

const ContentP = ({ children, maxWidth }) => {
  return <ContentPStyles maxWidth={maxWidth}>{children}</ContentPStyles>;
};

export default ContentP;
