import React from 'react'

const Register = () => {
  return (
    <div className='bg-cyan-600 py-20 flex justify-evenly items-center'>
        <div 
         data-aos="fade-right"
         data-aos-offset="200"
         data-aos-duration="800"
        className='text-white text-4xl w-1/5'>
            Ensure your coming at ESummit'23
            </div>
            <div 
             data-aos="fade-left"
             data-aos-offset="200"
             data-aos-duration="800"
            className='text-2xl w-1/5'>
                <button className='border-4 border-white rounded-full px-4 py-2 bg-white text-cyan-500 font-semibold 
                hover:text-black'>
                    Buy Ticket
                </button>
            </div>
    </div>
  )
}

export default Register