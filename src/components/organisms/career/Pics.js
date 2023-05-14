import React from 'react'
import Image from '../../atom/Image'
import img1 from "../../../images/Rectangle 19.png"
import img2 from "../../../images/Rectangle 20.png"
import img3 from "../../../images/Rectangle 21.png"
import img4 from "../../../images/Rectangle 23.png"

const Pics = () => {
  return (
    <div className='p-3 p-lg-5 my-5'>
      <div className='d-flex gap-3 py-2 flex-column flex-lg-row'>
        <div><Image className=" w-100" src={img4}  /></div>
        <div><Image className=" w-100" src={img2}  /></div>
      </div>
      <div className='d-flex gap-3 py-2 flex-column flex-lg-row'>
        <div><Image className=" w-100" src={img3}  /></div>
        <div><Image className=" w-100" src={img1}  /></div>
      </div>
    </div>
  )
}

export default Pics
