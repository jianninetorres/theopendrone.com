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
      props.isfirstblogpage
        ? props.theme.colors.dark3
        : props.theme.colors.dark1};
    pointer-events: ${(props) => (props.isfirstblogpage ? "none" : "auto")};
    cursor: ${(props) => (props.isfirstblogpage ? "default" : "pointer")};
  }

  // Next page
  &:nth-child(3) {
    color: ${(props) =>
      props.islastblogpage
        ? props.theme.colors.dark3
        : props.theme.colors.dark1};
    pointer-events: ${(props) => (props.islastblogpage ? "none" : "auto")};
    cursor: ${(props) => (props.islastblogpage ? "default" : "pointer")};
  }
`;

const Pagination = ({
  prevPage,
  nextPage,
  homePage,
  isfirstblogpage,
  islastblogpage,
}) => {
  return (
    <PaginationWrapper>
      <PaginationStyles isfirstblogpage={isfirstblogpage} to={prevPage}>
        Previous page
      </PaginationStyles>
      <PaginationStyles to={homePage}>Home</PaginationStyles>
      <PaginationStyles islastblogpage={islastblogpage} to={nextPage}>
        Next page
      </PaginationStyles>
    </PaginationWrapper>
  );
};

export default Pagination;
