import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  background-color: ${(props) => props.bgColor || `var(--blue)`};
  border: none;
  border-radius: var(--border-radius);
  padding: var(--base-size);
  color: ${(props) => props.textColor || `var(--white)`};
`;

const Button = ({ bgColor, content, type, textColor }) => {
  return (
    <ButtonStyles type={type} bgColor={bgColor} textColor={textColor}>
      {content}
    </ButtonStyles>
  );
};

export default Button;
