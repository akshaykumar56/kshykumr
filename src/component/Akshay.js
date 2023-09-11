import React from 'react'

import Card from 'react-bootstrap/Card';
const Akshay = () => {
  const mode=localStorage.getItem("mode");
  return (
    <>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h1 className='heading my-3 d-flex' style={{textAlign:'center'}}>TOOLS/WEBSITES TO IMPROVE YOUR PRODUCTIVITY </h1>
    
    </div>

    <div className='concepts' style={{backgroundColor:(mode==='white'?'#F0F8FF':'	#303030')}}>
    <div className='concept'  style={{margin:"50px 10px",width:'80%'}}>
    <div className="container my-5 justify-content-center">
            <div className="row" >
              


            <div className="col-md-4 my-3" key={1}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'blue':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title>OpenAI ChatGPT</Card.Title>
            <Card.Text></Card.Text>
            <div className="d-flex flex-column">
            <a href='https://chat.openai.com/' target="_blank" rel="noreferrer" style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Website</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={2}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'blue':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title>MidJourney</Card.Title>
            <Card.Text></Card.Text>
            <div className="d-flex flex-column">
            <a href='https://discord.com/channels/662267976984297473/1008571045445382216' target="_blank" rel="noreferrer" style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Website</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={3}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'blue':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title>DeepAI</Card.Title>
            <Card.Text></Card.Text>
            <div className="d-flex flex-column">
            <a href='https://deepai.org' target="_blank" rel="noreferrer" style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Website</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={3}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'blue':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title>Roadmap</Card.Title>
            <Card.Text></Card.Text>
            <div className="d-flex flex-column">
            <a href='https://roadmap.sh' target="_blank" rel="noreferrer" style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Website</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={1}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'blue':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title>FreeCodeCamp</Card.Title>
            <Card.Text></Card.Text>
            <div className="d-flex flex-column">
            <a href='https://www.freecodecamp.org/' target="_blank" rel="noreferrer" style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Website</span></button></a>
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
