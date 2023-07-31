import React from 'react'
import sayimg from "../../images/service 1.png";
import sayimg2 from "../../images/service 2.png";
import sayimg3 from "../../images/service 3.png";
import sayimg4 from "../../images/service 4.png";
import sayimg5 from "../../images/service 5.png";
import sayimg6 from "../../images/service 6.png";
import swipe from '../../images/iwwa_swipe.png'
import 'boxicons'
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import MobileCTest from './MobileCTest';
import Image from '../atom/Image';

const data = [
  {
    image :sayimg ,
    text: "Material Recovery"
  },
  {
    image:sayimg2 ,
    text: "Waste Containerization"
  },
  {
    image: sayimg3 ,
    text: "Residential Solutions"
  },
  {
    image:sayimg4,
    text: "Operation Flush"
  },
  {
    image: sayimg5 ,
    text: "Vector Control"
  },
  {
    image: sayimg6 ,
    text: "Fleet Management"
  }
];

  

const MobileC = () => {const [centerSlideDataIndex, setCenterSlideDataIndex] = React.useState(0);
  const onCenterSlideDataIndexChange = (newIndex) => {
      setCenterSlideDataIndex(newIndex);
  };
 
  return (
    <div className="card card-carrier overflow-hidden d-block d-lg-none">
      <div className='backcc' style={{ position: "relative" }}>
        <ResponsiveContainer
          // carouselRef={ref}
          render={(width) => {
            let currentVisibleSlide = 5;
            if (width <= 1280) currentVisibleSlide = 3;
            if (width <= 200) currentVisibleSlide = 1;
            return (
              <StackedCarousel
              data={data}
                                    carouselWidth={width}
                                    slideWidth={400}
                                    slideComponent={MobileCTest}
                                    maxVisibleSlide={5}
                                    currentVisibleSlide={currentVisibleSlide}
                                    onActiveSlideChange={onCenterSlideDataIndexChange}
                // ref={carouselRef}
                // slideComponent={MobileCTest}
                // slideWidth={400}
                // carouselWidth={width}
                // data={data}
                // maxVisibleSlide={5}
                disableSwipe = {false}
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
                useGrabCursor={true}
                // currentVisibleSlide={currentVisibleSlide}
              />
            );
          }}
        />
        {/* <span
          className="card-button testimonial-left-button"
          size="small"
          onClick={() => ref.current?.swipeTo(-1)}
        >
          <box-icon type='solid' name='chevron-left'></box-icon>
        </span> */}
        <div
          className="d-flex card-button testimonial-right-button"
          size="small"
          // onClick={() => ref.current?.swipeTo(1)}
        >

          <p>Swipe to discover</p>
          <div>

          <Image src={swipe} className=""/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MobileC
