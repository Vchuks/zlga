import React from 'react'
import Image from '../../atom/Image'
import woman from '../../../images/Frame 3.png'
import Text from '../../atom/Text'
import TextLinks from '../../atom/TextLinks'
import {Link} from "react-scroll";


const HeaderE = () => {
  return (
    <div className='envirobg row p-3 p-lg-5 gap-3 gap-lg-0'>
      <div className='col-sm-12 col-md-12 col-lg-8 p-0'>
      <div data-aos="zoom-in-up" data-aos-duration="2000" className='text-white'>
        <Text
          className="env-head pt-3"
          children="Greener, Healthier Environment Experts"
        />
        <Text
          className="env-text"
          children="We are never tired of making your environment safer, healthier and greener. We believe in the saying “Health is Wealth”."
        />
        <TextLinks
          to="#"
          children={
            <div className="d-flex gap-1 pt-5 mt-3">
              <Link to="envpage" smooth={true}>
              <Text className="text-white" children="SEE OUR ACTIVITIES" />
              </Link>
              <box-icon name="down-arrow-alt" color="#ffffff" animation="fade-down" ></box-icon>
            </div>
          }
        />
      </div>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-4 p-0 env-img' data-aos="zoom-in-down" data-aos-duration="2000">
        <Image src={woman} className=""/>
      </div>
    </div>
  )
}

export default HeaderE
