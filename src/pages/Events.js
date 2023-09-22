import React from 'react'
// import Event from '../components/Event'
import dummy from "../images/pp3.png";
import '../css/Events.css';

const Events = () => {
  return (
    <div className='Events'>
      <div className='main-head-events'>Events and Competitions</div>
<div className='events'>

<div className='card-event'>
  <div className='img-div-event'><img className='img-event' src={dummy}/></div>
  <div className='written-card bg-cyan-500'>
  <div className='head-card'>WORKSHOPS</div>
  <div className='content-card'>The workshops at E-Summit'23 offer invaluable insights into the process of generating
creative and ...</div>
<div className='btn-div'><button className='btn-card-event'>Read More</button></div>
</div>
</div>

<div className='card-event'>
  <div className='img-div-event'><img className='img-event' src={dummy}/></div>
  <div className='written-card bg-cyan-500'>
  <div className='head-card'>STARTUP EXPO</div>
  <div className='content-card'>Startup Expo aims to bring together and provide a platform to the best startups who have good
potential...</div>
<div className='btn-div'><button className='btn-card-event'>Read More</button></div>
</div>
</div>

<div className='card-event'>
  <div className='img-div-event'><img className='img-event' src={dummy}/></div>
  <div className='written-card bg-cyan-500'>
  <div className='head-card'>INTERN FAIR</div>
  <div className='content-card'>We intend to invite startups to set up their kiosk in the fair and recruit students of the region
for summer...</div>
<div className='btn-div'><button className='btn-card-event'>Read More</button></div>
</div>
</div>

</div>
     

<div className='events'>

<div className='card-event'>
  <div className='img-div-event'><img className='img-event' src={dummy}/></div>
  <div className='written-card bg-cyan-500'>
  <div className='head-card'>SKILL DEVELOPMENT SESSION</div>
  <div className='content-card'>Unleash your Entrepreneurship skills and dive into a profound learning experience for being
an ...</div>
<div className='btn-div'><button className='btn-card-event'>Read More</button></div>
</div>
</div>

<div className='card-event'>
  <div className='img-div-event'><img className='img-event' src={dummy}/></div>
  <div className='written-card bg-cyan-500'>
  <div className='head-card'>Case Study Challenge</div>
  <div className='content-card'>Case studies are one of the best teaching tools for enhancing buisness acumen and testing
practical...</div>
<div className='btn-div'><button className='btn-card-event'>Read More</button></div>
</div>
</div>


<div className='card-event'>
  <div className='img-div-event'><img className='img-event' src={dummy}/></div>
  <div className='written-card bg-cyan-500'>
  <div className='head-card'>Ideastorm</div>
  <div className='content-card'>A competition for students to transform their amateur business ideas into professional business
plans and pitch ...</div>
<div className='btn-div'><button className='btn-card-event'>Read More</button></div>
</div>
</div>

</div>

<div className='events'>

<div className='card-event'>
  <div className='img-div-event'><img className='img-event' src={dummy}/></div>
  <div className='written-card bg-cyan-500'>
  <div className='head-card'>Pitch</div>
  <div className='content-card'>The ability to communicate ones thoughts spontaneously is essential in the startup arena. Here
we showcase ...</div>
<div className='btn-div'><button className='btn-card-event'>Read More</button></div>
</div>
</div>

</div>

    </div>
  )
}

export default Events