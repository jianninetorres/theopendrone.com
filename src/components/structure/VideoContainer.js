import React, { useState } from "react";
import PlayButton from "./PlayButton";
import HeaderH1 from "../structure/HeaderH1";
import Button from "../structure/Button";
import styled from "styled-components";

const VideoContainerStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${(props) => props.theme.breakpoints.tabletLandscape} {
    justify-content: flex-end;
  }

  @media ${(props) => props.theme.breakpoints.desktopXXL} {
    max-width: ${(props) => props.theme.maxWidths.desktopXL};
    margin: 0 auto;
  }

  div#video-content-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${(props) => props.theme.breakpoints.tabletLandscape} {
      padding-bottom: calc(var(--base-size) * 2);
    }
  }

  video {
    width: 100%;
    height: 100%;
    min-height: 400px;
    background-color: var(--black2);
  }
`;

const VideoContainer = ({ videoSrc }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    const video = document.getElementById("video");
    if (isVideoPlaying) {
      video.pause();
      setIsVideoPlaying(false);
    } else {
      video.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <VideoContainerStyles onClick={playVideo}>
      <video playsInline loop muted preload="auto" id="video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      {!isVideoPlaying ? (
        <div id="video-content-container">
          <PlayButton onClick={playVideo} />
          <HeaderH1 colour="white">An open-source drone framework</HeaderH1>
          <Button type="button" content="Join the initiative" />
        </div>
      ) : (
        ""
      )}
    </VideoContainerStyles>
  );
};

export default VideoContainer;
