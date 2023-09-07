import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './CPP.css'
const Cpp = () => {
  const mode=localStorage.getItem("mode");
  var newColor =(mode ==='white'?'black':'white');
  var backgroundColor=(mode==='white'?'white':'black');
  var color=(mode==='white'?'black':'white');
  return (
    <>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3'>C PLUS PLUS</h2>
    
    </div>

    <div className='concepts' >
    <div className='concept my-2' style={{backgroundColor:(mode==='white'?'#DCDCDC':'	#303030')}}>
    <h4 className='my-5'>WATCH MY WORK WITH C PLUS PLUS AT MY <nobr> </nobr><a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CPP' style={{textDecoration: 'none',color:(mode==='white'?'blue':'red')}}>GITHUB</a></h4>
    <div className="container my-5 justify-content-center">
            <div className="row" >
              


            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Array, Function, Pointers</Card.Title>
            <Card.Text>
            Learn About Array, Function, Pointers
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CPP/tree/main/ArrayPointerFunction' style={{color:'white',textDecoration: 'none'}}><Button  className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>User Defined DataTypes</Card.Title>
            <Card.Text>
            Learn About Custom Datatypes
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CPP/tree/main/UserDefinedData' style={{color:'white',textDecoration: 'none'}}><Button  className='button1'>Visit Code </Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Conditional Statements and Loops</Card.Title>
            <Card.Text>
            Learn About Conditional Statements & Loops
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CPP/tree/main/ConditionAndLoop' style={{color:'white',textDecoration: 'none'}}><Button  className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

              

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Classes</Card.Title>
            <Card.Text>
            Learn About Class & Object
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CPP/tree/main/Class' style={{color:'white',textDecoration: 'none'}}><Button  className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Inheritance</Card.Title>
            <Card.Text>
            Learn About Inheritance
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CPP/tree/main/Inheritance' style={{color:'white',textDecoration: 'none'}}><Button  className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={6}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Polymorphism</Card.Title>
            <Card.Text>
            Learn About Polymorphism
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CPP/tree/main/Polymorphism' style={{color:'white',textDecoration: 'none'}}><Button  className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={7}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Exception Handling In CPP</Card.Title>
            <Card.Text>
            Error Handling
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CPP/tree/main/Exception%20Handling' style={{color:'white',textDecoration: 'none'}}><Button  className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={8}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>File Handling In CPP</Card.Title>
            <Card.Text>
            Files Access & Management
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CPP/tree/main/File' style={{color:'white',textDecoration: 'none'}}><Button  className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={9}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Templates In CPP</Card.Title>
            <Card.Text>
            Templates
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CPP/tree/main/Template' style={{color:'white',textDecoration: 'none'}}><Button  className='button1'>Visit Code</Button></a>
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
