import React from "react";
import Text from "../atom/Text";
import Image from "../atom/Image";
import Button from "../atom/Button";
import TextLinks from "../atom/TextLinks";
import techpic1 from "../../images/Rectangle 6.png";
import techpic2 from "../../images/Rectangle 6 (1).png";

const Tech = () => {
  return (
    <div className="px-3 py-3 p-lg-5 ">
      <h2 className="text-center tech-head1" data-aos="zoom-in-up" data-aos-duration="2000">ZLGA TECH</h2>
      <Text
        className="text-center tech-head2" data-aos="zoom-in-up" data-aos-duration="2000"
        children="The ZLGA School of Environmental Technology offers a wide range of courses for people and all our courses are full accredited and accepted worldwide."
      />
      <div className="d-flex justify-content-center tech-box-container" >
        <div className="tech-box" data-aos="zoom-out" data-aos-duration="2000">
          <div className="w-100">
            <Image className="w-100" src={techpic1} />
          </div>
          <div>
            <Text
              className="tech-text1"
              children="Basic Sciences and Special Entry Prepartory Programme (SEPP)"
            />
            <Text
              className="tech-text2"
              children="A remedy to deficiencies in one or two O/L requirements for a course of study."
            />
            <TextLinks
              className="w-100 d-inline-flex justify-content-center"
              children={
                <Button className="btn btn-tech px-5 py-2" children="Learn more" />
              }
            />
          </div>
        </div>
        <div className="tech-box" data-aos="zoom-in" data-aos-duration="2000">
          <div className="w-100">
            <Image className="w-100" src={techpic2} />
          </div>
          <div>
            <Text
              className="tech-text1"
              children="Department of Waste Management Technology"
            />
            <Text
              className="tech-text2"
              children="An holistic comprehension of solid and liquid waste management."
            />
            <TextLinks
              className="w-100 d-inline-flex justify-content-center"
              children={
                <Button className="btn btn-tech px-5 py-2" children="Learn more" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
