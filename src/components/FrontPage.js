import React from 'react'
import bg from "../images/bg_homepage.jpg";

const FrontPage = () => {
  return (
    <div>

      <div>
        <img 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        className='h-[calc(100vh-80px)] cover w-[100vw]' src={bg} alt='background'/>
      </div>

      <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-delay="300"
      data-aos-duration="1000"
      className='absolute top-0 flex justify-center flex-col w-[100vw] h-[100vh] items-center text-white z-10'>
        <div className='font-bold text-9xl '>E-SUMMIT '23</div>
        <div className='font-semibold text-4xl'>Embracing the Future</div>
        <button className='mt-32 border-4 px-10 py-2 rounded-full hover:bg-cyan-500 border-cyan-500'
        
        >Buy Tickets Now</button>
      </div>
    </div>
  )
}

export default FrontPage