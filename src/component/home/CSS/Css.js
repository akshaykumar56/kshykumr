import React from 'react'
import './Css.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Css = () => {
  const mode=localStorage.getItem("mode");
  return (
    <>
    <div className='container textAlign d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3' >CASCADING STYLE SHEET</h2>
    </div>
    

    <div className='concepts' style={{backgroundColor:(mode==='white'?'#F0EAD6':'	#303030')}}>
   <h4 className='my-5 '>WATCH MY WORK WITH CSS AT MY <a href='https://github.com/akshaykumar56/CSS' style={{textDecoration: 'none',color:'red'}}>GITHUB</a></h4>
   <div className='concept my-2' >
   <h4 className='my-3'>CSS CONCEPTS</h4>
   <div className="container my-5 justify-content-center">
             <div className="row" >
            

              <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS selectors</Card.Title>
            <Card.Text>
            Here we can see what CSS Selectors are
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css01.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            
              <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Developer tool tutorials</Card.Title>
            <Card.Text>
              Css Developer Tool
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css02.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS border</Card.Title>
            <Card.Text>
            Here we see how to use Css border
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css05.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS box model</Card.Title>
            <Card.Text>
            Here we see what is CSS box Model
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css06.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Pseudo selectors</Card.Title>
            <Card.Text>
            Here we see what are Pseudo selectors
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css08.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={6}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS  Display Property</Card.Title>
            <Card.Text>
            Here we see what is Display property
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css10.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={7}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Position Property</Card.Title>
            <Card.Text>
            Here we see what Is Position property
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css11.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={8}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Visiblity and Z-index</Card.Title>
            <Card.Text>
            Here we see what are Visiblity and Z-index property
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css12.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={9}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Flexbox </Card.Title>
            <Card.Text>
            Here we see what is Flexbox
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css13.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={10}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Media Query </Card.Title>
            <Card.Text>
            Here we see what is Media Query
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css15.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={11}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Advanced CSS selectors </Card.Title>
            <Card.Text>
            Here we learn about advance Css selectors
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css16.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={12}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Before and After Pseudo selector</Card.Title>
            <Card.Text>
            Here we learn about Before and After Pseudo selector
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css17.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={13}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Attributes and nth child pseudo selectors</Card.Title>
            <Card.Text>
            Here we learn about Attributes and nth child pseudo selectors
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css18.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={14}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Box shadow and Text shadow</Card.Title>
            <Card.Text>
            Here we learn about Box shadow and Text shadow
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css19.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={15}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Keyframe</Card.Title>
            <Card.Text>
            Here we learn how to use keyframe to generate animations
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css21.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={16}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Transition property</Card.Title>
            <Card.Text>
            Here we learn how to use Transition Property
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css22.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={17}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Grid</Card.Title>
            <Card.Text>
            Here we learn how to use Grid in Css
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css24.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={18}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Templates</Card.Title>
            <Card.Text>
            Here we learn how to use Templates in Css
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/css28.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={19}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Color</Card.Title>
            <Card.Text>
            Here we learn how to use color in Css
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/csscolor.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={20}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>CSS Color</Card.Title>
            <Card.Text>
            Here we learn how to use font in Css
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/CSS/blob/main/cssfont.html' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
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
