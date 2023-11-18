import React from 'react'
// import IMG from './Ak.jpg'
// import IMG2 from './Ak2.png'
import Card from 'react-bootstrap/Card';
import Call from './call.png';
import Gmail from './gmail.png'
import Github from './github.png'
import Insta from './instagram.png'
import Skype from './skype.png'
import Linked from './linkedin.png'
import AnimatedCursor from '../Home1/ANIMATED';
import './Contact.css';

import {useRef} from 'react';
import Swal from 'sweetalert2';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';

import './Contact.css'
// import { useState } from 'react';


const Contact = () => {




  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7n76pym', 'template_id121', form.current, 'MPq-iGadObwPG0Ccv')
      .then(() => {
        Swal.fire({
          title: "Your message is sent successfully!",
          icon: "success",
          confirmButtonText: "Okay"
        })
      }, (error) => {
          console.log(error.text);
      });
  };
  

  const mode=localStorage.getItem('mode');


  // const[note,setNote] = useState({name:"",email:"",message:""})
  // const onChange=(e)=>{
  //     setNote({...note,[e.target.name]:e.target.value})
  //   }
    

// const handleSubmit = async () => {
//   let bodyData={"data":{"name": note.name,"email": note.email,"message":note.message}}
//   const response = await fetch("https://kshykumr-backend.onrender.com/api/contacts", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(bodyData)
//   });
//   const json = await response.json()
//   console.log(json)
// }

  return (
  <>
  {/* <div className='contact' style={{backgroundImage:(mode==='white'?(`url(${IMG2}`):(`url(${IMG}`)),backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize: 'cover',width:'100%',height:'300px'}}>     */}
<AnimatedCursor/>
  <div className='contact' style={{width:'100%',height:'200px'}}>  
  {/* <div className="text mx-2"> */}
  {/* <MovingComponent className='my-5'
  type="popIn"
  duration="1500ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="2"
  fillMode="none"> */}
  <div className='Line' style={{color:(mode==='white'?'black':'white'),fontFamily: 'BDSuper'}}><b>GET IN TOUCH</b></div>
   {/* </MovingComponent> */}
   {/* </div> */}
</div>




<div className="details my-3 d-flex flex-column justify-content-center align-items-center"  style={{height:'auto'}}>
    <div style={{textAlign:'start'}}>
    <div className="container my-3  justify-content-center">
      <div className="row" >
    <div className="col-md-4 my-3" key={1}>
    <Card  className="card card-links" style={{backgroundColor:(mode==='white'?'white':'#212529'),borderRadius:'0px'}}>
      <Card.Body>
       <img style={{height:'40px',width:'40px',margin:'5px 0px 10px 0px',filter:(mode==='white'?'invert(0)':'invert(1)')}}  src={Call} alt=''/>
        <Card.Text>
         <b style={{fontFamily: "'exo', sans-serif"}}>8894055729</b> 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>



    <div className="col-md-4 my-3" key={2}>
    <Card className="card card-links" style={{backgroundColor:(mode==='white'?'white':'#212529'),borderRadius:'0px'}}>
      <Card.Body>
      <img style={{height:'40px',width:'40px',margin:'5px 0px 10px 0px'}}  src={Gmail} alt=''/>
        <Card.Text>
          <a href='https://mail.google.com/mail/u/?authuser=kshykumr@gmail.com'  target="_blank" rel="noopener noreferrer" style={{color:(mode==='white'?'black':'white'),fontFamily: "'exo', sans-serif"}}><b>kshykumr@gmail.com</b></a>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>


    <div className="col-md-4 my-3" key={3}>
    <Card  className="card card-links" style={{backgroundColor:(mode==='white'?'white':'#212529'),borderRadius:'0px'}}>
      <Card.Body>
      <img style={{height:'40px',width:'40px',margin:'5px 0px 10px 0px',filter:(mode==='white'?'invert(0)':'invert(1)')}}  src={Github} alt=''/>
        <Card.Text>
        <a href='https://github.com/akshaykumar56'  target="_blank" rel="noopener noreferrer" style={{color:(mode==='white'?'black':'white'),fontFamily: "'exo', sans-serif"}}><b>github.com/akshaykumar56</b></a>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className="col-md-4 my-3" key={4}>
    <Card className="card card-links" style={{backgroundColor:(mode==='white'?'white':'#212529'),borderRadius:'0px'}}>
      <Card.Body>
      <img style={{height:'40px',width:'40px',margin:'5px 0px 10px 0px',filter:(mode==='white'?'invert(0)':'invert(1)')}}  src={Linked} alt=''/>
        <Card.Text>
        <a href='https://linkedin.com/in/akshaypalsra'  target="_blank" rel="noopener noreferrer" style={{color:(mode==='white'?'black':'white'),fontFamily: "'exo', sans-serif"}}><b>linkedin.com/in/akshaypalsra</b></a>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className="col-md-4 my-3" key={5}>
    <Card className="card card-links" style={{backgroundColor:(mode==='white'?'white':'#212529'),borderRadius:'0px'}}>
      <Card.Body>
      <img style={{height:'40px',width:'40px',margin:'5px 0px 10px 0px',filter:(mode==='white'?'invert(0)':'invert(1)')}}  src={Insta} alt=''/>
        <Card.Text>
        <a href='https://www.instagram.com/kshykumr28'  target="_blank" rel="noopener noreferrer" style={{color:(mode==='white'?'black':'white'),fontFamily: "'exo', sans-serif"}}><b>kshykumr28</b></a>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className="col-md-4 my-3" key={6}>
    <Card className="card card-links" style={{backgroundColor:(mode==='white'?'white':'#212529'),borderRadius:'0px'}}>
      <Card.Body>
      <img style={{height:'40px',width:'40px',margin:'5px 0px 10px 0px',filter:(mode==='white'?'invert(0)':'invert(1)')}}  src={Skype} alt=''/>

        <Card.Text>
        <b style={{fontFamily: "'exo', sans-serif"}}>live:.cid.964c207dbbbb11f</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

  </div>
  </div>

  </div>
  </div>

  {/* <section style={{display:'flex',justifyContent:'center',alighItems:'center',marginBottom:'30px'}}>
    <form className='form' onSubmit={()=>{handleSubmit()}}>
      <h1 style={{color:'white',fontFamily:'Bebas Neue',display:'flex',justifyContent:'center',alignItems:'center',margin:'30px 0px'}}>Contact Me</h1>
      <label style={{display:'flex',flexDirection:"column",margin:"5px 30px",fontSize:'25px',fontFamily:'Bebas Neue',color:'white'}}>
        Full Name
        <input type='text' id='name' name='name' onChange={onChange}/>
      </label>


      <label style={{display:'flex',flexDirection:"column",margin:"5px 30px",fontSize:'25px',fontFamily:'Bebas Neue',color:'white'}}>
        Email
        <input type='email' id='email' name='email'  onChange={onChange}/>
      </label>



      <label style={{display:'flex',flexDirection:"column",margin:"5px 30px",fontSize:'25px',fontFamily:'Bebas Neue',color:'white'}}>
        Message
        <textarea id='message' name='message'  onChange={onChange} placeholder='Drop Your Message'/>
      </label>

 <button type='submit' className="submit" style={{width:'200px',border:'2px solid purple',borderRadius:'5px',margin:"40px 30px",fontSize:'25px',fontFamily:'Bebas Neue'}}>Submit</button>
    </form>
    </section> */}


<div className='Contact' >
 <div className='Contact-Heading-1' style={{width:'100%'}}>Contact Me</div>
 <div className='Contact-Heading-2' style={{width:'100%',fontFamily:'BDSuper',color:'grey'}}>Have a message!</div>
 <div className='Contact-Box'>
 <div className='Contact-Box-1'>
    <div>
        {/* <div className='Contact-Box-11' style={{fontFamily:'Montserrat'}}>
            What can we do for you?
        </div> */}
        <form ref={form} onSubmit={sendEmail}>
        {/* <div className='Contact-Button'>

        <div className="button-radio" >
        <input type="radio" id="a25" name="contactfor" value='Software Development' />
        <label  for="a25" style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'13px'}}>Software Development</label>
        </div>

        <div className="button-radio">
        <input type="radio" id="a50" name="contactfor" value='Web Development' />
        <label  for="a50" style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'13px'}}>Web Development</label>
        </div>

        <div className="button-radio">
        <input type="radio" id="a75" name="contactfor" value='Contect Creation' />
        <label  for="a75" style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'13px'}}>Content Creation</label>
        </div>

        <div className="button-radio">
        <input type="radio" id="a100" name="contactfor" value='Other' />
        <label  for="a100" style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'13px'}}>Other</label>
        </div>
        </div> */}
        <div className='contact-input1' style={{color:(mode==='white'?'black':'white')}}>
        <TextField type='text' className='contact-input1-input' id="Your-Name" label="Your Name" name='from_name' variant="standard"  style={{margin:'20px 20px 0px 0px',color:(mode==='white'?'black':'white')}}/>
        <TextField type='email' className='contact-input1-input' id="Your-Email" label="Your Email" name='from_email' variant="standard"  style={{margin:'20px 20px 0px 0px',color:(mode==='white'?'black':'white')}}/>
        </div>
        <div className='contact-input2'>
        <TextField type='text' className='contact-input2-input' id="Project-Details" label="Your Message" variant="standard" name='message' style={{margin:'20px 20px 0px 0px',width:'98%',color:(mode==='white'?'black':'white')}}/>
        </div>
        <div>
            <button type='submit' onClick={Alert} className='Contact-Submit-Button' style={{margin:'30px 0px 0px 0px',border:'none',backgroundColor:'transparent',fontFamily:'BDSuper',color:(mode==='white'?'black':'white')}}>Send Message</button>
            <input className='contact-reset' type="reset" defaultValue="Reset" placeholder='Reset' style={{backgroundColor:'transparent',color:(mode==='white'?'black':'white'),fontFamily:'BDSuper',margin:'0px 0px 0px 100px',border:'0'}}/>
        </div>
        </form>
    </div>
 </div>
 <div className='Contact-Box-2'>
    <div style={{fontFamily:'BDSuper'}}>Tell me about your vision: which challenges are you facing? What are your goals and expectations? What would success look like and how much are you planning to get there?</div>
 </div>
  </div>
  </div>


    </>
  )
}

export default Contact;
