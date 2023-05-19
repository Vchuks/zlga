import React from "react";
import ReactPlayer from "react-player";
import vid from '../../images/vid.mp4'

const Video = () => {
  return (
    <div className="w-100 d-flex justify-content-center p-3 py-lg-5">
      <ReactPlayer
        url={vid}
        width="90%"
        height="100%"
        controls
      />
    </div>
  );
};

export default Video;
