import React from 'react'
import Image from '../atom/Image'
import pic1 from "../../images/Group 22.png"
import pic2 from "../../images/Group 25 (1).png"
import pic3 from "../../images/Group 13 (2).png"

const Team = () => {
  return (
    <div className='p-3 p-lg-5 magg'>
      <h2 className='transp'>Our Team</h2>
      <div className='row align-items-center pb-5 justify-content-between'>
        <div className='col-sm-12 col-md-12 col-lg-4 p-0 ' data-aos="fade-up" data-aos-duration="2000"><Image className="picone" src={pic1}/></div>
        <div className='col-sm-12 col-md-12 col-lg-4 p-0 ' data-aos="fade-up" data-aos-duration="2000"><Image className="picone" src={pic2}/></div>
        <div className='col-sm-12 col-md-12 col-lg-4 p-0 ' data-aos="fade-up" data-aos-duration="2000"><Image className="pictwo" src={pic3}/></div>
      </div>
    </div>
  )
}

export default Team
