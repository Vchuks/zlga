import React from 'react'
import img1 from "../../../images/game-icons_pill.png"
import img2 from "../../../images/map_veterinary-care.png"
import img3 from "../../../images/medical-icon_i-inpatient.png"
import img4 from "../../../images/clarity_success-standard-solid.png"
import Text from '../../atom/Text'
import Image from '../../atom/Image'

const whatList = [
    {
        id:1,
        img:img1,
        title:"Excellence in Medicine",
        body:"For the benefit of our patients, we are dedicated to providing medical solutions in complex situations."
    },
    {
        id:2,
        img:img2,
        title:"Personalized Care",
        body:"Our culture is built around delivering individualized care for the most comfortable healthcare experience."
    },
    {
        id:3,
        img:img3,
        title:"Unmatched Patient Experience",
        body:"Through our unique patient care program, our devoted healthcare workers make sure that all of your needs are met."
    },
    {
        id:4,
        img:img4,
        title:"Quality Standards",
        body:"The effective and organized working environment at ZLGA Medical Center enables us to provide the highest quality medical care to our patients."
    }
]
const Why = () => {
    const what = whatList.map(wlist=><div className='wbox2 col-sm-12 col-md-12 col-lg-6 px-3 py-4' key={wlist.id}>
        <div >
            
        <Image className="greenp" src={wlist.img}/>
        </div>
        <Text className="colordark fw-bolder fs-5 pt-3" children={wlist.title}/>
        <Text className="colorlight" children={wlist.body}/>
    </div>)
  return (
    <div className='p-3 pb-5 p-lg-5 whymed'>
      <Text className="wtext w-100 text-center py-2 py-lg-5" children="Why Us?"/>
      <div className='row gap-5 justify-content-between pb-5'>
        {what}
      </div>
    </div>
  )
}

export default Why
