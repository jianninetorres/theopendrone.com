import React from "react";
import PlayButton from "./PlayButton";
import styled from "styled-components";

const VideoContainerStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  // temporary
  border: 1px solid black;
  min-height: 500px;
  padding: calc(var(--base-size) * 2) var(--base-size);
  //
  @media ${(props) => props.theme.breakpoints.tabletLandscape} {
    padding: calc(var(--base-size) * 2);
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    min-height: 700px;
    padding: calc(var(--base-size) * 6) calc(var(--base-size) * 4);
  }

  @media ${(props) => props.theme.breakpoints.desktopXXL} {
    max-width: ${(props) => props.theme.maxWidths.desktopXL};
    margin: 0 auto;
  }
`;

const VideoContainer = ({ children }) => {
  return (
    <VideoContainerStyles>
      <PlayButton />
      {children}
    </VideoContainerStyles>
  );
};

export default VideoContainer;
