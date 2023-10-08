import React from 'react'
import Card from 'react-bootstrap/Card';


import './Mongo.css'
const Mongo = () => {
  const mode=localStorage.getItem("mode");
  var newColor =(mode ==='white'?'black':'white');
  var newColor1 =(mode ==='white'?'grey':'grey');
  var backgroundColor=(mode==='white'?'white':'black');
  var color=(mode==='white'?'black':'white');
  return (
<>
    <div className='concepts' >
    <div className='concept my-5' style={{backgroundColor:(mode==='white'?'white':'black')}}>
  <h2 style={{fontFamily: "'Hind Siliguri', sans-serif",display:'flex',justifyContent:'center',alignItems:'center'}}><a className='my-3 our-services' target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/Sql' style={{textDecoration:'none',color:(mode==='white'?'black':'white'),fontFamily: 'BDSuper'}}>MONGO</a></h2>
    <div className="container my-5 justify-content-center">
        <div className="row" >
            

            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>MongoDB Fundamentals</Card.Title>
            <Card.Text>
            Learn About MongoDB Fundamentals
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/blob/main/mongoDB/mongo.txt' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Insert Data In MongoDB</Card.Title>
            <Card.Text>
             Learn To Insert data in MongoDB
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/blob/main/mongoDB/tut1.js' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Find Data in MongoDB</Card.Title>
            <Card.Text>
            Learn To Find data in MongoDB
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/blob/main/mongoDB/tut2.js' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

              

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Delete Data from MongoDB</Card.Title>
            <Card.Text>
            Learn To Delete data from MongoDB
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/blob/main/mongoDB/tut3.js' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Update Data in MongoDB</Card.Title>
            <Card.Text>
            Learn To Update data in MongoDB
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/blob/main/mongoDB/tut4.js' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={6}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>MongoDB Project</Card.Title>
            <Card.Text>
            Project to see MongoDB working
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/tree/main/mongoDB/MongoWorking' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
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
