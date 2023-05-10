import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sayimg from "../../images/Rectangle 11.png";
import sayimg2 from "../../images/Rectangle 11 (1).png";
import sayimg3 from "../../images/Rectangle 11 (2).png";
import sayimg4 from "../../images/Rectangle 11 (3).png";
import sayimg5 from "../../images/Rectangle 11 (4).png";
import Image from "../atom/Image";
import Text from "../atom/Text";

const list = [
  {
    id: "01",
    img: sayimg,
    comment:
      "ZLGA in partnership with other companies organizes a Conscious Walk in Kaduna State",
  },
  {
    id: "02",
    img: sayimg2,
    comment:
      "Our trucks during a trash evacuation exercise in the city of Akure, Ondo State.",
  },
  {
    id: "03",
    img: sayimg3,
    comment:
      "CEO of ZL Global Alliance, Dr. Mrs Abiola Bashorun meets with Prof. Wole Soyinka",
  },
  {
    id: "04",
    img: sayimg4,
    comment:
      "Executive Governor of Ondo State during the launch of Swamp Buggy",
  },
  {
    id: "05",
    img: sayimg5,
    head: "Vector Control",
    comment:
      "Dr. Mrs Abiola Bashorun emphasizes on the importance of creating a greener and cleaner environment.",
  },
];

const CarousellEvent = () => {
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
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {list.map((eachlist, idx) => {
          return (
            <>
              <div
                className=" row event event px-3 py-3 p-lg-5 gap-4 flex-column"
                key={idx}
              >
                <Text
                  className="text-center carou-head transp pb-0 mb-0"
                  children="Events"
                />

                <Text
                  className="transevent"
                  children="Check out our latest events at ZL Global Alliance"
                />
                <div className=" p-0 col w-100 ">
                  <Image src={eachlist.img} alt="" className="w-100" />
                </div>
                <div className="col eventtext p-0">
                  <Text className="text-center" children={eachlist.comment} />
                  <div></div>
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

export default CarousellEvent;