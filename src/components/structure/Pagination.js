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
      props.isfirst ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${(props) => (props.isfirst ? "none" : "auto")};
    cursor: ${(props) => (props.isfirst ? "default" : "pointer")};
  }

  // Next page
  &:nth-child(3) {
    color: ${(props) =>
      props.islast ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${(props) => (props.islast ? "none" : "auto")};
    cursor: ${(props) => (props.islast ? "default" : "pointer")};
  }
`;

const Pagination = ({ prevPage, nextPage, homePage, isfirst, islast }) => {
  return (
    <PaginationWrapper>
      <PaginationStyles isfirst={isfirst} to={prevPage}>
        Previous page
      </PaginationStyles>
      <PaginationStyles to={homePage}>Home</PaginationStyles>
      <PaginationStyles islast={islast} to={nextPage}>
        Next page
      </PaginationStyles>
    </PaginationWrapper>
  );
};

export default Pagination;
