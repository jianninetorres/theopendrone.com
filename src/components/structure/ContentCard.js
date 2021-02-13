import React from "react";
import { Link } from "gatsby";
import ContentP from "./ContentP";
import H3 from "./H3";
import styled from "styled-components";

const ContentCardStyles = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1000px;

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 0;
  }

  @media ${(props) => props.theme.breakpoints.tabletLandscape} {
    flex-direction: row;
    margin: 0 auto;
  }

  @supports (display: grid) {
  }

  img {
    width: 100%;
    height: 100%;

    @media ${(props) => props.theme.breakpoints.tabletPortrait} {
      margin-right: calc(var(--base-size) * 2);
    }

    @media ${(props) => props.theme.breakpoints.tabletLandscape} {
      max-width: 250px;
    }
  }

  p {
    color: ${(props) => props.theme.colors.dark3};
  }

  .post-excerpt {
    color: ${(props) => props.theme.colors.dark2};
    margin-bottom: var(--base-size);
  }

  a {
    color: ${(props) => props.theme.colors.dark2};
    &:hover {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;

const ContentCard = ({ title, key, date, excerpt, slug, featureImage }) => {
  return (
    <ContentCardStyles key={key}>
      <img src={featureImage} />
      <div className="post-content">
        <ContentP>{date}</ContentP>
        <H3>{title}</H3>
        <p className="post-excerpt">{excerpt}</p>
        <Link to={`/blog/${slug}`}>Read more</Link>
      </div>
    </ContentCardStyles>
  );
};

export default ContentCard;
