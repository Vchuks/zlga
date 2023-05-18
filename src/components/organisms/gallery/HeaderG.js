import React from 'react'
import Text from '../../atom/Text'
import TextLinks from '../../atom/TextLinks'
import {Link} from "react-scroll";


const HeaderG = () => {
  return (
    <div className='envirobg p-3 pb-0 pb-lg-0 p-lg-5'>
      <div data-aos="zoom-in-up" data-aos-duration="2000" className='text-white'>
        <Text
          className="env-head pt-3 m-auto text-center"
          children="We Derive Joy in Our Services"
        />
        <Text
          className="env-text m-auto text-center "
          children="Explore our gallery to see how we started and where we are today. We never stopped!"
        />
        <TextLinks
          to="#"
          className=""
          children={
            <div className="d-flex gap-1 py-5 mt-3 justify-content-center">
              <Link to="gallerypage" smooth={true}>
              <Text className="text-white" children="SEE OUR GALLERY" />
              </Link>
              <box-icon name="down-arrow-alt" color="#ffffff" animation="fade-down" ></box-icon>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default HeaderG
