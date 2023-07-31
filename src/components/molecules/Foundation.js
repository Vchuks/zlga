import React from 'react'
import Image from '../atom/Image'
import Text from '../atom/Text'
import TextLinks from '../atom/TextLinks'
import Button from '../atom/Button'
import ell from "../../images/Group 45.png"
import ell2 from "../../images/Group 40.png"
import kun from "../../images/Group 42.png"
import alaf from "../../images/Group 46.png"


const Foundation = () => {
  return (
    <div className='px-3 pady px-lg-5'>
      <div className='row kun align-items-center flex-column-reverse flex-lg-row' data-aos="fade-up" data-aos-duration="2000">
        <div className='col-sm-12 col-md-12 col-lg-7 p-0 pe-2'>
            <Image src={ell} className="d-none d-lg-block elw"/>
            <Text className="py-3" children="Want to benefit from the World of Financial Inclusion?"/>
            <TextLinks to="https://kundenservicesltd.com/" className="" children={<Button className="colorgreen bg-white py-3 px-5 border-0 kun-btn rounded-5" children="Visit Kunden Services"/>}/>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-5 p-0 ps-2'>
            <Image src={kun} className="w-100"/>
        </div>
      </div>
      <div className='row alaf align-items-center flex-column-reverse flex-lg-row' data-aos="fade-up" data-aos-duration="2000">
        <div className='col-sm-12 col-md-12 col-lg-7 p-0 pe-2'>
            <Image src={ell2} className="d-none d-lg-block elw"/>
            <Text className="pt-3 text1" children="The Alaafia Foundation"/>
            <Text className="pb-3 text2" children="This is a subsidiary of the Kunden Company to assist and empower youths to showcase their hidden treasures. "/>
            <TextLinks to="#" className="" children={<Button className="colorgreen bg-white py-3 px-5 border-0 kun-btn rounded-5" children="Visit Alaafia Foundation"/>}/>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-5 p-0 ps-2'>
            <Image src={alaf} className="w-100"/>
        </div>
      </div>
    </div>
  )
}

export default Foundation
