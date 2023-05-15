import React, { useState } from "react";
import Image from "../../atom/Image";
import icon1 from "../../../images/our partners (2).png";
import Text from "../../atom/Text";

const EnvCard = ({id, pic, text1, text2, text3 }) => {
  const [showMore, setShowMore] = useState(false);
  const [idd] = useState(0);
  const handleMore = () => {
    setShowMore(!showMore);
  };
  

  return (
    <>
    {id % 2 === idd ?

      <div className="row bg-white p-3 p-lg-5 flex-row-reverse align-items-center gap-4 gap-lg-0">
        <div
          className="col-sm-12 col-md-12 col-lg-6"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <Image className="w-100" src={pic} />
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-6"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div>
            <Image className="whoicon" src={icon1} />
          </div>
          <Text className="colorlight" children={text1} />
          <Text className="colordark fw-bolder fs-4" children={text2} />
          <Text
            className="colorlight whocomment "
            children={showMore ? text3 : `${text3.substring(0, 250)} ...`}
          />

          <p className="see" onClick={handleMore}>
            {showMore ? "Show less" : "Show more"}
          </p>
        </div>
      </div> : 
      <div className="row bg-white p-3 p-lg-5 align-items-center gap-4 gap-lg-0">
      <div
        className="col-sm-12 col-md-12 col-lg-6"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <Image className="w-100" src={pic} />
      </div>
      <div
        className="col-sm-12 col-md-12 col-lg-6"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <div>
          <Image className="whoicon" src={icon1} />
        </div>
        <Text className="colorlight" children={text1} />
        <Text className="colordark fw-bolder fs-4" children={text2} />
        <Text
          className="colorlight whocomment "
          children={showMore ? text3 : `${text3.substring(0, 250)} ...`}
        />

        <p className="see" onClick={handleMore}>
          {showMore ? "Show less" : "Show more"}
        </p>
      </div>
    </div>
    }
    </>
  );
};

export default EnvCard;
