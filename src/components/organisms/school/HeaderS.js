import React from "react";
import Image from "../../atom/Image";
import img from "../../../images/Group 27.png";
import Text from "../../atom/Text";

const HeaderS = () => {
  return (
    <div className="row py-3 py-lg-5 ps-3 ps-lg-5 colorbg">
      <div className="col-sm-12 col-md-12 col-lg-6 p-0" data-aos="fade-down" data-aos-duration="2000">
        <Text className="colorlight m-0 fs-5" children="Welcome to ZLGA" />
        <h1 className="colorgreen school-head"><span className="colordark">College of </span>Environmental Science & Technology.</h1>
        <Text className="colorlight school-text" children="Our College of Environmental Science & Technology  has been designed to help students launch a successful career in different aspects of environmental management at different levels. " />
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 p-0" data-aos="flip-up" data-aos-duration="2000">
        <Image className="w-100" src={img} />
      </div>
    </div>
  );
};

export default HeaderS;
