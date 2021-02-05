import React from "react";
import styled from "styled-components";

const ImageStylesContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  order: ${(props) => props.orderMobile || "0"};

  @media ${(props) => props.theme.breakpoints.tabletPortrait} {
    order: ${(props) => props.orderTablet || "0"};
  }
`;

const Image = ({ imgSrc, orderMobile, orderTablet }) => {
  return (
    <ImageStylesContainer orderMobile={orderMobile} orderTablet={orderTablet}>
      <img src={imgSrc} />
    </ImageStylesContainer>
  );
};

export default Image;
