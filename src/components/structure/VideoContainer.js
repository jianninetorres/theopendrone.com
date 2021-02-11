import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import PlayButton from "./PlayButton";
import HeaderH1 from "../structure/HeaderH1";
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

  @media ${(props) => props.theme.breakpoints.desktop2XL} {
    max-width: ${(props) => props.theme.maxWidths.desktop3XL};
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

  a {
    background-color: var(--blue);
    border: none;
    border-radius: var(--border-radius);
    padding: var(--base-size);
    color: var(--white);
    text-decoration: none;

    &:hover {
      transform: scale(1.05);
      transition: transform 0.2s linear;
    }
  }
`;

const VideoContainer = ({ videoSrc, videoSrcMobile }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [video, setVideo] = useState(videoSrcMobile);

  useEffect(() => {
    const viewportSize = window.innerWidth;

    if (viewportSize > 768) {
      setVideo(videoSrc);
    } else {
      setVideo(videoSrcMobile);
    }
  }, [videoSrc, videoSrcMobile]);

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
        <source src={video} type="video/mp4" />
      </video>
      {!isVideoPlaying ? (
        <div id="video-content-container">
          <PlayButton onClick={playVideo} />
          <HeaderH1 colour="white">An open-source drone framework</HeaderH1>
          <Link to="/blog/1">Join the initiative</Link>
        </div>
      ) : (
        ""
      )}
    </VideoContainerStyles>
  );
};

export default VideoContainer;
