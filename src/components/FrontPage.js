import React from 'react'
import bg from "../images/bg_homepage.jpg";
import {Typewriter} from 'react-simple-typewriter';
import '../css/FrontPage.css';

const FrontPage = () => {

  return (
    <div className='flex flex-col justify-center items-center' id='frontpage'>

      <div>
        <div 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        className=' img_bg_front'>
          </div>
      </div>

      <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-delay="300"
      data-aos-duration="1000"
      className='absolute flex justify-center flex-col  items-center text-white z-10'>
        <div className='flex flex-row justify-center items-baseline'>
        <div className='main_head'>E-SUMMIT '23</div>

        
        <div className='mov_head ml-4 text-cyan-400'>
        {/* multiple typing text */}
        <Typewriter
        words={['JSSATE','NOIDA']}
        loop={500}
        cursor
        cursorStyle='|'
        typeSpeed={90}
        deleteSpeed={80}
        delaySpeed={1000}
        />
        </div>
        </div>


        <div className='sub_head'>Embracing the Future</div>
        <button className='border-3 rounded-full hover:bg-cyan-500 border-cyan-500 btn_front' 
        
        >Buy Tickets Now</button>
      </div>
    </div>
  )
}

export default FrontPage