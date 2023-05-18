import React from 'react'
import Text from '../atom/Text'
import TextLinks from '../atom/TextLinks'
import Image from '../atom/Image'
import logo from "../../images/ZLGA LOGO 1.png"

const Footer = () => {
  return (
    <div className='trans p-3 p-lg-5 pb-lg-2'>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-4 p-0'>
          <div className=' d-flex align-items-center '>
            <Image className="footimg" src={logo}/>
            <h4 className='colorgreen fw-bolder'>ZL Global Alliance</h4>
          </div>
          <Text className="colorlight footcomment" children="ZL Global Alliance has the responsibility of ensuring that all relevant procedures and policies are complied with."/>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-8 p-0 ps-lg-4 d-flex flex-wrap flex-lg-nowrap justify-content-between justify-content-end'>
          <div className='d-flex flex-column footw'>
            <Text className="foottext " children="Our Services"/>
            <TextLinks to="/school" children="School" className="colorlight pb-3" />
            <TextLinks to="/medical" children="Medical Services" className="colorlight pb-3" />
            <TextLinks to="/store" children="ZLGA Store" className="colorlight pb-3" />
            <TextLinks to="/environment" children="Environmental Management" className="colorlight pb-3" />
          </div>
          
          <div className='d-flex flex-column footw'>
            <Text className="foottext" children="Resources"/>
            <TextLinks to="/contact" children="Contact Us" className="colorlight pb-3" />
            <TextLinks to="/career" children="Careers" className="colorlight pb-3" />
            <TextLinks to="/faq" children="FAQs" className="colorlight pb-3" />
            <TextLinks to="/carousellevent" children="Events" className="colorlight pb-3" />
          </div>
          <div className='d-flex flex-column footw'>
            <Text className="foottext" children="Connect with Us"/>
            <TextLinks to="#" children="LinkedIn" className="colorlight pb-3" />
            <TextLinks to="https://twitter.com/zl_global?s=21&t=IYbD17I41t1jbcGrnDZdgg" children="Twitter" className="colorlight pb-3" />
            <TextLinks to="https://instagram.com/zlglobalalliancenig?igshid=NTc4MTIwNjQ2YQ" children="Instagram" className="colorlight pb-3" />
            <TextLinks to="https://www.facebook.com/zlglobalallianceng?mibextid=LQQJ4d" children="Facebook" className="colorlight pb-3" />
            <TextLinks to="https://youtube.com/@zlglobalalliance4043" children="Youtube" className="colorlight pb-3" />
          </div>
          <div className='d-flex flex-column footw'>
            <Text className="foottext" children="Legal"/>
            <TextLinks to="#" children="Privacy Policy" className="colorlight pb-3" />
            <TextLinks to="#" children="Terms and Conditions" className="colorlight pb-3" />
          </div>
        </div>
      </div>
      <div className='pt-2 pt-lg-5'>
        <hr/>
        <Text className="footcopy" children="Copyright &copy; 2023 ZLGA, All Rights Reserved" />
      </div>
    </div>
  )
}

export default Footer
