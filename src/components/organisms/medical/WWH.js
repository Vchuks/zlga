import React from 'react'
import wbg from "../../../images/Frame 8.png"
import Image from '../../atom/Image'
import Text from '../../atom/Text'
import TextLinks from '../../atom/TextLinks'
import Button from '../../atom/Button'

const WWH = () => {
  return (
    <div className='wwh p-3 p-lg-5'>

    <div className='row gap-2 gap-lg-0 '>
      <div className='col-sm-12 col-md-12 col-lg-6 p-0 ' data-aos="flip-down" data-aos-duration="2000">
        <Image src={wbg} className="w-100"/>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-6 p-0 pt-5 ' data-aos="zoom-in" data-aos-duration="2000">
        <Text className='wtext colordark' children="What is Wealth without Health?"/>
        <Text className="colorlight wtext2" children="At ZLGA Medical Centre, our approach to Clinical care is Scientifically based and patient-centric. Our well equipped facility reflects the vision of the GMD, Dr. Abiola Bashorun to be at the forefront of healthcare. We are constantly implementing new, innovative treatment procedures to take you to the peak of wellness and optimal health. With our disciplined approach, regular health screening has never been more convenient. We are motivated to giving our patients longevity and one of the ways to achieve this goal is by early detection."/>
        <TextLinks to="/appointment" children={<Button className="btn btn-broch2 mt-5" children="Book an Appointment"/>} className=""/>
      </div>
    </div>
    </div>
  )
}

export default WWH
