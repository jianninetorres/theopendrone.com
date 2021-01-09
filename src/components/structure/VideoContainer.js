import React from "react";
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
  //
  @media screen and (min-width: 1200px) {
    max-width: var(--desktop);
    margin: 0 auto;
  }
`;

const VideoContainer = ({ children }) => {
  return <VideoContainerStyles>{children}</VideoContainerStyles>;
};

export default VideoContainer;
