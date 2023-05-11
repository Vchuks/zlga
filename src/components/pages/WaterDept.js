import React from 'react'
import EachSchool from '../organisms/school/EachSchool'
import Footer from '../molecules/Footer'

const WaterDept = () => {
  return (
      <div className='d-flex h flex-column justify-content-between'>
      <EachSchool head2="Water Resources Management Technology" text="Harness the diverse impacts of water resources on the environment"/>
      <Footer/>
    </div>
  )
}

export default WaterDept
