import React from 'react'
import pp1 from "../images/pp1.png";
import pp2 from "../images/pp2.png";
import pp3 from "../images/pp3.png";
import pp4 from "../images/pp4.png";
import pp5 from "../images/pp5.png";
import pp6 from "../images/pp6.png";
import pp7 from "../images/pp7.png";
import pp8 from "../images/pp8.png";
import pp9 from "../images/pp9.png";
import pp10 from "../images/pp10.png";
import pp11 from "../images/pp11.png";
import pp12 from "../images/pp12.png";
import pp13 from "../images/pp13.png";
import pp14 from "../images/pp14.png";
import pp15 from "../images/pp15.png";

import '../css/PastPartners.css';

const PastPartners = () => {
  return (
    <div className='Paast' id='pastpartners'>
      <div className='text-4xl flex justify-center my-12'> Our Past Partners</div>
      <div 
       data-aos="fade-right"
       data-aos-offset="100"
       data-aos-duration="800"
      className='past'>
          <div className='box'>
            <img src={pp2}/>
          </div>
          <div className='box '>
            <img src={pp1} />
          </div>
          <div className='box'>
            <img src={pp3}/>
          </div>
           <div className='box'>
            <img src={pp4}/>
          </div>
          <div className='box'>
            <img src={pp9}/>
          </div>
      </div>

      <div
       data-aos="fade-left"
       data-aos-offset="100"
       data-aos-duration="800"
      className='past'>
         
          <div className='box '>
            <img src={pp5}/>
          </div>
          <div className='box'>
            <img src={pp6}/>
          </div>
          <div className='box'>
            <img src={pp7}/>
          </div>
          <div className='box'>
            <img src={pp8}/>
          </div>
          <div className='box'>
            <img src={pp10}/>
          </div>
      </div>

      <div
       data-aos="fade-right"
       data-aos-offset="100"
       data-aos-duration="800"
      className='past'>
         
          <div className='box '>
            <img src={pp11}/>
          </div>
          <div className='box'>
            <img src={pp12}/>
          </div>
          <div className='box'>
            <img src={pp13}/>
          </div>
          <div className='box'>
            <img src={pp14}/>
          </div>
          <div className='box'>
            <img src={pp15}/>
          </div>
      </div>
    </div>
  )
}

export default PastPartners