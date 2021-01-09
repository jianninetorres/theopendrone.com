import React from "react";
import Button from "../components/structure/Button";
import HeaderH1 from "../components/structure/HeaderH1";
import FullPanel from "../components/structure/FullPanel";
import VideoContainer from "../components/structure/VideoContainer";
import styled from "styled-components";

const IndexStyles = styled.div`
  padding: 0 0 var(--base-size);
  @media screen and (min-width: 1024px) {
    padding: calc(var(--base-size) * 5) 0;
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
      <FullPanel h2Title="Open Drone">
        is an open-source framework to provide makers around the world with the
        resources to create their own delivery drones to safely provide
        essential supplies to those in need.
      </FullPanel>
    </IndexStyles>
  );
};

export default Index;
