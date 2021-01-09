import React from "react";
import Button from "./Button";
import arrow from "../../assets/images/play-arrow.svg";

const PlayButton = () => {
  return (
    <Button
      borderRadius={"50%"}
      width={"100px"}
      height={"100px"}
      widthL={"132px"}
      heightL={"132px"}
    >
      <img src={arrow} alt="Press play" />
    </Button>
  );
};

export default PlayButton;
