import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './node.css'
const Node = () => {
  const mode=localStorage.getItem("mode");
  return (
<>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3'>NODEJS</h2>
    </div>


<div className='concepts' style={{backgroundColor:(mode==='white'?'#F0EAD6':'	#303030')}}>
<h4 className='my-5'>WATCH MY WORK WITH NODE AT MY <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/NodeJs' style={{textDecoration: 'none',color:'red'}}>GITHUB</a></h4>
<div className='concept my-2'>
<h4 className='my-3'>NODE CONCEPTS</h4>
<div className="container my-5 justify-content-center">
            <div className="row">
            
            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 1 - Dance Website</Card.Title>
            <Card.Text>
            In This Project I Develop a Website For a Dance Academy
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/NodeJs/Project%203' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            
            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 2</Card.Title>
            <Card.Text>
            In This Project I Develop a Responsive Website With The Help Of HtML, CSS , JavaScript.  
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/NodeJs/Project10' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 3 -iNotebook</Card.Title>
            <Card.Text>
            Full Stack Web Development project 
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/NodeJs/inotebook' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 4 - Login and SignUP Page</Card.Title>
            <Card.Text>
            How to create SignUp and Login Page
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React/ReactR/LOGINSIGNUP' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>EventEmitter</Card.Title>
            <Card.Text>
            Concept of EventEmitter in Node 
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/EventEmitter' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
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