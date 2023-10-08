import React from 'react'

import Card from 'react-bootstrap/Card';
const Akshay = () => {
  const mode=localStorage.getItem("mode");
  var newColor =(mode ==='white'?'black':'white');
  var newColor1 =(mode ==='white'?'grey':'grey');

  var backgroundColor=(mode==='white'?'white':'black');
  var color=(mode==='white'?'black':'white');
  return (
    <>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h1 className='heading my-3 d-flex' style={{textAlign:'center'}}>TOOLS</h1>
    
    </div>

    <div className='concepts'>
    <div className='concept'  style={{margin:"0px 10px",width:'100%'}}>
    <div className="container my-5 justify-content-center">
            <div className="row" >
              


            <div className="col-md-4 my-3" key={1}>
            <Card style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title>OpenAI ChatGPT</Card.Title>
            <Card.Text></Card.Text>
            <div className="d-flex flex-column">
            <a href='https://chat.openai.com/' target="_blank" rel="noreferrer" style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={2}>
            <Card style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title>MidJourney</Card.Title>
            <Card.Text></Card.Text>
            <div className="d-flex flex-column">
            <a href='https://discord.com/channels/662267976984297473/1008571045445382216' target="_blank" rel="noreferrer" style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={3}>
            <Card style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title>DeepAI</Card.Title>
            <Card.Text></Card.Text>
            <div className="d-flex flex-column">
            <a href='https://deepai.org' target="_blank" rel="noreferrer" style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={3}>
            <Card style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title>Roadmap</Card.Title>
            <Card.Text></Card.Text>
            <div className="d-flex flex-column">
            <a href='https://roadmap.sh' target="_blank" rel="noreferrer" style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={1}>
            <Card style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title>FreeCodeCamp</Card.Title>
            <Card.Text></Card.Text>
            <div className="d-flex flex-column">
            <a href='https://www.freecodecamp.org/' target="_blank" rel="noreferrer" style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
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

export default Akshay;
