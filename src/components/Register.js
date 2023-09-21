import React from 'react'

const Register = () => {
  return (
    <div className='bg-cyan-600 py-20 flex justify-evenly items-center my-5 mb-40 '>

        <div 
        //  data-aos="fade-right"
         data-aos-offset="150"
         data-aos-duration="800"
        className='text-cyan-600 text-3xl w-1/5 border-2 py-2 rounded-3xl pl-12 pr-5 flex bg-white '>
          <div className='border-1 border-cyan-600 border-dashed'></div>
          <div className='border-1 border-cyan-600 border-dashed ml-4'></div>
            <div className='px-[20px]'>Ensure your coming at ESummit'23</div>
            </div>


            <div 
             data-aos="fade-left"
             data-aos-offset="550"
             data-aos-duration="800"
            className='text-3xl w-1/5'>
                <button className='border-3 border-white rounded-full px-8 py23 bg-white text-cyan-500 
                hover:text-black'>
                    Buy Ticket
                </button>
            </div>
    </div>
  )
}

export default Register