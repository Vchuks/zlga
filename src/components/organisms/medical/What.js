import React from 'react'
import greenp from "../../../images/greenplus.png"
import Text from '../../atom/Text'
import Image from '../../atom/Image'
import { Element } from 'react-scroll'

const whatList = [
    {
        id:1,
        title:"General Medical Consultation",
        body:"We carryout diagnostic studies and therapeutic interventions for our patients through our healthcare professionals."
    },
    {
        id:2,
        title:"Specialist Consultation",
        body:"Priority access to ZLGA’s consultants for more serious medical conditions."
    },
    {
        id:3,
        title:"Health Diagnosis & Treatment",
        body:"Direct review of health status and immediate assessment for quick recovery."
    },
    {
        id:4,
        title:"Ultrasound Scan, Antenatal & Delivery",
        body:"With the infrastructures in place, we are capable of evaluating the mother and child from conception till birth."
    },
    {
        id:5,
        title:"Clinical Laboratory",
        body:"ZLGA is fully equipped with advanced clinical laboratory equipment capable of performing a wide range of Hematology, Chemistry and Microbiology tests."
    },
    {
        id:6,
        title:"Pharmacy",
        body:"With a well fully furnished pharmacy, you can be rest assured of getting the best quality and affordable drugs from ZLGA’s pharmacy."
    }
]
const What = () => {
    const what = whatList.map(wlist=><div className='wbox col-sm-12 col-md-12 col-lg-4 px-3 py-4'data-aos="fade-up" data-aos-duration="2000" key={wlist.id}>
        <div >
            
        <Image className="greenp" src={greenp}/>
        </div>
        <Text className="colordark fw-bolder fs-5 pt-3" children={wlist.title}/>
        <Text className="colorlight" children={wlist.body}/>
    </div>)
  return (
        <Element id="medpage" name="medpage">
    <div className='p-3 p-lg-5 '>

      <Text className="wtext w-100 text-center py-3 py-lg-5" children="What We Do" data-aos="zoom-in-up" data-aos-duration="2000"/>
      <div className='row gap-5 justify-content-between'>
        {what}
      </div>
    </div>
        </Element>
  )
}

export default What
