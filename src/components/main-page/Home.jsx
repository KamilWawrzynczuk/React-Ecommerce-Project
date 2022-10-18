import React from 'react'
import ChooseCollection from './ChooseCollection'
import CoverPhoto from './CoverPhoto'
import Gallery from './Gallery'


function Home() {
  return (
    <div>
        <CoverPhoto/>
        <ChooseCollection/>
        <Gallery/>
    </div>
  )
}

export default Home