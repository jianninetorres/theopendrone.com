import * as React from "react";
import { Link } from "gatsby";
import Section from "../components/structure/Section";
import styled from "styled-components";

const NotFoundStyles = styled.main`
  padding: calc(var(--base-size) * 6) 0;

  h2 {
    margin-bottom: calc(var(--base-size) * 2);
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundStyles>
      <Section>
        <h2>Sorry, this page doesn't exist 😓</h2>
        <Link to="/">Go back to the home page</Link>
      </Section>
    </NotFoundStyles>
  );
};

export default NotFoundPage;
