import React from 'react'
import { Link } from 'react-router-dom'
import "../css/TeamMember.css";

const TeamMember = (props) => {
  return (
    <div className='w-1/4 my-4 mx-4 card'>
        <img
        className=' card-img object-cover'
        src={props.image} alt='dummy_img'/>
        <div className='card-body'>
        <div className='card-title'>{props.name} </div> 
        <div className='card-sub-title'>{props.position}</div>
        <div className='w-60 card-info'>{props.description}</div>

        <Link to='/' className='card-btn'>icon</Link>
        </div>
    </div>
  )
}

export default TeamMember