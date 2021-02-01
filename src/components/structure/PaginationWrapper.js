import React from "react";
import styled from "styled-components";

const PaginationWrapperStyles = styled.div`
  grid-column: 2 / span 12;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;

const PaginationWrapper = ({ children }) => {
  return <PaginationWrapperStyles>{children}</PaginationWrapperStyles>;
};

export default PaginationWrapper;
