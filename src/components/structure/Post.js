import React from "react";
import styled from "styled-components";
import Article from "./Article";

const PostStyles = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  @media ${(props) => props.theme.breakpoints.tabletLandscape} {
    padding-top: 100px;
  }

  p {
    margin-bottom: calc(var(--base-size) * 2);
    font-size: calc(var(--base-size) * 1.125);
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
