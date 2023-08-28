import React from 'react'
import './footer.css'
const Footer = () => {


  const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Time with a year
const d = new Date();
let years = Math.round(d.getTime() / year)-31;



  const mode=localStorage.getItem("mode");
  const style={
    backgroundColor:(mode==='white'?'white':'black'),
    bottom:0,
    fontFamily: "'Hind Siliguri', sans-serif"
  }
  
  return (
    <div>
      <div className='footer d-flex justify-content-center' style={style}>Copyright 20{years} All Rights Are Reserved</div>
    </div>
  )
}

export default Footer;
