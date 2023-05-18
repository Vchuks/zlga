import React from 'react'
import Text from '../../atom/Text'
import TextLinks from '../../atom/TextLinks'
import { Link } from 'react-scroll'
import Image from '../../atom/Image'
import bg from '../../../images/bro.png'

const HeaderM = () => {
  return (
    <div className='row p-3 pb-0 pb-lg-0 p-lg-5 gap-5 gap-lg-0 align-items-center'>
      <div className='col-sm-12 col-md-12 col-lg-6 p-0'>
      <div data-aos="zoom-in-up" data-aos-duration="2000" className='text-white'>
        <Text
          className="med-head colorgreen"
          children="We value your Health"
        />
        <Text
          className="env-text colorlight"
          children="We are setting the bar when it comes to providing cutting-edge operations to patients."
        />
        <TextLinks
          to="#"
          children={
            <div className="d-flex gap-1">
              <Link to="medpage" smooth={true}>
              <Text className="colorgreen" children="SEE OUR ACTIVITIES" />
              </Link>
              <box-icon name="down-arrow-alt" color="#106804" animation="fade-down" ></box-icon>
            </div>
          }
        />
      </div>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-6 p-0 env-img' data-aos="zoom-in-down" data-aos-duration="2000">
        <Image src={bg} className=""/>
      </div>
    </div>
  )
}

export default HeaderM
