import React from 'react'
import TextLinks from "../atom/TextLinks"
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";

export const MobileCTest = React.memo(function (StackedCarouselSlideProps) {
    const {
      data,
      dataIndex,
      isCenterSlide,
      swipeTo,
      slideIndex
    } = StackedCarouselSlideProps;
  
    const coverImage = data[dataIndex].image;
    const text = data[dataIndex].text;
  
    console.log(coverImage);
    return (
      <div  className="card-card" draggable={false}>
        <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
          <div
            className="card-overlay fill"
            onClick={() => {
              if (!isCenterSlide) swipeTo(slideIndex);
            }}
          />
        </div>
        <div style={{width: '100%', height:"50vh"}} className="detail fill">
          <div className="discription">
            <img
              // style={{ width: "100%",height:"80vh" }}
              alt="j"
              className="cover-image"
              src={coverImage}
            />
            <div className='tt px-2'>

            <p className=''>{text}</p>
            <TextLinks to="/environment" children="Learn more" className='text-white'/>
            </div>
          </div>
        </div>
      </div>
    );
  });

export default MobileCTest
