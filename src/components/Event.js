import React, { useState } from 'react'
import "../css/Events.css";

// const parastyles={
//     WebkitLineClamp:1,
//     WebkitBoxOrient:'horizontal',
//     overflow:'hidden',
//     display:'-webkit-box',
// }
const Event = (props) => {
    // const[isOpen,setIsOpen]=useState(false);

  return (
    <div className='card-event flex border-8  p-6 w-3/4 mx-10 mt-9'>
        <img className='w-40' src={props.img} alt='dummy'/>
        <div>
        <h2 >{props.name}</h2>
        <p
        // style={isOpen? null:parastyles} 
       >{props.content}</p>
        {/* <button onClick={()=>{
            setIsOpen(!isOpen)
        }}>{isOpen?'read less...':'read more...'}</button> */}
        </div>
</div>
  )
}

export default Event