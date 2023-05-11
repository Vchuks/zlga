import React from 'react'
import Text from '../../atom/Text'
import Image from '../../atom/Image';
import Button from "../../atom/Button";
import TextLinks from "../../atom/TextLinks";
import techpic1 from "../../../images/Rectangle 6.png";
import techpic2 from "../../../images/Rectangle 6 (1).png";
import techpic3 from "../../../images/joinimg.png";
import techpic4 from "../../../images/joinimg2.png";

const Join = () => {
  return (
    <div className='p-3 p-lg-5'>
      <Text className="colordark fs-4 pt-5 text-center join-head" children="Join any of our Programmes" data-aos="zoom-out" data-aos-duration="2000"/>
      <Text className="colorlight text-center join-text" children="The ZLGA School of Environmental Technology offers a wide range of courses for people and all our courses are fully accredited and accepted worldwide." data-aos="zoom-in-up" data-aos-duration="2000"/>

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
            to="/basic"
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
            to="/waste"
              className="w-100 d-inline-flex justify-content-center"
              children={
                <Button className="btn btn-tech px-5 py-2" children="Learn more" />
              }
            />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center tech-box-container mb-5 pt-0" >
        <div className="tech-box" data-aos="zoom-out" data-aos-duration="2000">
          <div className="w-100">
            <Image className="w-100" src={techpic3} />
          </div>
          <div>
            <Text
              className="tech-text1"
              children="Department of Water Resources Management Technology"
            />
            <Text
              className="tech-text2"
              children="Harness the diverse impacts of water resources on the environment"
            />
            <TextLinks
            to="/water"
              className="w-100 d-inline-flex justify-content-center"
              children={
                <Button className="btn btn-tech px-5 py-2" children="Learn more" />
              }
            />
          </div>
        </div>
        <div className="tech-box" data-aos="zoom-in" data-aos-duration="2000">
          <div className="w-100">
            <Image className="w-100" src={techpic4} />
          </div>
          <div>
            <Text
              className="tech-text1"
              children="Department of Coastal/Marine Geography & Ecology Technology"
            />
            <Text
              className="tech-text2"
              children="Understand the effect of coastal/marine geography on ecology."
            />
            <TextLinks
            to="/coast"
              className="w-100 d-inline-flex justify-content-center"
              children={
                <Button className="btn btn-tech px-5 py-2" children="Learn more" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join
