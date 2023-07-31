import React from 'react'
import sayimg from "../../images/service 1.png";
import sayimg2 from "../../images/service 2.png";
import sayimg3 from "../../images/service 3.png";
import sayimg4 from "../../images/service 4.png";
import sayimg5 from "../../images/service 5.png";
import sayimg6 from "../../images/service 6.png";
import Image from '../atom/Image'
import 'boxicons'
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';

const MobileC = () => {
    
 
  return (
    <div className='d-block d-lg-none py-5 my-5 px-3'>
      
      <StackedCarousel
        autoRotate={false}
        containerClassName={"stack"}
        cardClassName="card"
        leftButton={<box-icon name='chevron-left' color="#106804" size="lg"></box-icon>}
        rightButton={<box-icon name='chevron-right' color="#106804" size="lg"></box-icon>}
        >
        <div key={'child1'}>
          <Image src={sayimg} className="w-100"/>

        </div>
        <div key={'child2'}>
        <Image src={sayimg2} className="w-100"/>


        </div>
        <div key={'child3'}>
        <Image src={sayimg3} className="w-100"/>


        </div>
        <div key={'child4'}>
        <Image src={sayimg4} className="w-100"/>


        </div>
        <div key={'child5'}>
        <Image src={sayimg5} className="w-100"/>
        </div>
        <div key={'child6'}>
        <Image src={sayimg6} className="w-100"/>
        </div>

      </StackedCarousel>
      
    </div>
  )
}

export default MobileC
