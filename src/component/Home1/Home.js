import React from 'react'
import './home.css'
import Img from './Ak.jpg'
import Img2 from './Ak2.jpg'
import Img1 from './Akshay.png'

// import TypeWriterEffect from 'react-typewriter-effect';
const Home = () => {
  const mode=localStorage.getItem("mode");
  
  return (
  <>
  
  <div className="front d-flex flex-column justify-content-center" style={{backgroundImage:(mode==='white'?(`url(${Img}`):(`url(${Img2}`)),backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize: 'cover'}}>
    <div className='title my-3 ' style={{fontFamily: "'Hind Siliguri', sans-serif",color:(mode==='white'?'white':'white')}}><b>TECHNOLOGY IS BEST WHEN IT BRINGS PEOPLE TOGETHER</b></div>
   
   
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

    <button className="button btn bg-transparent mx-4 my-2 nav-links" style={{border:'2px solid white',borderRadius:'15px'}}><a href="/project" style={{textDecoration:'none',color:(mode==='white'?'white':'white'),fontFamily: "'Hind Siliguri', sans-serif"}}>PROJECTS</a></button>
    <button className="button btn bg-transparent mx-4 my-2 nav-links" style={{border:'2px solid white',borderRadius:'15px'}}><a href="/contact" style={{textDecoration:'none',color:(mode==='white'?'white':'white'),fontFamily: "'Hind Siliguri', sans-serif"}}>CONTACT</a></button>
    
    </div>
    </div>
    </div> 
    </div>


  <div className='About px-2 py-2' style={{backgroundColor:(mode==='white'?'#FDF5E6':'black'),color:(mode==='white'?'black':'white')}}>
    <div className="about2 ">

    <div className="image d-flex flex-column justify-content-center align-items-center " >
      <div className="photo my-3" >

      <img src={Img1} alt="Akshay" style={{backgroundColor:(mode==='white'?'#ff9966':'#d4af37')}}/>
      </div>
    </div>



<div className="data" style={{backgroundColor:(mode==='white'?'#FDF5E6':'black'),color:(mode==='white'?'black':'white'),fontFamily:"'Hind Siliguri', sans-serif"}}>
    <div className='data1'>
    <div  className='akshay' style={{backgroundColor:(mode==='white'?'#FDF5E6':'black'),color:(mode==='white'?'black':'white'),fontFamily:"'Phudu', cursive"}}>Hi!</div>
    <div style={{backgroundColor:(mode==='white'?'#FDF5E6':'black'),color:(mode==='white'?'black':'white'),fontSize:'22px',margin:'10px 0px'}}>I'm Akshay Kumar</div>
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
