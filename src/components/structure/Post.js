import React from "react";
import { backToPreviousPage } from "../../helpers/utilities";
import styled from "styled-components";
import Article from "./Article";
import Button from "./Button";

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
  }
`;

const backToBlog = () => {
  backToPreviousPage();
};

const Post = ({ children }) => {
  return (
    <PostStyles>
      <Article flexDirection="column">
        {children}
        <Button onClick={backToBlog}>Back to blog</Button>
      </Article>
    </PostStyles>
  );
};

export default Post;
