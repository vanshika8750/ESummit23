import React, { useState } from 'react'
import "../css/Accordion.css";

const MyAccordion = ({question,answer}) => {
    const [show,setShow]=useState(false);
    const changeShowState=()=>{
        setShow(!show);
    }
  return (
    <>
    <div className='main-heading'>
    <p 
    onClick={changeShowState}
    >{show?"➖":"➕"}</p>
    <h3>{question}</h3>
    </div>
    {
        show&&<p className='answers'>{answer}</p>
    }
    </>
    )
}

export default MyAccordion