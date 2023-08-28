import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import './Mongo.css'
const Mongo = () => {
  const mode=localStorage.getItem("mode");
  return (
<>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3' >MONGODB</h2>
    
    </div>



    <div className='concepts' style={{backgroundColor:(mode==='white'?'#F0EAD6':'	#303030')}}>
    <h4 className='my-5' >WATCH MY WORK WITH MONGODB AT MY <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/mongoDB' style={{textDecoration: 'none',color:'red'}}>GITHUB</a></h4>
    <div className='concept my-2'>
    <h4 className='my-3'>MONGODB CONCEPTS</h4>
    <div className="container my-5 justify-content-center">
        <div className="row" >
            

            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>MongoDB Fundamentals</Card.Title>
            <Card.Text>
            Here we can learn about MongoDB fundamentals
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/blob/main/mongoDB/mongo.txt' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Insert Data In MongoDB</Card.Title>
            <Card.Text>
            Here we see how to insert data in MongoDB
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/blob/main/mongoDB/tut1.js' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Find Data in MongoDB</Card.Title>
            <Card.Text>
            Here we see how to find data in MongoDB
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/blob/main/mongoDB/tut2.js' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

              

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Delete Data from MongoDB</Card.Title>
            <Card.Text>
            Here we see how to delete data from MongoDB
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/blob/main/mongoDB/tut3.js' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Update Data in MongoDB</Card.Title>
            <Card.Text>
            Here we see how to update data in MongoDB
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/blob/main/mongoDB/tut4.js' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>MongoDB Project</Card.Title>
            <Card.Text>
            Project to see MongoDB working
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/mongoDB/MongoWorking' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
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

export default Mongo
