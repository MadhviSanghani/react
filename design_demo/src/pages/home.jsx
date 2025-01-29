import React from 'react'
import Navbar from '../master/header'
import Heroimage from '../components/heroimage'
import Carousel from '../components/carousel'
import Footer from '../master/footer'
import Card from '../components/card'

function Home() {
  return (
    <div>
        <Navbar/>
        <br />
        <Heroimage/>
        <br />
        <Card/>
        <br />
        <Carousel/>
        <br />
        <Footer/>
    </div>
  )
}

export default Home