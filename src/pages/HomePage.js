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

const HomePage = () => {
  return (
    <div>
      <Navbaar/>
      {/* <Navbar/> */}
      <FrontPage/>
      <Quote/>
      <Carousel/>
      <Register/>
      <ESummit/>
      <PastPartners/>
      <Footer/>
    </div>
  )
}

export default HomePage