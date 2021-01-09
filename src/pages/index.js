import React from "react";
import styled from "styled-components";
import HeaderH1 from "../components/structure/HeaderH1";
import VideoContainer from "../components/structure/VideoContainer";

const IndexStyles = styled.div`
  padding: var(--base-size) 0;
  @media screen and (min-width: 1024px) {
    padding: calc(var(--base-size) * 6) 0;
  }
`;

const Index = () => {
  return (
    <IndexStyles>
      <VideoContainer>
        <div>Video</div>
      </VideoContainer>
      <HeaderH1>An open-source drone framework</HeaderH1>
    </IndexStyles>
  );
};

export default Index;
