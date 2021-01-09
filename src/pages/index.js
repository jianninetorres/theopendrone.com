import React from "react";
import Button from "../components/structure/Button";
import styled from "styled-components";
import HeaderH1 from "../components/structure/HeaderH1";
import VideoContainer from "../components/structure/VideoContainer";

const IndexStyles = styled.div`
  padding: var(--base-size) 0;
  @media screen and (min-width: 1024px) {
    padding: calc(var(--base-size) * 6) 0;
  }

  h1 {
    text-align: center;
  }
`;

const Index = () => {
  return (
    <IndexStyles>
      <VideoContainer>
        <HeaderH1>An open-source drone framework</HeaderH1>
        <Button type="button" content="Join the initiative" />
      </VideoContainer>
    </IndexStyles>
  );
};

export default Index;
