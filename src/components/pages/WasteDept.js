import React from 'react'
import EachSchool from '../organisms/school/EachSchool'
import Footer from '../molecules/Footer'
import waste from "../../brochure/Department of Waste Management Technology Bronchure.pdf"

const WasteDept = () => {
  return (
    <div className='d-flex h flex-column justify-content-between'>
      <EachSchool head2="Waste Management Technology" text="An holistic comprehension of solid and liquid waste management." Pdf={waste}/>
      <Footer/>
    </div>
  )
}

export default WasteDept
