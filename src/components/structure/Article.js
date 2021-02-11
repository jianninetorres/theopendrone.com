import React from "react";
import styled from "styled-components";

const ArticleStyles = styled.article`
  background-color: ${(props) => props.bgColor || props.theme.colors.white};
  padding: calc(var(--base-size) * 2);
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
`;

const Article = ({
  children,
  bgColor,
  flexDirection,
  justifyContent,
  alignItems,
}) => {
  return (
    <ArticleStyles
      bgColor={bgColor}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </ArticleStyles>
  );
};

export default Article;
