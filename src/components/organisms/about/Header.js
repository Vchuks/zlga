import React from 'react'
import Image from '../../atom/Image'
import aboutimg from '../../../images/meet.jpg'

const Header = () => {
  return (
    <div className='p-3 p-lg-5 trans'>
      <h2 className='text-center colordark py-2'>MEET OUR TEAM</h2>
      <div className='w-100 d-flex justify-content-center' data-aos="fade-up" data-aos-duration="2000">
        <Image className="aboutimg rounded-5" src={aboutimg}/>
      </div>
    </div>
  )
}

export default Header
