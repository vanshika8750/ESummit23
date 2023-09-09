import React from 'react'
import Event from '../components/Event'
import dummy from "../images/pp3.png";

const Events = () => {
  return (
    <div>
      <div className='text-3xl flex justify-center font-semibold mt-10'>Events</div>
      <div className='flex flow-row justify-center '>
 <Event img={dummy} name=" Case Study Challenge" content="Case studies are one of the best teaching tools for enhancing buisness acumen and testing
practical knowledge  It asks for a quick and detailed analysis of a Market situation or any
organisation, and the participants are required to use their structured thinking to rectify the
complications in it."/>
 
</div>

<div className='flex flow-row justify-center '>
 <Event img={dummy} name=" STARTUP EXPO
" content='Startup Expo aims to bring together and provide a platform to the best startups who have good
potential and also to inspire the audience that "Yes, entrepreneurship can be taken as a career".
It will facilitate the startups to showcase their products & services in front of angel investors,
venture capitalists, government officials, and renowned industrialists and also allow the startups
to get validation from the attendees attending the summit.'/>
 
</div>

<div className='flex flow-row justify-center'>
 <Event img={dummy} name="INTERN FAIR

" content='We intend to invite startups to set up their kiosk in the fair and recruit students of the region
for summer internships. We aim to ignite the spirit of entrepreneurship in the students by giving
them an experience of working in a startup and learn various skills relevant to have an own
startup in future.
'/>
 
</div>

<div className='flex flow-row justify-center'>
 <Event img={dummy} name="SKILL DEVELOPMENT SESSION

" content='Unleash your Entrepreneurship skills and dive into a profound learning experience for being
an entrepreneur, learn how to make a flawless CV and how to be a leader among the crowd.
'/>
 
</div>

<div className='text-3xl flex justify-center font-semibold mt-10'>Competitions</div>

<div className='flex flow-row justify-center'>
 <Event img={dummy} name=" Case Study Challenge

" content='Case studies are one of the best teaching tools for enhancing buisness acumen and testing
practical knowledge. It asks for a quick and detailed analysis of a Market situation or any
organisation, and the participants are required to use their structured thinking to rectify the
complications in it.
'/>
 
</div>

    </div>
  )
}

export default Events