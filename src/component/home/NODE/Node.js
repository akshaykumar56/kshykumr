import React from 'react'

import Card from 'react-bootstrap/Card';

import './node.css'
const Node = () => {
  const mode=localStorage.getItem("mode");
  var newColor =(mode ==='white'?'blue':'white');
  var backgroundColor=(mode==='white'?'white':'black');
  var color=(mode==='white'?'blue':'white');
  return (
<>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3'>NODEJS</h2>
    </div>


<div className='concepts' >
<div className='concept my-2' style={{backgroundColor:(mode==='white'?'#ffdfff':'	#303030')}}>
<h4 className='my-5'>WATCH MY WORK WITH NODE AT MY <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/tree/main/NodeJs' style={{textDecoration: 'none',color:(mode==='white'?'blue':'red')}}>GITHUB</a></h4>
<div className="container my-5 justify-content-center">
            <div className="row">
            
            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 1 - Dance Website</Card.Title>
            <Card.Text>
            Developed a Website For a Dance Academy
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/tree/main/NodeJs/Project%203' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            
            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 2</Card.Title>
            <Card.Text>
            Developed a Responsive Website With The Help Of HTML, CSS , JavaScript.  
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/tree/main/NodeJs/Project10' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 3 -iNotebook</Card.Title>
            <Card.Text>
            Full Stack Web Development Project 
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/tree/main/NodeJs/inotebook' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 4 - Login and SignUP Page</Card.Title>
            <Card.Text>
            How to create SignUp and Login Page
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React/ReactR/LOGINSIGNUP' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>EventEmitter</Card.Title>
            <Card.Text>
            Concept of EventEmitter
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/EventEmitter' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            </div>
            </div>
        </div>
   </div>
   
    </>
  )
}

export default Node;