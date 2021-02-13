import React from "react";
import styled from "styled-components";

const ContentPStyles = styled.p`
  width: 100%;
  color: ${(props) => props.textColor || props.theme.colors.black};
  max-width: ${(props) => props.maxWidth || ""};
  font-size: 1rem;
  margin: ${(props) => props.margins || ""};
  margin-top: ${(props) => props.marginTop || ""};
  margin-bottom: ${(props) => props.marginBottom || props.theme.spacings.base};
  text-align: ${(props) => props.textAlign || "left"};

  @media ${(props) => props.theme.breakpoints.tabletPortrait} {
    font-size: ${(props) => props.fontSize || "1.25rem"};
    margin-bottom: ${(props) =>
      props.marginBottomTabletPortrait || props.theme.spacings.base};
  }
`;

const ContentP = ({
  children,
  maxWidth,
  fontSize,
  margins,
  marginTop,
  marginBottom,
  marginBottomTabletPortrait,
  textAlign,
  textColor,
}) => {
  return (
    <ContentPStyles
      maxWidth={maxWidth}
      fontSize={fontSize}
      margins={margins}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginBottomTabletPortrait={marginBottomTabletPortrait}
      textAlign={textAlign}
      textColor={textColor}
    >
      {children}
    </ContentPStyles>
  );
};

export default ContentP;
