import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import './ai.css'
const AI = () => {
  const mode=localStorage.getItem("mode");
  console.log(mode);
  return (
    <>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3' >ARTIFICIAL INTELLIGENCE</h2>
    
    </div>

  
   <div className='concepts' style={{backgroundColor:(mode==='white'?'#F0EAD6':'	#303030')}}>
   <h4 className='my-5'>WATCH MY WORK WITH AI AT MY <a href='https://github.com/akshaykumar56/ArtificialIntelligence' style={{textDecoration: 'none',color:'red'}}>GITHUB</a></h4>
   <div className='concept my-2'>
   <h4 className='my-3'>AI CONCEPTS</h4>
   <div className="container my-5 justify-content-center">
             <div className="row" >
            

            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Python Fundamentals</Card.Title>
            <Card.Text>
            Here we can learn about Python fundamentals
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Python' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>NumPy</Card.Title>
            <Card.Text>
            Here we see what is Numpy
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Machine%20Learning/Numpy' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Pandas</Card.Title>
            <Card.Text>
            Here we see The concept of Pandas in Python
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Machine%20Learning/Pandas' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Matplotlib</Card.Title>
            <Card.Text>
            Here we see how to use Matplotlib
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Machine%20Learning/Matplotlib' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Machine Learning</Card.Title>
            <Card.Text>
            Here we learn about supervised and unsupervised algorithms
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Machine%20Learning' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={6}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Natural Language Processing</Card.Title>
            <Card.Text>
            Here we see the concept of NLP
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Deep%20Learning/NLP' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={7}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Deep Learning</Card.Title>
            <Card.Text>
            Here we see how to use Deep Learning Algorithms
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Deep%20Learning' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


              <div className="col-md-4 my-3" key={8}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Web Scrapping</Card.Title>
            <Card.Text>
            Here we see how web scrapping is done
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Deep%20Learning/WebScrapping' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={9}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>OpenCV</Card.Title>
            <Card.Text>
            Here we see how to use OpenCV
            </Card.Text>
            <div className="d-flex flex-column">
           <a href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/OpenCV' style={{color:'white',textDecoration: 'none'}}> <Button variant="primary" className='button1'>Visit Code</Button></a>
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

export default AI
