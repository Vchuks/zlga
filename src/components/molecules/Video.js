import React from "react";
// import vid from "../../images/vid.mp4"

import ReactPlayer from 'react-player';


const Video = () => {
  // const src = ""
  
  // const handlePlay = () => {
  //   const videocard = document.querySelector("#video1");
  //   const videoWrapper = document.querySelector(".video");
  //   const wrapper = document.querySelector(".wrapper");
  //   const close =document.querySelector('.ex');
  //   const playimg =document.querySelector('.playimg');
  //   playimg.style.display="none"
  //   videocard.play();
  //   videoWrapper.style.display = "block";
  //   close.style.display="block";
  //   wrapper.classList.add('wrapper2') 
  //   wrapper.classList.remove('wrapper') 
  // };
  

  
  // const handleClose = () => {
  //   const videoWrapper = document.querySelector(".video");
  //   const wrapper = document.querySelector(".wrapper2");
  //   const videocard = document.querySelector("#video1");
  //   const playimg =document.querySelector('.playimg');
  //   const close =document.querySelector('.ex');
  //   playimg.style.display="block"
  //   close.style.display="none"
  //   videocard.pause();
  //   videocard.currentTime = 0;
  //   videoWrapper.style.display = "none";
  //   wrapper.classList.add('wrapper')
  //   wrapper.classList.remove('wrapper2')
  // };

  return (
    <div className="w-100 d-flex justify-content-center">
<ReactPlayer url="../../images/vid.mp4" width="100%" height="100%" controls />
    </div>
  );
};

export default Video;
