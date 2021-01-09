import React from "react";
import styled from "styled-components";

const ContentPStyles = styled.p`
  width: 100%;
`;

const ContentP = ({ children }) => {
  return <ContentPStyles>{children}</ContentPStyles>;
};

export default ContentP;
