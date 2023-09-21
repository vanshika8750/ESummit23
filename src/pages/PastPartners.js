import React from 'react'
import pp1 from "../images/pp1.png";
import pp2 from "../images/pp2.png";
import pp3 from "../images/pp3.png";
import pp4 from "../images/pp4.png";
import pp5 from "../images/pp5.png";
import pp6 from "../images/pp6.png";

const PastPartners = () => {
  return (
    <div id='pastpartners'>
      <div className='text-4xl flex justify-center my-12'> Our Past Partners</div>
      <div className='flex flex-row justify-center items-center'>
          <div className='box w-1/4'>
            <img src={pp2} className='block'/>
          </div>
          <div className='box w-1/5 mx-16 '>
            <img src={pp1} className='block '/>
          </div>
          <div className='box w-1/5 '>
            <img src={pp3} className='block'/>
          </div>
      </div>

      <div className='flex flex-row mt-10 justify-center items-center'>
          <div className='box w-1/5'>
            <img src={pp4} className='block'/>
          </div>
          <div className='box w-1/5 mx-20'>
            <img src={pp5} className='block'/>
          </div>
          <div className='box w-1/5'>
            <img src={pp6} className='block'/>
          </div>
      </div>
    </div>
  )
}

export default PastPartners