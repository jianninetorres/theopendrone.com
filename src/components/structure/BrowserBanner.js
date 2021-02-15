import React from "react";

import styled from "styled-components";

const BrowserBannerStyles = styled.div`
  @media screen\0 {
    // IE
    display: block;
  }

  display: none;
  background-color: #cc4e00;
  color: #fff;
  text-align: center;
  padding: 16px;
  width: 100%;

  p a {
    text-decoration: underline;
  }
`;

const BrowserBanner = () => {
  return (
    <BrowserBannerStyles>
      <p>
        Your browser is out of date. Use{" "}
        <a href="https://www.google.com/chrome/">Google Chrome</a> or{" "}
        <a href="https://www.mozilla.org/">Firefox</a> to get the best
        experience.
      </p>
    </BrowserBannerStyles>
  );
};

export default BrowserBanner;
