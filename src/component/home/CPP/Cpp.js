import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './CPP.css'
const Cpp = () => {
  const mode=localStorage.getItem("mode");
  return (
    <>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3'>C PLUS PLUS</h2>
    
    </div>

    <div className='concepts' style={{backgroundColor:(mode==='white'?'#F0EAD6':'	#303030')}}>
    <h4 className='my-5'>WATCH MY WORK WITH C PLUS PLUS AT MY <nobr> </nobr><a href='https://github.com/akshaykumar56/CPP' style={{textDecoration: 'none',color:'red'}}>GITHUB</a></h4>
    <div className='concept my-2' >
    <h4 className='my-3'>CPP CONCEPTS</h4>
    <div className="container my-5 justify-content-center">
            <div className="row" >
              


            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Array, Function, Pointers</Card.Title>
            <Card.Text>
            Here we can learn the concept of Array, Function, Pointers in CPP
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CPP/tree/main/ArrayPointerFunction' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>User Defined DataTypes</Card.Title>
            <Card.Text>
            Here we see how to define custom datatypes in CPP
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CPP/tree/main/UserDefinedData' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code </Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Conditional Statements and Loops</Card.Title>
            <Card.Text>
            Here we see how to use conditional statements and loops in Python
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CPP/tree/main/ConditionAndLoop' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

              

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Classes</Card.Title>
            <Card.Text>
            Here we see concept of classes in CPP
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CPP/tree/main/Class' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Inheritance</Card.Title>
            <Card.Text>
            Here we see what is inheritance in CPP
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CPP/tree/main/Inheritance' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={6}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Polymorphism</Card.Title>
            <Card.Text>
            Here we see what is Polymorphism in CPP
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CPP/tree/main/Polymorphism' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={7}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Exception Handling In CPP</Card.Title>
            <Card.Text>
            Here we see how to manage error and exception in CPP
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CPP/tree/main/Exception%20Handling' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={8}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>File Handling In CPP</Card.Title>
            <Card.Text>
            Here we see how to handle files in CPP
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CPP/tree/main/File' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={9}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Templates In CPP</Card.Title>
            <Card.Text>
            Here we see the concept of template in CPP
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CPP/tree/main/Template' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
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

export default Cpp
