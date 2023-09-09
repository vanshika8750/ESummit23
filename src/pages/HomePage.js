import React from 'react'
import FrontPage from "../components/FrontPage";
import ESummit from "./ESummit";
import Quote from '../components/Quote';
import Register from '../components/Register';

const HomePage = () => {
  return (
    <div>
      <FrontPage/>
      <Quote/>
      <Register/>
      <ESummit/>
    </div>
  )
}

export default HomePage