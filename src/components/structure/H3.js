import React from "react";
import styled from "styled-components";

const H3TitleStyles = styled.h3`
  font-size: 1.55rem;
  text-align: ${(props) => props.textAlign || "left"};
  font-weight: 700;
  margin-bottom: calc(var(--base-size) * 2);
`;

const H3 = ({ children, textAlign }) => {
  return <H3TitleStyles textAlign={textAlign}>{children}</H3TitleStyles>;
};

export default H3;
