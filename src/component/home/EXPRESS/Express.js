import React from 'react'
import Card from 'react-bootstrap/Card';

import './Express.css'
const Express = () => {
  const mode=localStorage.getItem("mode");
  var newColor =(mode ==='white'?'blue':'white');
  var backgroundColor=(mode==='white'?'white':'black');
  var color=(mode==='white'?'blue':'white');
  return (
    <>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3' >EXPRESSJS</h2>
    
    </div>



    <div className='concepts' >
    <div className='concept my-2' style={{backgroundColor:(mode==='white'?'#ffdfff':'	#303030')}}>
    <h4 className='my-5'>WATCH MY WORK WITH EXPRESS AT MY <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Express' style={{textDecoration:"none",color:(mode==='white'?'blue':'red')}} >GITHUB</a></h4>
    <div className="container my-5 justify-content-center">
             <div className="row" >
            


            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0px',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 1 - File Serving Using HTTP</Card.Title>
            <Card.Text>
            How Files can be serves using HTTP
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Express/FileServingUsingHttp' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0px',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Express 1</Card.Title>
            <Card.Text>
            Project Making Use Of Express
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Express/Express' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0px',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Express 2</Card.Title>
            <Card.Text>
            Project Making Use Of Express
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Express/Express2' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

              

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0px',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Express 3 </Card.Title>
            <Card.Text>
            Project Making Use Of Express
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/tree/main/NodeJs/Project10' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0px',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Express 4  </Card.Title>
            <Card.Text>
            Project Making Use Of Express
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/WebDevelopment/tree/main/NodeJs/Project%203' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={6}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0px',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>REST API </Card.Title>
            <Card.Text>
            Project Making Use Of Express
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/test111' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
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
