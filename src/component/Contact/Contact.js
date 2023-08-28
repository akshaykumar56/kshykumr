import React from 'react'
import IMG from './Ak.jpg'
import IMG2 from './Ak2.png'
import Card from 'react-bootstrap/Card';
// import MovingComponent from 'react-moving-text';
import './Contact.css'
// import Form from '../Form'
import { useState } from 'react';


const Contact = () => {
  const mode=localStorage.getItem('mode');



  const[note,setNote] = useState({name:"",email:"",message:""})
  const onChange=(e)=>{
      setNote({...note,[e.target.name]:e.target.value})
    }
 console.log(note)

const handleSubmit = async () => { 
let bodyData={"data":{"name": note.name,"email": note.email,"message":note.message}}
const response = await fetch("https://kshykumr-backend.onrender.com/api/contacts", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyData)
});
const json = await response.json()
console.log(json)

}

  return (
  <>
  <div className='contact' style={{backgroundImage:(mode==='white'?(`url(${IMG2}`):(`url(${IMG}`)),backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize: 'cover',width:'100%',height:'300px'}}>    
  {/* <div className="text mx-2"> */}
  {/* <MovingComponent className='my-5'
  type="popIn"
  duration="1500ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="2"
  fillMode="none"> */}
  <div className='Line' style={{color:(mode==='white'?'white':'white'),fontFamily: "'Hind Siliguri', sans-serif",zIndex:'10'}}><b>GET IN TOUCH</b></div>
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
        <Card.Title style={{fontSize:'25px'}}>Mobile</Card.Title>
        <Card.Text>
         <b>8894055729</b> 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>



    <div className="col-md-4 my-3" key={2}>
    <Card className="card card-links" style={{backgroundColor:(mode==='white'?'white':'#212529'),borderRadius:'0px'}}>
      <Card.Body>
        <Card.Title style={{fontSize:'25px'}}>GMail</Card.Title>
        <Card.Text>
          <a href='https://mail.google.com/mail/u/?authuser=kshykumr@gmail.com'  target="_blank" rel="noopener noreferrer" style={{color:(mode==='white'?'black':'white'),fontFamily: "'Anton', sans-serif"}}><b>kshykumr@gmail.com</b></a>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>


    <div className="col-md-4 my-3" key={3}>
    <Card  className="card card-links" style={{backgroundColor:(mode==='white'?'white':'#212529'),borderRadius:'0px'}}>
      <Card.Body>
        <Card.Title style={{fontSize:'25px'}}>GitHub</Card.Title>
        <Card.Text>
        <a href='https://github.com/akshaykumar56'  target="_blank" rel="noopener noreferrer" style={{color:(mode==='white'?'black':'white'),fontFamily: "'Anton', sans-serif"}}><b>github.com/akshaykumar56</b></a>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className="col-md-4 my-3" key={4}>
    <Card className="card card-links" style={{backgroundColor:(mode==='white'?'white':'#212529'),borderRadius:'0px'}}>
      <Card.Body>
        <Card.Title style={{fontSize:'25px'}}>LinkedIn</Card.Title>
        <Card.Text>
        <a href='https://linkedin.com/in/akshaypalsra'  target="_blank" rel="noopener noreferrer" style={{color:(mode==='white'?'black':'white'),fontFamily: "'Anton', sans-serif"}}><b>linkedin.com/in/akshaypalsra</b></a>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className="col-md-4 my-3" key={5}>
    <Card className="card card-links" style={{backgroundColor:(mode==='white'?'white':'#212529'),borderRadius:'0px'}}>
      <Card.Body>
        <Card.Title style={{fontSize:'25px'}}>Instagram</Card.Title>
        <Card.Text>
        <a href='https://www.instagram.com/kshykumr28'  target="_blank" rel="noopener noreferrer" style={{color:(mode==='white'?'black':'white'),fontFamily: "'Anton', sans-serif"}}><b>kshykumr28</b></a>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className="col-md-4 my-3" key={6}>
    <Card className="card card-links" style={{backgroundColor:(mode==='white'?'white':'#212529'),borderRadius:'0px'}}>
      <Card.Body>
        <Card.Title style={{fontSize:'25px'}}>Skype</Card.Title>
        <Card.Text>
        <b style={{fontFamily: "'Anton', sans-serif"}}>live:.cid.964c207dbbbb11f</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

  </div>
  </div>

  </div>
  </div>

  <section style={{display:'flex',justifyContent:'center',alighItems:'center',marginBottom:'30px'}}>
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

 <button type='submit' style={{width:'200px',border:'2px solid purple',borderRadius:'5px',background:'transparent',margin:"40px 30px",fontSize:'25px',fontFamily:'Bebas Neue',color:'white'}}>Submit</button>
    </form>
    </section>


    </>
  )
}

export default Contact
