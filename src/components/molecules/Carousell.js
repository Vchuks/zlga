import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sayimg from "../../images/image rectangles.png";
import sayimg2 from "../../images/image rectangles (1).png";
import sayimg3 from "../../images/image rectangles (2).png";
import sayimg4 from "../../images/image rectangles (3).png";
import sayimg5 from "../../images/image rectangles (4).png";
import Image from "../atom/Image";
import Text from "../atom/Text";
import Button from "../atom/Button"
import TextLinks from "../atom/TextLinks";

const Carousell = () => {

    const list = [
        {
          id: "01",
          img: sayimg,
          head: "Material Recovery",
          comment:
            "Our recycling services include collection of recyclable materials from commercial, industrial and residential customers for which we charge collection and processing fees.",
        },
        {
          id: "02",
          img: sayimg2,
          head: "Waste Containerization",
          comment:
            "As is a common knowledge in our company, waste management strategies without effective waste containerization is counter productive, we recognize that effective containerization drives effective waste management.",
        },
        {
          id: "03",
          img: sayimg3,
          head: "Residential Solutions",
          comment:
            "We provide environmentally responsible and affordable non-hazardous solid municipal waste solutions.",
        },
        {
          id: "04",
          img: sayimg4,
          head: "Operation Flush",
          comment:
            "The Operation Flush program is an intensive operation to evacuate all illegal communal/ancient dumps from communities, water channels, canals, drainage and river tributaries.",
        },
        {
          id: "05",
          img: sayimg5,
          head: "Vector Control",
          comment:
            "According to our intelligence, Vector-borne infections have been recorded to be one of the largest causes of health risks that have long impacted the human health for decades especially in Sub-Saharan Africa.",
        },
      ];

  return (
    <>
      <Carousel
      width="100%"
        swipeable
        draggable
        showDots={true}
        // responsive={responsive}
        responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {list.map((eachlist, idx) => {
        return (
          <>
            <div className=" row carou px-3 py-3 p-lg-5 gap-4" key={idx}>
                <Text className="text-center carou-head" children="Reinforcing a Safer Ecosystem"/>
              <div className=" p-0 col-sm-12 col-md-12 col-lg-7 " data-aos="zoom-in-up" data-aos-duration="2000">
                <Image src={eachlist.img} alt="" className="w-100" />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 carouh p-0 d-flex flex-column justify-content-between" data-aos="fade-up" data-aos-duration="2000">
                <div>

                <Text className="carou-text" children={eachlist.head}/>
                <Text className="carou-comment" children={eachlist.comment} />
                </div>
                <div>

                <TextLinks to="/environment" className="w-100 d-inline-flex justify-content-center" children={<Button className="btn learn-btn px-5 " children="Learn more" />} />
                </div>
              </div>
            </div>
          </>
        );
      })}
      </Carousel>
      ;
    </>
  );
};

export default Carousell;
