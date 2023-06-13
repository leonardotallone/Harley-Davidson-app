import React from "react";
import video from "../assets/cover-01.mp4";

const VideoBackGround = () => {
  return (
    <video className="responsive-video" loop autoPlay muted>
      <source src={video} type="video/mp4"></source>
    </video>
  );
};
export default VideoBackGround;
