import React from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Blogs from '../Blogs Page/Blogs'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero />
        <Blogs />
        <Footer />
    </div>
  )
}

export default Home