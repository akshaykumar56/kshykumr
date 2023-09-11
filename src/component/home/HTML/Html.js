import React from 'react'
// import IMG from './HTML.jpg';
import './html.css'
import Card from 'react-bootstrap/Card';
const Html = () => {
  const mode=localStorage.getItem("mode");
  var newColor =(mode ==='white'?'blue':'white');
  var backgroundColor=(mode==='white'?'white':'black');
  var color=(mode==='white'?'blue':'white');


  return (
    <>
    <div className='container textAlign d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3'> HYPER TEXT MARKUP LANGUAGE</h2>
    
    </div>
    

    <div className='concepts' >
   <div className='concept my-2' style={{backgroundColor:(mode==='white'?'#ffdfff':'	#303030')}}>
   <h4 className='my-5'>WATCH MY WORK WITH HTML AT MY <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/HTML' style={{textDecoration: 'none',color:(mode==='white'?'blue':'red')}}>GITHUB</a></h4>
   <div className="container my-5 justify-content-center">
        <div className="row" >
            

            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'   style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Basic HTML Structure</Card.Title>
            <Card.Text>
            Here we can see what the basic structure of HTML document look like
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/HTML/blob/main/tut1.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            
            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Links and Images</Card.Title>
            <Card.Text>
            Here we see how to use Anchor tag and Img tag
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/HTML/blob/main/tut2.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Tables and Lists</Card.Title>
            <Card.Text>
            Here we see how to use Table and Lists in HTML
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/HTML/blob/main/tut3.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Forms</Card.Title>
            <Card.Text>
            Here we see how to use Form in HTML
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/HTML/blob/main/tut5.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Inline and Block elements</Card.Title>
            <Card.Text>
            Here we see what are inline elements and block elements
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/HTML/blob/main/tut6.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={6}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Ids and classes in HTML</Card.Title>
            <Card.Text>
            Here we see what are Ids and Classes in HTML
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/HTML/blob/main/tut7.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={7}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>HTML Entities</Card.Title>
            <Card.Text>
            Here we see what are HTML Entities
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/HTML/blob/main/tut8.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={8}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>HTML Semantics</Card.Title>
            <Card.Text>
            Here we see what are HTML Semantics
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/HTML/blob/main/tut9.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
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

export default Html
