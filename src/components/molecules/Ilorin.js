import React from 'react'
import ilorinimg1 from '../../images/illustration 3.png'
import ilorinimg2 from '../../images/illustration 4.png'
import ilorinimg3 from '../../images/illustration 5.png'
import ilorinimg4 from '../../images/illustration 6.png'
import ilorinimg5 from '../../images/illustration 7.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Text from '../atom/Text'
import Button from '../atom/Button'
import TextLinks from '../atom/TextLinks'


const Ilorin = () => {
  
  return (
    <div className='row p-3 p-lg-5 ilbg'>
      <div className='col-sm-12 col-md-12 col-lg-6 p-0 my-lg-5'>
       
            <div className='ilbgil'>
              
         <Carousel autoPlay infiniteLoop showThumbs={false} showIndicators={false} showStatus={false} width="90%">
                <div>
                    <img src={ilorinimg1} alt=""/>
                    
                </div>
                <div>
                    <img src={ilorinimg2} alt="" />
                    
                </div>
                <div>
                    <img src={ilorinimg3} alt="" />
                    
                </div>
                <div>
                    <img src={ilorinimg4} alt="" />
                    
                </div>
                <div>
                    <img src={ilorinimg5} alt="" />
                    
                </div>
            </Carousel>
            </div>

        <TextLinks to="/ilorin-contact" className="illbtn" children={<Button className="btn btn-broch2" children="Contact Us"/>} />
      </div>
      <div className='col-sm-12 col-md-12 col-lg-6 my-5'>
            <div className=' ilorin-box my-5'>
                <Text className="colordark fw-bold mb-1 fs-5" children="Waste Containment"/>
                <Text className="text-il" children="We carryout domestic waste containment and communal waste containment."/>
                <Text className="num-il fw-bold" children="1"/>
            </div>
            <div className=' ilorin-box twoil my-5'>
                <Text className="colordark fw-bold mb-1 fs-5" children="Waste Containerization"/>
                <Text className="text-il" children="Transportation and treatment of evacuated waste as well as provision of containers for waste collection."/>
                <Text className="num-il fw-bold" children="2"/>
            </div>
            <div className=' ilorin-box threeil'>
                <Text className="colordark fw-bold mb-1 fs-5" children="Dumpsite Management"/>
                <Text className="text-il" children="We carryout site clearing, acquisition of weighing bays and road construction for accessibility."/>
                <Text className="num-il fw-bold" children="3"/>
            </div>
      </div>
    </div>
  )
}

export default Ilorin
