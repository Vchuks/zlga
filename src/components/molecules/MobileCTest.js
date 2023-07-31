import React from 'react'
import TextLinks from "../atom/TextLinks"
// import { StackedCarouselSlideProps } from "react-stacked-center-carousel";

export const MobileCTest = React.memo(function (StackedCarouselSlideProps) {
    const {
      data,
      dataIndex,
      isCenterSlide,
      swipeTo,slideIndex
    } = StackedCarouselSlideProps;
  
    const coverImage = data[dataIndex].image;
    const text = data[dataIndex].text;
    
  
    return (
      <div  className="card-card" >
        <div className={`cover fill off`}>
          <div
            className=" card-overlay fill"
            onClick={() => {
              if (!isCenterSlide) swipeTo(slideIndex);
            }}
          />
        </div>
        <div style={{width: '100%', height:"100%"}} className="detail fill">
          <div className="discription">
            <img
              // style={{ width: "100%",height:"80vh" }}
              alt="environmental services"
              draggable={false}
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
  },
  function (prev,  next) {
    return prev.dataIndex === next.dataIndex;
  });

export default MobileCTest
