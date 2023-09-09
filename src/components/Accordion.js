import React, { useState } from 'react'
import { questions } from '../utils/content';
import MyAccordion from './MyAccordion';
import "../css/Accordion.css";

const Accordion = () => {
    const[data,setData]=useState(questions);

  return (
    <>
    <section className='main-div'>
          <h1>Esummit'23 Related Questions</h1>
        {
            data.map((curElem)=>{
                const{id}=curElem;
                return <MyAccordion key={id}{...curElem}/>;
            })
        }
    </section>
    </>)
}

export default Accordion