import React from 'react'
import Text from '../../atom/Text'

const OpenCard = ({jobtitle,availability,duration,city, bgcol,coll}) => {
    console.log(bgcol)
  return (
    <div className='row align-items-center open-card'>
      <div className='col-sm-12 col-md-6 col-lg-6'>
        <Text className="colordark fw-bold" children={jobtitle}/>
        <Text style={{backgroundColor:bgcol, color: coll}} className="availw"  children={availability}/>
      </div>
      <div className='col-sm-12 col-md-6 col-lg-6 colorlight d-flex gap-2 justify-content-md-end'>
        <Text className="" children={duration}/> *
        <Text className=""  children={city}/>
      </div>
    </div>
  )
}

export default OpenCard
