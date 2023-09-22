import React, { useState } from 'react'
import {TbMessages} from 'react-icons/tb';
import '../css/Contactus.css';

const ContactUs = () => {
  const[open,setOpen]=useState(false);
  const setContactUs=()=>{
    setOpen(!open);
    console.log(open)
  }
  return (
    <div>
        <div  className='w-[45px] h-[45px] text-[30px] flex justify-center items-center bg-cyan-500 rounded-full p-3 cursor-pointer' onClick={setContactUs}><TbMessages/>
          {!open?'':
          <div className='w-[350px] h-[500px] bg-cyan-500 fixed bottom-[40px] right-[50px] z-50 rounded-[30px] px-[30px] msg'>
              <div className='text-white h-[120px] text-[25px] flex justify-center items-center'>Leave a message</div>
              <input type='text' placeholder='Enter your name' />
              <input type='email' placeholder='Enter your email' />
              <textarea placeholder='Type your message here and click submit' rows={5}/>
              <div >
            <button>Submit</button>
          </div>
          </div>
          
          }
        </div>
    </div>
  )
}

export default ContactUs