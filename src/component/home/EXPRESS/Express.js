import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Express.css'
const Express = () => {
  const mode=localStorage.getItem("mode");
  return (
    <>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3' >EXPRESSJS</h2>
    
    </div>



    <div className='concepts' style={{backgroundColor:(mode==='white'?'#F0EAD6':'	#303030')}}>
    <h4 className='my-5'>WATCH MY WORK WITH EXPRESS AT MY <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Express' style={{textDecoration:"none",color:'red'}} >GITHUB</a></h4>
    <div className='concept my-2' >
    <h4 className='my-3'>EXPRESS CONCEPTS</h4>
    <div className="container my-5 justify-content-center">
             <div className="row" >
            


            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 1 - File Serving Using HTTP</Card.Title>
            <Card.Text>
            Here we  see how file can be serve using HTTP
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Express/FileServingUsingHttp' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Express 1</Card.Title>
            <Card.Text>
            Project Making Use Of Express
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Express/Express' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Express 2</Card.Title>
            <Card.Text>
            Project Making Use Of Express
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Express/Express2' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

              

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Express 3 </Card.Title>
            <Card.Text>
            Project Making Use Of Express
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/NodeJs/Project10' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Express 4  </Card.Title>
            <Card.Text>
            Project Making Use Of Express
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/NodeJs/Project%203' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>REST API </Card.Title>
            <Card.Text>
            Project Making Use Of Express
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/test111' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
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

export default Express
