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
      props.isfirstBlogPage
        ? props.theme.colors.dark3
        : props.theme.colors.dark1};
    pointer-events: ${(props) => (props.isfirstBlogPage ? "none" : "auto")};
    cursor: ${(props) => (props.isfirstBlogPage ? "default" : "pointer")};
  }

  // Next page
  &:nth-child(3) {
    color: ${(props) =>
      props.islastBlogPage
        ? props.theme.colors.dark3
        : props.theme.colors.dark1};
    pointer-events: ${(props) => (props.islastBlogPage ? "none" : "auto")};
    cursor: ${(props) => (props.islastBlogPage ? "default" : "pointer")};
  }
`;

const Pagination = ({
  prevPage,
  nextPage,
  homePage,
  isfirstBlogPage,
  islastBlogPage,
}) => {
  return (
    <PaginationWrapper>
      <PaginationStyles isfirstBlogPage={isfirstBlogPage} to={prevPage}>
        Previous page
      </PaginationStyles>
      <PaginationStyles to={homePage}>Home</PaginationStyles>
      <PaginationStyles islastBlogPage={islastBlogPage} to={nextPage}>
        Next page
      </PaginationStyles>
    </PaginationWrapper>
  );
};

export default Pagination;
