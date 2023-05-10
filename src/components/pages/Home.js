import React from 'react'
import Header from '../molecules/Header'
import Partners from '../molecules/Partners'
import Carousell from '../molecules/Carousell'
import Tech from '../molecules/Tech'
import Video from "../molecules/Video"
import Text from '../atom/Text'
import Team from '../molecules/Team'
import CarousellEvent from '../molecules/CarousellEvent'
import Audio from '../molecules/Audio'
import Footer from '../molecules/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Partners />
      <Carousell/>
      <Tech/>
      <div className='trans'>
        <Text className="transp" children="The Transformation"/>
      <Video />
      </div>
      <Team />
      <CarousellEvent />
      <Audio />
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home