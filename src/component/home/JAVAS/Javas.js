import React from 'react'
import './javas.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Javas = () => {
  const mode=localStorage.getItem("mode");
  return (
    <>
    <div className='container textAlign d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3' >JAVASCRIPT</h2>
    
    </div>

    <div className='concepts' style={{backgroundColor:(mode==='white'?'#F0EAD6':'	#303030')}}>
   <h4 className='my-5'>WATCH MY WORK WITH JAVASCRIPT AT MY <a href='https://github.com/akshaykumar56/JavaScript' style={{textDecoration: 'none',color:'red'}}>GITHUB</a></h4> 
   <div className='concept my-2' >
   <h4 className='my-3'>JAVASCRIPT CONCEPTS</h4>
   <div className="container my-5 justify-content-center">
        <div className="row" >
            

            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>JavaScript Operators</Card.Title>
            <Card.Text>
            Here we can learn about javascript operators 
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/JavaScript/blob/main/js2.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            

            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>JavaScript String</Card.Title>
            <Card.Text>
            Here we see about javascript strings
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/JavaScript/blob/main/js3.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>String Operations</Card.Title>
            <Card.Text>
            Here we see how to use javascript operations
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/JavaScript/blob/main/js4.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>JavaScript Conditional Statements</Card.Title>
            <Card.Text>
            Here we see how to use Form conditional statements in javascript
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/JavaScript/blob/main/js5.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>JavaScript array and object</Card.Title>
            <Card.Text>
            Here we see about javascript arrays and object
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/JavaScript/blob/main/js6.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={6}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>JavaScript Functions</Card.Title>
            <Card.Text>
            Here we see how to use function in javascript
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/JavaScript/blob/main/js8.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={7}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>JavaScript Loops</Card.Title>
            <Card.Text>
            Here we see how to use loops in javascript
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/JavaScript/blob/main/js9.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={8}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>JavaScript Selectors</Card.Title>
            <Card.Text>
            Here we see how to use selectors in JavaScript and Update DOM
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/JavaScript/blob/main/js10.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={9}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Events in JavaScript</Card.Title>
            <Card.Text>
            Here we see about event handling in JavaScript
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/JavaScript/blob/main/js11.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={10}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>SetTimeOut and Setinterval</Card.Title>
            <Card.Text>
            Here we see how to use SetTimeOut and Settimeinterval in JavaScript
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/JavaScript/blob/main/js12.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={11}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Javascript Date and Time</Card.Title>
            <Card.Text>
            Here we see how to use Date and Time in JavaScript
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/JavaScript/blob/main/js13.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={12}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Javascript Arrow Function</Card.Title>
            <Card.Text>
            Here we see about arrow function
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/JavaScript/blob/main/js14.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={13}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Javascript Math Object</Card.Title>
            <Card.Text>
            Here we see about math object in javascript
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/JavaScript/blob/main/js15.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
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

export default Javas
