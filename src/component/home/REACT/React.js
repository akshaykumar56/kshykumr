import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './react.css'
const React1 = () => {
  const mode=localStorage.getItem("mode");
  return (
    <>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
  <h2 className='heading my-3'>REACTJS</h2>
    
    </div>


        <div className='concepts' style={{backgroundColor:(mode==='white'?'#F0EAD6':'	#303030')}}>
        <h4 className='my-5'>WATCH MY WORK WITH REACT AT MY <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React' style={{textDecoration: 'none',color:'red'}}>GITHUB</a></h4>
        <div className='concept my-2' >
        <h4 className='my-3'>REACT CONCEPTS</h4>
        <div className="container my-5 justify-content-center">
        <div className="row" >
            

            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 1 - textAnalyser</Card.Title>
            <Card.Text>
            While Making this Project I Learn About Basic Fundamentals of React.
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React/TextAnalyser' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            
            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 2 - NewsApp</Card.Title>
            <Card.Text>
            While Making This Project I Learn how to Use WebAPI's in Your Project.
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React/newsapp' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 3 - Login And SignUp Pages</Card.Title>
            <Card.Text>
            Here we see how to create your own API's.
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React/ReactR/LOGINSIGNUP' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 4 - iNoteBook</Card.Title>
            <Card.Text>
            Full Stack Web Development Project
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React/inotebook' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Project 5 - My PortFolio Website </Card.Title>
            <Card.Text>
            In This Project I Develop My PortFolio Website
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Project%204' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>UseContext Hook</Card.Title>
            <Card.Text>
            How to use useContext hook in React.
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56?tab=repositories' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
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

export default React1
