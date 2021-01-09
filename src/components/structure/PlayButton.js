import React from "react";
import Button from "./Button";
import arrow from "../../assets/images/play-arrow.svg";

const PlayButton = () => {
  return (
    <Button borderRadius={"50%"} width={"132px"} height={"132px"}>
      <img src={arrow} alt="Press play" />
    </Button>
  );
};

export default PlayButton;
