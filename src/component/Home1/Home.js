import React from 'react';
import './home.css';
import AnimatedCursor from './ANIMATED';
// import Img from './Ak.jpg';
// import Img2 from './Ak2.jpg';
import Img1 from './Akshay.png';
// import {Link} from 'react-router-dom'
import {useEffect} from 'react';
import Content1 from './Content1/Content1'
import Resume from './Resume.pdf'
import Service from './Service/Service';
// import TypeWriterEffect from 'react-typewriter-effect';
const Home = () => {



  
  const mode=localStorage.getItem("mode");
  var newColor =(mode==='white'?'#65C891':'#3CCDE9');
  useEffect(()=>
  {
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
  
  {/* <div className="front d-flex flex-column justify-content-center" style={{backgroundImage:(mode==='white'?(`url(${Img}`):(`url(${Img2}`)),backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize: 'cover'}}>
    <div className='title my-3 ' style={{fontWeight:'800',fontFamily:'BDSuper'}}>TECHNOLOGY IS BEST WHEN IT BRINGS PEOPLE TOGETHER</div>
   
   
  <div className="Cont my-3" >
 
  <div className="my-2 container d-flex flex-column justify-content-center align-items-center" style={{fontFamily: "'Hind Siliguri', sans-serif"}}> */}

{/* <TypeWriterEffect 
  textStyle={{ fontFamily: "'Bebas Neue', cursive",color:(mode==='white'?'white':'white') }}
  startDelay={100}
  text="Welcome To My Portfolio Website !"
  typeSpeed={50}
  eraseSpeed={100}
/> */}
    {/* <h2 className='welcome' style={{color:(mode==='white'?'white':'white')}}>WELCOME TO MY PORTFOLIO WEBSITE</h2>

    <div className="d-flex flex-row justify-content-center my-5">

    <button className="btn btn-3" style={{fontSize:'16px',fontFamily:'exo'}}><span><Link to="/project" style={{textDecoration:"none",color:(mode==='white'?'black':'white'),fontWeight:'800'}}>Projects</Link></span></button>
    <button className="btn btn-3" style={{fontSize:'16px',fontFamily:'exo'}}><span><Link to="/contact" style={{textDecoration:"none",color:(mode==='white'?'black':'white'),fontWeight:'800'}}>Contact</Link></span></button>
    
    </div>
    </div>
    </div> 
    </div> */}
    <AnimatedCursor/>
<Content1/>
  <div className='About px-2 py-2' style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),margin:'100px 0px'}}>
    <div className="about2 ">

    <div className="image animation d-flex flex-column justify-content-center align-items-center " >
      <div className="photo my-3" >

      <img className='Akshay' src={Img1} alt="Akshay" style={{backgroundColor:(mode==='white'?'#65C891':'#3CCDE9')}}/>
      </div>
    </div>



<div className="data" style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),fontFamily:"'exo', sans-serif"}}>
    <div className='data1'>
    <div  className='akshay' style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),fontFamily:"'Phudu', cursive",fontSize:'30px'}}>Hello!</div>
    <div style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),fontSize:'28px',margin:'10px 0px',fontWeight:'600'}}>I'm Akshay Kumar</div>
      <p className="aboutdesc" style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),fontSize:'20px'}}>Web Developer Experienced In HTML, CSS, JavaScript, ReactJs, NodeJs, ExpressJs, MongoDB. 
      </p>
     <h2 className='additional' style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white')}}><b>Additional Courses </b></h2>
      <p className='additionaldesc' style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),fontSize:'20px'}}>Artificial Intelligence Course From C-DAC Mohali. </p>
      <a type="button" className="btn btn-secondary btn-lg" href={Resume}  style={{backgroundColor:'transparent',width:'250px',height:'50px',color:(mode==='white'?'#65C891':'#3CCDE9'),margin:'40px 0px',border:`2px solid ${newColor}`,fontFamily:'Bebas Neue',fontSize:'26px',display:'flex',justifyContent:'center',alignItems:'center'}}>RESUME</a>
    </div>

    </div>
    </div>
  </div>
  

  <Service/>
  </>
  )
}

export default Home;
