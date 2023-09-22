import React from 'react'
import FrontPage from "../components/FrontPage";
import ESummit from "./ESummit";
import Quote from '../components/Quote';
import Register from '../components/Register';
import Carousel from './Carousel';
import Navbaar from '../components/Navbaar';
import Footer from '../components/Footer';
import PastPartners from './PastPartners';
import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import Events from './Events';

const HomePage = () => {
  return (
    <div>
      <div className='fixed right-[20px] bottom-[20px] contact'>
        <ContactUs/>
      </div>
      <Navbaar/>
      {/* <Navbar/> */}
      <FrontPage/>
      <Quote/>
      <Carousel/>
      <Register/>
      <Events/>
      <PastPartners/>
      <ESummit/>
      <Footer/>
    </div>
  )
}

export default HomePage