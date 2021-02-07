import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  background-color: ${(props) => props.bgColor || `var(--blue)`};
  border: none;
  border-radius: ${(props) => props.borderRadius || `var(--border-radius)`};
  padding: var(--base-size);
  color: ${(props) => props.textColor || `var(--white)`};
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};

  @media ${(props) => props.theme.breakpoints.desktop} {
    width: ${(props) => props.widthL || ""};
    height: ${(props) => props.heightL || ""};
  }
`;

const Button = ({
  bgColor,
  borderRadius,
  children,
  content,
  type,
  textColor,
  width,
  widthL,
  height,
  heightL,
  onClick,
}) => {
  return (
    <ButtonStyles
      type={type || `button`}
      borderRadius={borderRadius}
      bgColor={bgColor}
      textColor={textColor}
      width={width}
      height={height}
      widthL={widthL}
      heightL={heightL}
      onClick={onClick}
    >
      {children ? children : content}
    </ButtonStyles>
  );
};

export default Button;
