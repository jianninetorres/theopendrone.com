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
  @media screen and (min-width: 1024px) {
    padding: calc(var(--base-size) * 2);
  }

  @media screen and (min-width: 1200px) {
    min-height: 700px;
    padding: calc(var(--base-size) * 6) calc(var(--base-size) * 4);
  }

  @media screen and (min-width: 1920px) {
    max-width: var(--desktop);
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
