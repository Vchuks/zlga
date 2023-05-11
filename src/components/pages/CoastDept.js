import React from 'react'
import EachSchool from '../organisms/school/EachSchool'
import Footer from '../molecules/Footer'

const CoastDept = () => {
  return (
      <div className='d-flex h flex-column justify-content-between'>
      <EachSchool head2="Coastal/Marine Geography & Ecology Technology" text="Understand the effect of coastal/marine geography on ecology."/>
      <Footer/>
    </div>
  )
}

export default CoastDept
