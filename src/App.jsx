import { useState } from 'react'
import NavigationBar from './NavigationBar/NavigationBar'
import Footer from './Footer/Footer'

import Testimonnaials from './CTestimonials/Testimonnaials'
import Contact from './Contact/Contact'
import Search from './Search/Search'
import Home from './Home/Home'
import Loading from './Loading/Loading'
import Services from './Services/Services'



function App() {

  return (
    <>
      <NavigationBar/>
      <Home/>
      <Search/>
      <Services/>
      <Testimonnaials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
