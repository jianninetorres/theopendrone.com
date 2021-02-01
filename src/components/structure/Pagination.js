import React from "react";
import PaginationWrapper from "./PaginationWrapper";
import styled from "styled-components";
import { Link } from "gatsby";

const PaginationStyles = styled((props) => <Link {...props} />)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-decoration: none;
  font-weight: 400;
  margin: 0 2rem;
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  // Previous page
  &:nth-child(1) {
    color: ${(props) =>
      props.isFirst ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${(props) => (props.isFirst ? "none" : "auto")};
    cursor: ${(props) => (props.isFirst ? "default" : "pointer")};
  }

  // Next page
  &:nth-child(3) {
    color: ${(props) =>
      props.isLast ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${(props) => (props.isLast ? "none" : "auto")};
    cursor: ${(props) => (props.isLast ? "default" : "pointer")};
  }
`;

const Pagination = ({ prevPage, nextPage, homePage, isFirst, isLast }) => {
  return (
    <PaginationWrapper>
      <PaginationStyles isFirst={isFirst} to={prevPage}>
        Previous page
      </PaginationStyles>
      <PaginationStyles to={homePage}>Home</PaginationStyles>
      <PaginationStyles isLast={isLast} to={nextPage}>
        Next page
      </PaginationStyles>
    </PaginationWrapper>
  );
};

export default Pagination;
