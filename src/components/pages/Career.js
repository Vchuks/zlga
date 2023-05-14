import React from 'react'
import HeaderCa from '../organisms/career/HeaderCa'
import Pics from '../organisms/career/Pics'
import Start from '../organisms/career/Start'
import Openings from '../organisms/career/Openings'
import Footer from '../molecules/Footer'

const Career = () => {
  return (
    <div>
      <HeaderCa/>
      <Pics/>
      <Start/>
      <Openings/>
      <Footer/>
    </div>
  )
}

export default Career
