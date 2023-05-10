import React from "react";
import playimg from "../../images/play.png";

import Image from "../atom/Image";

const Video = () => {
  const src = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  
  const handlePlay = () => {
    const videocard = document.querySelector("#video1");
    const videoWrapper = document.querySelector(".video");
    const wrapper = document.querySelector(".wrapper");
    const close =document.querySelector('.ex');
    const playimg =document.querySelector('.playimg');
    playimg.style.display="none"
    videocard.play();
    videoWrapper.style.display = "block";
    close.style.display="block";
    wrapper.classList.add('wrapper2') 
    wrapper.classList.remove('wrapper') 
  };
  

  
  const handleClose = () => {
    const videoWrapper = document.querySelector(".video");
    const wrapper = document.querySelector(".wrapper2");
    const videocard = document.querySelector("#video1");
    const playimg =document.querySelector('.playimg');
    const close =document.querySelector('.ex');
    playimg.style.display="block"
    close.style.display="none"
    videocard.pause();
    videocard.currentTime = 0;
    videoWrapper.style.display = "none";
    wrapper.classList.add('wrapper')
    wrapper.classList.remove('wrapper2')
  };

  return (
    <div className="wrapper">
      <button
        className="ex fs-3 btn p-lg-5 text-black"
        onClick={handleClose}
      >
        x
      </button>
      <div className="playimg" id="play" onClick={handlePlay}>
        <Image src={playimg} alt="" />
      </div>
      <div className="video">
        <video width="100%" height="100%" id="video1" className="vid" controls>
          <source
            src={src}
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
      </div>
    </div>
  );
};

export default Video;
