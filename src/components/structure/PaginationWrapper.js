import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  grid-column: 2 / span 12;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a:nth-child(1) {
    color: ${(props) =>
      props.isFirst ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${(props) => (props.isFirst ? "none" : "auto")};
    cursor: ${(props) => (props.isFirst ? "default" : "pointer")};
  }

  a:nth-child(3) {
    color: ${(props) =>
      props.isLast ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${(props) => (props.isLast ? "none" : "auto")};
    cursor: ${(props) => (props.isLast ? "default" : "pointer")};
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`;

export const Pagination = ({ homePage, isFirst, isLast, children }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast} homePage={homePage}>
      {children}
    </PaginationWrapper>
  );
};
