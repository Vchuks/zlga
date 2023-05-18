import React from 'react'
import EachSchool from '../organisms/school/EachSchool'
import Footer from '../molecules/Footer'
// import AllPages from '../molecules/AllPages'
// import samplePDF from '../../brochure/SEPP Bronchure.pdf'

const BasicDept = () => {
  return (
      <div className='d-flex h flex-column justify-content-between'>
      <EachSchool head2="Basic Sciences and Special Entry Preparatory Programme (SEPP)" text="A remedy to deficiencies in one or two O/L requirements for a course of study."/>
      {/* <AllPages pdf={samplePDF} /> */}
      <Footer/>
    </div>
  )
}

export default BasicDept
