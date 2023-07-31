import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sayimg from "../../images/service 1.png";
import sayimg2 from "../../images/service 2.png";
import sayimg3 from "../../images/service 3.png";
import sayimg4 from "../../images/service 4.png";
import sayimg5 from "../../images/service 5.png";
import sayimg6 from "../../images/service 6.png";
import Image from "../atom/Image";
// import Text from "../atom/Text";
// import Button from "../atom/Button";
import TextLinks from "../atom/TextLinks";

const Carousell = () => {
  const list = [
    {
      id: "01",
      img: sayimg,
      head: "Material Recovery",
      comment:
        "Our recycling services include collection of recyclable materials from commercial...",
        // , industrial and residential customers for which we charge collection and processing fees
    },
    {
      id: "02",
      img: sayimg2,
      head: "Waste Containerization",
      comment:
        "As is a common knowledge in our company, waste management strategies without effective... ",
        // waste containerization is counter productive, we recognize that effective containerization drives effective waste management.
    },
    {
      id: "03",
      img: sayimg3,
      head: "Residential Solutions",
      comment:
        "We provide environmentally responsible and affordable non-hazardous solid municipal waste solutions...",
    },
    {
      id: "04",
      img: sayimg4,
      head: "Operation Flush",
      comment:
        "The Operation Flush program is an intensive operation to evacuate all illegal communal/ancient dumps from... ",
        // communities, water channels, canals, drainage and river tributaries.
    },
    {
      id: "05",
      img: sayimg5,
      head: "Vector Control",
      comment:
        "According to our intelligence, Vector-borne infections have been recorded to be one of the largest causes of health risks... ",
        // that have long impacted the human health for decades especially in Sub-Saharan Africa.
    },
    {
      id: "06",
      img: sayimg6,
      head: "Fleet Management",
      comment:
        "ZLGA offers a comprehensive fleet management system that provides but not limited to productivity...",
    },
  ];

  return (
    <div className="d-none d-lg-block">
      <p className="px-3 py-3 p-lg-5 carou-head pt-5 mt-5">
        We are Reinforcing a <span className="colorgreen">Safer Ecosystem</span>
      </p>

      <Carousel
        width="100%"
        swipeable
        draggable
        showDots={true}
        className="carr"
        // responsive={responsive}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            slidesToSlide: 3,
            items: 3,
            partialVisibilityGutter: 10,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            slidesToSlide: 1,
            items: 1,
            partialVisibilityGutter: 10,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            slidesToSlide: 2,
            items: 2,
            partialVisibilityGutter: 10,
          },
        }}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        // containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        {list.map((eachlist) => {
          return (
            <>
              <div
                className="row carou px-3 py-3 p-lg-5 pb-5  gap-4 gap-lg-0"
                key={eachlist.id}
              >
                <div
                  className="w-100 p-0 col-sm-12 col-md-12 col-lg-3  "
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <div className="w-100 position-relative"><Image src={eachlist.img} alt="" className="carou-img" /></div>
                  <div className="position-absolute carouabs">
                    <div className="w-100 px-2">

                    <span className="carou-text">{eachlist.head}: </span>
                    <span
                      className="carou-comment w-100"
                      >{eachlist.comment}
                    </span>
                      </div>
                    <div className="">
                      <TextLinks
                        to="/environment"
                        
                        children={
                          <p
                            className="carou-learn pt-2 ps-2"
                            >Learn more
                          </p>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carousell;
