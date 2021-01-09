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
`;

const Button = ({
  bgColor,
  borderRadius,
  children,
  content,
  type,
  textColor,
  width,
  height,
}) => {
  return (
    <ButtonStyles
      type={type}
      borderRadius={borderRadius}
      bgColor={bgColor}
      textColor={textColor}
      width={width}
      height={height}
    >
      {children ? children : content}
    </ButtonStyles>
  );
};

export default Button;
