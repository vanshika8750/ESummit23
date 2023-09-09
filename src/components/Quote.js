import React from 'react'

const Quote = () => {
  return (
    <div 
    className='w-[100vw] flex flex-col justify-center items-center my-12 py-12 '>
       <div className='w-4/5 flex flex-col justify-center text-center'>
       <div
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-duration="800"
       className='my-4 font-semibold'>
        <div className='text-3xl'>“Business opportunities are like buses: there’s always another one coming.” </div>
        <div className='text-2xl'>- Richard Branson. </div>
        </div>

        <div
    data-aos="fade-left"
    data-aos-offset="200"
    data-aos-duration="500"
        className='text-xl'>
        The True entrepreneur is a doer, not a dreamer. There are numerous number of start-ups that are born everyday, but only a few survive , and everyone desires to be among the few. Need some guidance on how to start a new business? Then the Entrepreneurship Development Cell JSSATEN brings you E-Summit'23 , all set for the startup community, aspiring new-age entrepreneurs, and venture capitalists, to come and participate in this knowledge shower, where there is nothing to lose but certainly a lot to gain.  E-Summit'23 aims to provide a platform for discussion on innovative ideas that have the potential to transform current challenges into opportunities for positive change.
        </div>
       </div>
    </div>
  )
}

export default Quote