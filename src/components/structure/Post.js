import React from "react";
import styled from "styled-components";
import Article from "./Article";

const PostStyles = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  @media ${(props) => props.theme.breakpoints.tabletLandscape} {
    padding-top: 100px;
  }

  h1 {
    margin: calc(var(--base-size) * 2) 0 calc(var(--base-size) * 1 / 2);
  }

  h3 {
    margin-top: calc(var(--base-size) * 2);
    margin-bottom: calc(var(--base-size) * 1.125);
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    margin-bottom: calc(var(--base-size) * 2);
    font-size: calc(var(--base-size) * 1.125);
  }

  div.screenshots-update-container {
    display: grid;
    grid-gap: var(--base-size);
    @media ${(props) => props.theme.breakpoints.tabletPortrait} {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  img.update {
    width: 100%;
    height: 100%;
    @media ${(props) => props.theme.breakpoints.tabletPortrait} {
      max-width: 300px;
      max-height: 225px;
    }
  }

  .post-pagination-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media ${(props) => props.theme.breakpoints.tabletLandscape} {
      flex-direction: row;
      justify-content: space-between;
    }

    a {
      display: inline-flex;
      color: ${(props) => props.theme.colors.black};
      text-decoration: none;
      width: fit-content;
      max-width: 200px;
      margin: var(--base-size) 0;
      &:hover {
        color: ${(props) => props.theme.colors.blue};
        > svg {
          color: ${(props) => props.theme.colors.blue};
        }
      }

      &.newer {
        @media ${(props) => props.theme.breakpoints.tabletLandscape} {
          place-self: flex-start;
        }
      }

      &.older {
        @media ${(props) => props.theme.breakpoints.tabletLandscape} {
          place-self: flex-end;
        }
      }
    }
  }
`;

const Post = ({ children }) => {
  return (
    <PostStyles>
      <Article flexDirection="column">{children}</Article>
    </PostStyles>
  );
};

export default Post;
