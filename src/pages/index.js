import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import FullPanel from "../components/structure/FullPanel";
import HalfPanel from "../components/structure/HalfPanel";
import Section from "../components/structure/Section";
import VideoContainer from "../components/structure/VideoContainer";
import Image from "../components/structure/Image";
import H3 from "../components/structure/H3";
import ContentP from "../components/structure/ContentP";
import Article from "../components/structure/Article";
import Seo from "../components/structure/Seo";
import styled from "styled-components";

import droneRender1 from "../assets/images/blended-wing-design-v3-prototype.png";
import MakingOf from "../assets/videos/open-drone-making.mp4";
import MakingOfMobile from "../assets/videos/open-drone-making-mobile.mp4";

const IndexStyles = styled.div`
  padding: 0 0 var(--base-size);
  @media ${(props) => props.theme.breakpoints.tabletLandscape} {
    padding: calc(var(--base-size) * 6) 0;
  }

  h1 {
    text-align: center;
  }

  #drone-render-1 {
    @media ${(props) => props.theme.breakpoints.tabletLandscape} {
      transform: scale(1.5);
    }
  }
`;

const Index = () => {
  return (
    <IndexStyles>
      <Seo />
      <VideoContainer
        videoSrc={MakingOf}
        videoSrcMobile={MakingOfMobile}
        poster={droneRender1}
      />
      <FullPanel h2Title="Open Drone">
        is a service that makes drone delivery accessible
      </FullPanel>
      <Article bgColor="#2F80ED" flexDirection="column" alignItems="center">
        <FontAwesomeIcon
          icon={faHandHoldingMedical}
          size="4x"
          color="white"
          margin-bottom="16px"
        />
        <ContentP
          fontSize="1.25rem"
          maxWidth="900px"
          textAlign="center"
          textColor="white"
          marginTop="16px"
          marginBottom="0"
        >
          To repair supply chains in these turbulent times, we are providing a
          safe, contactless, and fast method to deliver essential supplies to
          those who need them. The purpose of this project is to create a
          service where drone delivery can be brought to anyone, anywhere. To
          ensure we're having the greatest impact possible, we're working to
          provide rapid delivery to hospitals in rural areas.
        </ContentP>
      </Article>
      <Section>
        <HalfPanel placeItems="center">
          <Image
            imgSrc={droneRender1}
            id="drone-render-1"
            alt="Render of drone"
          />
          <div>
            <H3>What sets us Apart?</H3>
            <ContentP maxWidth="600px">
              We’re building a drone system that does not require any
              infrastructure, allowing us to implement this in remote areas,
              bringing down delivery times from hours to minutes.
            </ContentP>
            <ContentP maxWidth="600px">
              Drone delivery is something that has been worked on for a long
              time, but governments have only recently allowed drone systems to
              operate commercially. What sets us apart is that we're building a
              service for those who are not large enough to do business with the
              giants in the space.
            </ContentP>
            <ContentP maxWidth="600px">
              Instead of building warehouses and large centers, we're focused on
              only bringing what is necessary - the drone itself, so that anyone
              can use delivery, even those in the most remote areas.
            </ContentP>
          </div>
        </HalfPanel>
      </Section>
    </IndexStyles>
  );
};

export default Index;
