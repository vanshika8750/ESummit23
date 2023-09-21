import React from 'react'
import {BiSolidPhoneCall} from "react-icons/bi";
import {GrMail} from "react-icons/gr";
import {FaLocationDot} from "react-icons/fa6";
import {BiLogoFacebookSquare,BiLogoLinkedinSquare,BiLogoInstagramAlt,BiLogoMessenger} from "react-icons/bi";
import { Link } from 'react-router-dom';
import {LuCopyright} from "react-icons/lu";

const Footer = () => {
  return (
    <div className='bg-black text-white py-12'>

        {/* icons */}
        <div className='flex justify-evenly items-center '>

            {/* call */}
            <div className='flex justify-center items-center '>
                <div className='text-4xl text-cyan-500'><BiSolidPhoneCall/></div>
                <div className='flex flex-col mx-3'>
                <div>Call us</div>
                <div className='text-gray-300'>+91 987654321</div>
                </div>
            </div>

            {/* email */}
            <div className='flex justify-center items-center '>
                <div className='text-4xl text-cyan-500'><GrMail/></div>
                <div  className='flex flex-col mx-3'>
                <div>Email us</div>
                <div className='text-gray-300'>esummit@edcjss.in</div>
                </div>
            </div>

            {/* address */}
            <div className='flex justify-center items-center '>
                <div className='text-4xl text-cyan-500'><FaLocationDot/></div>
               <div  className='flex flex-col mx-3'>
               <div>address</div>
                <div className='text-gray-300'>C-20/1,Sector-62</div>
                <div className='text-gray-300'>NOIDA(U.P) - 201301</div>
               </div>
            </div>

        </div>

        {/* links */}
    <div className='text-5xl flex flex-row justify-center m-auto pt-16 pb-8'>

        {/* fb */}
        <div >
            <a className='text-gray-300 hover:text-white' href='https://www.facebook.com/ecell.jssaten'><BiLogoFacebookSquare/></a>
        </div>

        {/* linkedin */}
        <div className='mx-4'>
            <a className='text-gray-300 hover:text-white ' href='https://www.linkedin.com/company/edc-jssate'><BiLogoLinkedinSquare/></a>
        </div>

        {/* insta */}
        <div className='mr-4'>
            <a className='text-gray-300 hover:text-white'  href='https://www.instagram.com/ecelljss/'><BiLogoInstagramAlt/></a>
        </div>

        {/* messenger */}
        <div>
            <a className='text-gray-300 hover:text-white'  href='https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F632282093590922%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0'><BiLogoMessenger/></a>
        </div>

    </div>

    {/* content */}
    <div className='text-center'>

        {/* first line */}
        <div className='flex flex-row justify-center items-center'>
            <span><LuCopyright/></span> <span>2023 All Rights Reserved - ESummit Noida</span>
        </div>

        {/* second line */}
        <div>
            An Event of EDC JSS
        </div>

    </div>
    </div>
  )
}

export default Footer