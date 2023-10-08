import Card from 'react-bootstrap/Card';
import React from 'react'
import TEXT from './TEXT.png'
import NEWS from './NEWS.png'
import DANCE from './DANCE.png'
import IEDU from './IEDU.png'
import INOT from './INOT.png'
import API from './API.png'
import HIMCO from './HIMCO.png'
import './project.css'
const Project = () => {
  const mode=localStorage.getItem("mode");
  var newColor =(mode ==='white'?'black':'white');
  var newColor1 =(mode ==='white'?'grey':'grey');

  var backgroundColor=(mode==='white'?'white':'black');
  var color=(mode==='white'?'black':'white');
  return (
    <div style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
      <div className="d-flex flex-column justify-content-center align-items-center">
      <div className='container textAlign d-flex flex-column align-items-center justify-content-around my-5'>
    <h2 className='my-3 our-projects' style={{fontFamily:'BDSuper',fontSize:'50px'}}>MY WORK</h2>
    </div>
         <div className='Web' style={{width:'100%'}}> 
         <h3 className="my-3 "  style={{fontSize:'30px',fontWeight:'600'}}>WEB DEVELOPMENT</h3>
         <div className="container my-3  justify-content-center">
             <div className="row" >
             <div className="col-md-4 my-3" key={1}>
            <Card  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Img variant="top" src={TEXT} style={{borderRadius:'0px'}}/>
            <Card.Body>
            <Card.Title className='titlename'>React App</Card.Title>
            <Card.Title className='titlename'>Text Analyser</Card.Title>
            <Card.Text>
            While Creating This Website I Understand The Concepts Of Props,State,Hooks.
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React/TextAnalyser' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            <a target="_blank" rel="noreferrer" href='https://aktextanalyser.netlify.app' style={{color:'white',textDecoration: 'none'}} ><button className="custom-btn btn-12" style={{margin:'20px 0px'}}><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Website</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            <div className="col-md-4 my-3" key={2}>
            <Card style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Img variant="top" src={NEWS} style={{borderRadius:'0px'}} />
            <Card.Body>
            <Card.Title className='titlename'>React App</Card.Title>
            <Card.Title className='titlename'>NEWSFeed</Card.Title>
            <Card.Text>
            In This Project I Learn How Single Page Websites Are Created. I Learn How To Retrive Data By Hitting API's, Infite Loading Concept, and Many More.
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React/newsapp' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12" style={{margin:'20px 0px'}}><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


            <div className="col-md-4 my-3" key={3}>
            <Card style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Img variant="top" src={DANCE} style={{borderRadius:'0px'}}/>
            <Card.Body>
            <Card.Title className='titlename'>Web Development Project</Card.Title>
            <Card.Title className='titlename'>Dance Website</Card.Title>
            <Card.Text>
            In Making This Project I Learn The Concepts Of <b>NodeJs, ExpressJs, MongoDb.</b>
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Project%203' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12" style={{margin:'20px 0px'}}><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={4}>
            <Card style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Img variant="top" src={INOT} style={{borderRadius:'0px'}}/>
            <Card.Body>
            <Card.Title className='titlename'>React App</Card.Title>
            <Card.Title className='titlename'>iNoteBook</Card.Title>
            <Card.Text>
             While Creating This Project I Learn How To Build Your Own API's, How LogIn And SignUp Works And Many More Things.
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React/inotebook' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12" style={{margin:'20px 0px'}}><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            <div className="col-md-4 my-3" key={5}>
            <Card style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Img variant="top" src={IEDU} style={{borderRadius:'0px'}}/>
            <Card.Body>
            <Card.Title className='titlename'>HTML, CSS, JavaScript</Card.Title>
            <Card.Text>
            In This Project I Learn How Responsive Website Are Build Only Using HTML, CSS, JavaScript.
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Project10' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            <a target="_blank" rel="noreferrer" href='https://cozy-kelpie-71a357.netlify.app/'  style={{color:'white',textDecoration: 'none'}} ><button className="custom-btn btn-12" style={{margin:'20px 0px'}}><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Website</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={6}>
            <Card style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Img variant="top" src={API} style={{borderRadius:'0px'}} />
            <Card.Body>
            <Card.Title className='titlename'>REST API</Card.Title>
            <Card.Title className='titlename'>CRUD Functionality</Card.Title>
            <Card.Text>
            In this project i create RESTAPI that can perform CRUD Functionalities.
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/test111' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12" style={{margin:'20px 0px'}}><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


            <div className="col-md-4 my-3" key={7}>
            <Card  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Img variant="top" src={HIMCO} style={{borderRadius:'0px'}}/>
            <Card.Body>
            <Card.Title className='titlename'>Full Stack Project</Card.Title>
            <Card.Text>
              In this project I build a website for Himachal Pradesh State Co-operative Development Federation Ltd.
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://www.himcofed.com/' style={{color:'white',textDecoration: 'none'}} ><button className="custom-btn btn-12" style={{margin:'20px 0px'}}><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Website</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>
           



            </div>
            </div>
        </div>


        <div className='Web my-5' style={{width:'100%'}}> 
         <h3 className="my-3" style={{fontSize:'30px',fontWeight:'600'}}>ARTIFICIAL INTELLIGENCE</h3>
         <div className="container my-3  justify-content-center" >
             <div className="row" >
             <div className="col-md-4 my-3" key={6}>
            <Card Card className='card12' style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>OpenCV Project</Card.Title>
            <Card.Text>
            Facial Expression, Age, Race, Gender Prediction
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/ArtificialIntelligence/blob/main/OpenCV/Real-Time%20Facial%20Expression%20Recognition%2C%20Age%2C%20Gender%20%2C%20Race%20Recoginition.ipynb' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            <div className="col-md-4 my-3" key={7}>
            <Card Card className='card12' style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Natural Language Processing Project</Card.Title>
            <Card.Text>
            Plagiarism Checker
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Palagrism%20Checker' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


            <div className="col-md-4 my-3" key={8}>
            <Card Card className='card12' style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'></Card.Title>
            <Card.Title className='titlename'>Linear Regression Project</Card.Title>
            <Card.Text>
            House Price Prediction
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/ArtificialIntelligence/blob/main/Machine%20Learning/LinearRegression/Linear%20Regression.ipynb' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


              <div className="col-md-4 my-3" key={9}>
              <Card Card className='card12' style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Logistic Regression Project</Card.Title>
            <Card.Text>Fake Advertisement</Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/ArtificialIntelligence/blob/main/Machine%20Learning/LogisticRegression/Logistic%20Regression.ipynb' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={10}>
            <Card Card className='card12' style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>K Nearest Neighbour Project</Card.Title>
            <Card.Text>
            Cloth Size Prediction
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Project10' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={11}>
            <Card Card className='card12' style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Support Vector Machines Project</Card.Title>
            <Card.Text>
            Diabetes Prediction
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/ArtificialIntelligence/blob/main/Machine%20Learning/DiabetesSVM/Daibetes.ipynb' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            <div className="col-md-4 my-3" key={12}>
            <Card Card className='card12' style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Decision Tree Project</Card.Title>
            <Card.Text>
            Learn What Decision Tree Is And How To Use It
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/ArtificialIntelligence/blob/main/Machine%20Learning/DecisionTree/DecisionTree.ipynb' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={13}>
            <Card Card className='card12' style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Naive Bayes</Card.Title>
            <Card.Text>
            Weather Prediction
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/ArtificialIntelligence/blob/main/Machine%20Learning/Naive%20Bayes/Naive%20Bayes%20Algorithm.ipynb' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            <div className="col-md-4 my-3" key={14}>
            <Card Card className='card12' style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Web Scrapping</Card.Title>
            <Card.Text>
            Learn How to Scrap Data From Website
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Deep%20Learning/WebScrapping' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={15}>
            <Card Card className='card12' style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Natural Language Processing</Card.Title>
            <Card.Text>
            Create a Voice Assistant
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Voice%20Assistant' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={16}>
            <Card Card className='card12' style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0', boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Movie Recommender System</Card.Title>
            <Card.Text>
            Create a Movie Recommender System
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer" href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Machine%20Learning/Recommendation%20system' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Project
