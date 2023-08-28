import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './python.css'
const Python = () => {
  const mode=localStorage.getItem("mode");
  return (
    <>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3'>PYTHON</h2>
    
    
    </div>



  <div className='concepts' style={{backgroundColor:(mode==='white'?'#F0EAD6':'	#303030')}}>
  <h4 className='my-5'>WATCH MY WORK WITH PYTHON AT MY <a href='https://github.com/akshaykumar56/Python' style={{textDecoration:'none',color:'red'}}>GITHUB</a></h4>
  <div className='concept my-2' >
  <h4 className='my-3'>PYTHON CONCEPTS</h4>
  <div className="container my-5 justify-content-center">
            <div className="row" >
            

            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Python Fundamentals</Card.Title>
            <Card.Text>
            Here we can learn about Python fundamentals
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/Python/tree/main/Basics' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Python DataStructure</Card.Title>
            <Card.Text>
            Here we see how to use List, Tuple, Set, Dictionary in JavaScript
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/Python/tree/main/DataTypes' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Conditional Expressions</Card.Title>
            <Card.Text>
            Here we see how to use conditional statements in Python
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/Python/tree/main/ConditionalExpression' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

              

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Loops</Card.Title>
            <Card.Text>
            Here we see how to use Loops in Python
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/Python/tree/main/Loop' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Function</Card.Title>
            <Card.Text>
            Here we see how to use function in Python
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/Python/tree/main/FunctionAndRecursion' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={6}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Class Concept in Python</Card.Title>
            <Card.Text>
            Here we see how to use class in python
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/Python/tree/main/Class' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={7}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Inheritance and Polymorphism</Card.Title>
            <Card.Text>
            Here we see how to make use of Inheritance and Polymorphism in Python
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/Python/tree/main/Inheritance' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={8}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Exception Handling In Python</Card.Title>
            <Card.Text>
            Here we see how to manage error and exception in python
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/Python/tree/main/ExceptionHandling' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={9}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>File Handling In Python</Card.Title>
            <Card.Text>
            Here we see how to handle files in python
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/Python/tree/main/File' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
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

export default Python
