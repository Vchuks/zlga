import React from "react";
import audioimg from "../../images/Rectangle 13.png";
import Image from "../atom/Image";
import Text from "../atom/Text";
import playimg from "../../images/play.png";

const Audio = () => {
  return (
    <div className="p-3 p-lg-5">
        
    <div className="row p-1 align-items-center gap-4 audio">
      <div className="col-sm-12 col-md-12 col-lg-2 p-0">
        <Image className="audioimg" src={audioimg} />
      </div>
      <div className="col-sm-12 col-md-12 col-lg-9 p-2 p-lg-0">
        <div>
          <Text className=" text-white fs-5 m-0" children="Join and Enjoy our Online Radio" />
          <Text className="radio-text m-0 pb-3" children="Kunden Online Radio" />
          <audio controls autoplay>
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div className="d-flex justify-content-center pt-2">
            <Image src={playimg} className="audioplay"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Audio;