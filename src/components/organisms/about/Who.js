import React, { useState } from "react";
import Image from "../../atom/Image";
import whoimg from "../../../images/Rectangle 3.png";
import whoimg2 from "../../../images/who2.png";
import whoimg3 from "../../../images/who3.png";
import icon1 from "../../../images/our partners.png";
import icon2 from "../../../images/icon2.png";
import icon3 from "../../../images/icon3.png";
import Text from "../../atom/Text";


const Who = () => {
  const text1 =
    "ZL Global Alliance Limited (ZLGA) is Nigeria's Leading provider of integrated environment solutions. The ZLGA brand is at the forefront of today's emerging technology, offering a diverse range of professional expertise supported by economically and environmentally sound principles. ZLGA is immersed in technical partnerships with Zoomlion (Ghana) group of companies, Ayudate Holdings (Budapest, Hungary) and several other world class international and local brand names. ZLGA is а solution-oriented company committed to providing comprehensive solutions to fulfilling zero waste in the environment. We collect, transport, treat, recycle, recover and dispose of residential, commercial, medical and industrial waste. Our services are tailored to meet various waste management strategies and we are passionate about a safe and healthy environment. ";

    const text2=`She holds a first Degree (1992) from Nigeria and an MBA in International Business Development from the United Kingdom (2006). She has extensive work experience that spans over twenty four (24, years at Barclays Bank of the United Kingdom, Citibank of Nigeria, Stanbic IBTC Bank, UBA, Ecobank, ETB, Access Bank and MasterCard Worldwide. She won the 2005 Eagle Award at Barclays Bank UK in Nigeria, she anchored the Retail Banking Business of UBA and Ecobank in Northern Nigeria. She also established and grew the Premier Banking Model, targeted at High Networth Individuals at Equitorial Trust Bank. She then proceeded to Access Bank PLC as the National Group Head of Retail Sales & Electronic Banking. From Access Bank, she was subsequently head-hunted by MasterCard Worldwide to assume the position of Vice President (Prepaid Products Management) for Sub Saharan Africa in line with World Bank reports on Africa as a major focus on Retail & Electronic Business for Emerging Markets. She has functioned for fourteen consecutive years at Senior Management and leadership levels, rising to the position of Assistant General Manager in the Banking Industry. She is a fellow of the Chartered Institute of Commerce of Nigeria (CICN).
    As a business development consultant, she has worked with several international institution to drive business growth and restructuring initiatives. `
    const text3="Since the inception of the Company till this very day, its people have always been its main driver of growth, without whom it would have been impossible to guarantee quality of service to its customers. Relying on the strongest team of certified finance specialist and technical administrators, we are right there for you, ready to provide you with solutions to the most specialized integrated waste management issues."

  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const handleMore = () => {
    setShowMore(!showMore);
  };
  const handleMore1 = () => {
    setShowMore1(!showMore1);
  };
  const handleMore2 = () => {
    setShowMore2(!showMore2);
  };

  return (
    <>
      <div className="row bg-white p-3 p-lg-5 align-items-center gap-4 gap-lg-0">
        <div
          className="col-sm-12 col-md-12 col-lg-6"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <Image className="w-100" src={whoimg} />
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-6"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div>
            <Image className="whoicon" src={icon1} />
          </div>
          <Text className="colorlight" children="OUR HISTORY" />
          <Text className="colordark fw-bolder fs-4" children="Who we are" />
          <Text
            className="colorlight whocomment "
            children={showMore ? text1 : `${text1.substring(0, 250)} ...`}
          />

          <p className="see" onClick={handleMore}>
            {showMore ? "Show less" : "Show more"}
          </p>
        </div>
      </div>
      <div className="row bg-white p-3 p-lg-5 align-items-center flex-row-reverse gap-4 gap-lg-0">
        <div
          className="col-sm-12 col-md-12 col-lg-5 d-flex justify-content-end"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <Image className="w-100" src={whoimg2} />
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-7"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div>
            <Image className="whoicon" src={icon2} />
          </div>
          <Text className="colorlight" children="OUR CEO" />
          <Text
            className="colordark fw-bolder fs-4"
            children="Dr. Mrs Abiola Bashorun FCIN"
          />
          <Text
            className="colorlight whocomment "
            children={showMore1 ? text2 : `${text2.substring(0, 250)} ...`}
          />

          <p className="see" onClick={handleMore1}>
            {showMore1 ? "Show less" : "Show more"}
          </p>
        </div>
      </div>
      <div className="row bg-white p-3 p-lg-5 align-items-center gap-4 gap-lg-0">
        <div
          className="col-sm-12 col-md-12 col-lg-6"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <Image className="w-100" src={whoimg3} />
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-6"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div>
            <Image className="whoicon" src={icon3} />
          </div>
          <Text className="colorlight" children="OUR BENEFICIARIES" />
          <Text
            className="colordark fw-bolder fs-4"
            children="Empowering Community Development"
          />
          <Text
            className="colorlight whocomment "
            children={showMore2 ? text3 : `${text3.substring(0, 250)} ...`}
          />

          <p className="see" onClick={handleMore2}>
            {showMore2 ? "Show less" : "Show more"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Who;
