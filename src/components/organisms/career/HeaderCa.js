import React from "react";
import Text from "../../atom/Text";
import TextLinks from "../../atom/TextLinks";
import { Link } from "react-scroll";

const HeaderCa = () => {
  return (
    <div className="text-white text-center careerbg py-5">
      <div data-aos="zoom-in-up" data-aos-duration="2000">
        <Text
          className="career-head mb-0 pt-3"
          children="We are Result-Oriented"
        />
        <Text
          className="career-text"
          children="Join our team of exceptional people making the environment a better place to be for everyone."
        />
        <TextLinks
          to="#"
          children={
            <div className="d-flex gap-1 justify-content-center pt-5 my-3">
              <Link to="openpage" smooth={true}>
              <Text className="text-white" children="SEE OUR OPENINGS" />
              </Link >
              <box-icon name="down-arrow-alt" color="#ffffff" animation="fade-down"></box-icon>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default HeaderCa;
