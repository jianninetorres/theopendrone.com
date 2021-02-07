import React from "react";
import Button from "../components/structure/Button";
import HeaderH1 from "../components/structure/HeaderH1";
import FullPanel from "../components/structure/FullPanel";
import HalfPanel from "../components/structure/HalfPanel";
import Section from "../components/structure/Section";
import VideoContainer from "../components/structure/VideoContainer";
import Image from "../components/structure/Image";
import H3 from "../components/structure/H3";
import ContentP from "../components/structure/ContentP";
import Article from "../components/structure/Article";
import styled from "styled-components";

import droneRender1 from "../assets/images/drone-render-1a.jpg";
import droneRender2 from "../assets/images/drone-render-2a.jpg";
import MakingOf from "../assets/videos/open-drone-making.mp4";

const IndexStyles = styled.div`
  padding: 0 0 var(--base-size);
  @media ${(props) => props.theme.breakpoints.tabletLandscape} {
    padding: calc(var(--base-size) * 5) 0;
  }

  h1 {
    text-align: center;
  }
`;

const Index = () => {
  return (
    <IndexStyles>
      <VideoContainer videoSrc={MakingOf} poster={droneRender1} />
      <Article>
        <FullPanel h2Title="Open Drone">
          is an open-source framework to provide makers around the world with
          the resources to create their own delivery drones to safely provide
          essential supplies to those in need.
        </FullPanel>
      </Article>
      <Section>
        <HalfPanel placeItems="center">
          <Image imgSrc={droneRender1} />
          <div>
            <H3>A non-profit platform</H3>
            <ContentP maxWidth="600px">
              OpenDrone aims to transform the way the world delivers essential
              supplies. Through using an open-source design, this platform
              enables startups and makers all across the world to further
              develop and individualize the product to better suit local needs.
            </ContentP>
          </div>
        </HalfPanel>
      </Section>
      <Section>
        <HalfPanel placeItems="center">
          <div>
            <H3>Open-source drone template</H3>
            <ContentP maxWidth="600px">
              OpenDrone provides a working, open-source drone template that any
              maker with a 3D printer and basic electronics can make. During the
              pandemic, supply chains have suffered from delays, inefficient
              scheduling, and a death of available transport; drones provide a
              safe, contactless, and quick method of delivering essential
              supplies to those who need them.
            </ContentP>
          </div>
          <Image imgSrc={droneRender2} orderMobile="-1" orderTablet="1" />
        </HalfPanel>
      </Section>
    </IndexStyles>
  );
};

export default Index;
