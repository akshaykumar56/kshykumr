import React from 'react';
import './home.css';
import Img from './Ak.jpg';
import Img2 from './Ak2.jpg';
import Img1 from './Akshay.png';
import {useEffect} from 'react';
// import TypeWriterEffect from 'react-typewriter-effect';
const Home = () => {
  const mode=localStorage.getItem("mode");
  useEffect(()=>{
  const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.4
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 
},[])

  return (
  <>
  
  <div className="front d-flex flex-column justify-content-center" style={{backgroundImage:(mode==='white'?(`url(${Img}`):(`url(${Img2}`)),backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize: 'cover'}}>
    <div className='title my-3 ' style={{fontFamily:"exo,'sans-serif'",fontSize:'40px',fontWeight:'800',color:(mode==='white'?'white':'white'),padding:'0px 100px'}}>TECHNOLOGY IS BEST WHEN IT BRINGS PEOPLE TOGETHER</div>
   
   
  <div className="Cont my-3" >
 
  <div className="my-2 container d-flex flex-column justify-content-center align-items-center" style={{fontFamily: "'Hind Siliguri', sans-serif"}}>

{/* <TypeWriterEffect 
  textStyle={{ fontFamily: "'Bebas Neue', cursive",color:(mode==='white'?'white':'white') }}
  startDelay={100}
  text="Welcome To My Portfolio Website !"
  typeSpeed={50}
  eraseSpeed={100}
/> */}
    <h2 className='welcome' style={{color:(mode==='white'?'white':'white')}}>WELCOME TO MY PORTFOLIO WEBSITE</h2>

    <div className="d-flex flex-row justify-content-center my-5">

    <button className="btn btn-3" style={{fontSize:'16px',fontFamily:'exo'}}><span><a href="/project" style={{textDecoration:"none",color:(mode==='white'?'black':'white'),fontWeight:'800'}}>Projects</a></span></button>
    <button className="btn btn-3" style={{fontSize:'16px',fontFamily:'exo'}}><span><a href="/contact" style={{textDecoration:"none",color:(mode==='white'?'black':'white'),fontWeight:'800'}}>Contact</a></span></button>
    
    </div>
    </div>
    </div> 
    </div>


  <div className='About px-2 py-2' style={{backgroundColor:(mode==='white'?'#FDF5E6':'black'),color:(mode==='white'?'black':'white')}}>
    <div className="about2 ">

    <div className="image animation d-flex flex-column justify-content-center align-items-center " >
      <div className="photo my-3" >

      <img src={Img1} alt="Akshay" style={{backgroundColor:(mode==='white'?'#ff9966':'#d4af37')}}/>
      </div>
    </div>



<div className="data" style={{backgroundColor:(mode==='white'?'#FDF5E6':'black'),color:(mode==='white'?'black':'white'),fontFamily:"'exo', sans-serif"}}>
    <div className='data1'>
    <div  className='akshay' style={{backgroundColor:(mode==='white'?'#FDF5E6':'black'),color:(mode==='white'?'black':'white'),fontFamily:"'Phudu', cursive"}}>Hi!</div>
    <div style={{backgroundColor:(mode==='white'?'#FDF5E6':'black'),color:(mode==='white'?'black':'white'),fontSize:'22px',margin:'10px 0px'}}>I'm <b>Akshay Kumar</b></div>
      <p className="aboutdesc" style={{backgroundColor:(mode==='white'?'#FDF5E6':'black'),color:(mode==='white'?'black':'white')}}>Web Developer Experienced In HTML, CSS, JavaScript, ReactJs, NodeJs, ExpressJs, MongoDB. 
      </p>
     <h2 className='additional' style={{backgroundColor:(mode==='white'?'#FDF5E6':'black'),color:(mode==='white'?'black':'white')}}><b>Additional Courses </b></h2>
      <p className='additionaldesc' style={{backgroundColor:(mode==='white'?'#FDF5E6':'black'),color:(mode==='white'?'black':'white')}}>Artificial Intelligence Course From C-DAC Mohali. </p>
    </div>

    </div>
    </div>
  </div>
  
  </>
  )
}

export default Home
