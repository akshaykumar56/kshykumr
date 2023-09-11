import React from 'react'
import './Css.css'
import Card from 'react-bootstrap/Card';

const Css = () => {
  const mode=localStorage.getItem("mode");
  var newColor =(mode ==='white'?'blue':'white');
  var backgroundColor=(mode==='white'?'white':'black');
  var color=(mode==='white'?'blue':'white');
  return (
    <>
    <div className='container textAlign d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3' >CASCADING STYLE SHEET</h2>
    </div>
    

    <div className='concepts'>
   <div className='concept my-2' style={{backgroundColor:(mode==='white'?'#ffdfff':'	#303030')}}>
   <h4 className='my-5 '>WATCH MY WORK WITH CSS AT MY <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS' style={{textDecoration: 'none',color:(mode==='white'?'blue':'red')}}>GITHUB</a></h4>
   <div className="container my-5 justify-content-center">
             <div className="row" >
            

              <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Selectors</Card.Title>
            <Card.Text>
            Learn About CSS Selectors
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css01.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            
              <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Developer Tool Tutorials</Card.Title>
            <Card.Text>
              CSS Developer Tool
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css02.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Border</Card.Title>
            <Card.Text>
            Learn About CSS Border
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css05.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Box Model</Card.Title>
            <Card.Text>
            Learn About CSS Box Model
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css06.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Pseudo Selectors</Card.Title>
            <Card.Text>
            Learn About Pseudo Selectors
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css08.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={6}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Display Property</Card.Title>
            <Card.Text>
            Learn About Display Property
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css10.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={7}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Position Property</Card.Title>
            <Card.Text>
            Learn About Position Property
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css11.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={8}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Visiblity and Z-index</Card.Title>
            <Card.Text>
            Learn About Visiblity and Z-index
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css12.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={9}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Flexbox</Card.Title>
            <Card.Text>
            Learn About Flexbox
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css13.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={10}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Media Query</Card.Title>
            <Card.Text>
            Learn About Media Query
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css15.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={11}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Advanced CSS selectors</Card.Title>
            <Card.Text>
            Learn About Advance CSS Selectors
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css16.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={12}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Before and After Pseudo Selector</Card.Title>
            <Card.Text>
            Learn About Before and After Pseudo Selector
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css17.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={13}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Attributes and nth child Pseudo Selectors</Card.Title>
            <Card.Text>
            Learn About Attributes and nth-child Pseudo Selectors
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css18.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={14}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Box shadow and Text shadow</Card.Title>
            <Card.Text>
            Learn About Box shadow and Text shadow
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css19.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={15}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Keyframe</Card.Title>
            <Card.Text>
            Learn About Keyframe 
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css21.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={16}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Transition property</Card.Title>
            <Card.Text>
            Learn About Transition Property
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css22.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={17}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Grid</Card.Title>
            <Card.Text>
            Learn About CSS Grid 
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css24.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={18}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Templates</Card.Title>
            <Card.Text>
            Learn About Templates
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/css28.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={19}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Color</Card.Title>
            <Card.Text>
            Learn About Colors
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/csscolor.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={20}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Color</Card.Title>
            <Card.Text>
            Learn About Font
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/CSS/blob/main/cssfont.html' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span>Click!</span><span>Visit Code</span></button></a>
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

export default Css
