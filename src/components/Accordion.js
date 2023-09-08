import React, { useState } from 'react'
import { questions } from '../utils/content';

const Accordion = () => {
    const[data,setData]=useState(questions);

  return (
    <div>
        {
            data.map((curElem)=>{
                return curElem.question;
            })
        }
    </div>
  )
}

export default Accordion