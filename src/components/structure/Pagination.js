import React from "react";
import PaginationWrapper from "./PaginationWrapper";
import styled from "styled-components";
import { Link } from "gatsby";

const PaginationElement = styled((props) => <Link {...props} />)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-decoration: none;
  font-weight: 400;
  margin: 0 2rem;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const Pagination = ({ prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast} homePage={homePage}>
      <PaginationElement to={prevPage}>Previous page</PaginationElement>
      <PaginationElement to={homePage}>Home</PaginationElement>
      <PaginationElement to={nextPage}>Next page</PaginationElement>
    </PaginationWrapper>
  );
};
