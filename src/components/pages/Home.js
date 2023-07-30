import React from 'react'
import Header from '../molecules/Header'
import Partners from '../molecules/Partners'
import Carousell from '../molecules/Carousell'
import Tech from '../molecules/Tech'
import Video from "../molecules/Video"
// import Text from '../atom/Text'
import Team from '../molecules/Team'
import CarousellEvent from '../molecules/CarousellEvent'
import Audio from '../molecules/Audio'
import Footer from '../molecules/Footer'
import Ilorin from '../molecules/Ilorin'
import Foundation from '../molecules/Foundation'

const Home = () => {
  return (
    <div>
      <Header />
      <Partners />
      <Carousell/>
      <Ilorin/>
      <Tech/>
      <div className='trans'>
        {/* <Text className="transp" children="The Transformation"/> */}
      <Video />
      </div>
      <Team />
      <CarousellEvent />
      <Foundation/>
      <Audio />
      <Footer/>
    </div>
  )
}

export default Home
