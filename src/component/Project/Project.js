import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import TEXT from './TEXT.png'
import NEWS from './NEWS.png'
import DANCE from './DANCE.png'
import IEDU from './IEDU.png'
import INOT from './INOT.png'
import API from './API.png'
import './project.css'
const Project = () => {
  const mode=localStorage.getItem("mode");
  return (
    <div style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
      <div className="d-flex flex-column justify-content-center align-items-center">
      <div className='container textAlign d-flex flex-column align-items-center justify-content-around my-5'>
    <h2 className='heading my-3'>PROJECTS</h2>
    </div>
         <div className='Web' style={{backgroundColor:(mode==='white'?'#F0EAD6':'#303030'),width:'100%'}}> 
         <h3 className="my-3 "  >WEB DEVELOPMENT</h3>
         <div className="container my-3  justify-content-center">
             <div className="row" >
             <div className="col-md-4 my-3" key={1}>
            <Card  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Img variant="top" src={TEXT} style={{borderRadius:'0px'}}/>
            <Card.Body>
            <Card.Title className='titlename'>React Project</Card.Title>
            <Card.Title className='titlename'>Text Analyser</Card.Title>
            <Card.Text>
            While Creating This Website I Understand The Concepts Of Props,State,Hooks.
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React/TextAnalyser' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            <a href='https://aktextanalyser.netlify.app' target="_blank" rel="noreferrer" style={{color:'white',textDecoration: 'none'}} ><Button variant="primary" className="button1">Visit WebSite</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            <div className="col-md-4 my-3" key={2}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Img variant="top" src={NEWS} style={{borderRadius:'0px'}} />
            <Card.Body>
            <Card.Title className='titlename'>React Project</Card.Title>
            <Card.Title className='titlename'>NEWSFeed</Card.Title>
            <Card.Text>
            This Is Basically A Website Based On NewsAPI. In This Project I Learn How Single Page Websites Are Created. I Learn How To Retrive Data By Hitting API's, Infite Loading Concept, and Many More.
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React/newsapp' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


            <div className="col-md-4 my-3" key={3}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Img variant="top" src={DANCE} style={{borderRadius:'0px'}}/>
            <Card.Body>
            <Card.Title className='titlename'>HTML,CSS,JavaScript,ExpressJs,NodeJs,MongoDB,Pug Project</Card.Title>
            <Card.Title className='titlename'>Dance Website</Card.Title>
            <Card.Text>
            In Making This Project I Learn The Concepts Of <b>NodeJs, ExpressJs, MongoDb.</b>
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Project%203' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={4}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Img variant="top" src={INOT} style={{borderRadius:'0px'}}/>
            <Card.Body>
            <Card.Title className='titlename'>React App</Card.Title>
            <Card.Title className='titlename'>iNoteBook</Card.Title>
            <Card.Text>
             While Creating This Project I Learn How To Build Your Own API's, How LogIn And SignUp Works And Many More Things.
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/React/inotebook' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            <div className="col-md-4 my-3" key={5}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Img variant="top" src={IEDU} style={{borderRadius:'0px'}}/>
            <Card.Body>
            <Card.Title className='titlename'>HTML, CSS, JavaScript</Card.Title>
            <Card.Text>
            In This Project I Learn How Responsive Website Are Build Only Using HTML, CSS, JavaScript.
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Project10' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            <a href='https://cozy-kelpie-71a357.netlify.app/' target="_blank" rel="noreferrer" style={{color:'white',textDecoration: 'none'}} ><Button variant="primary" className="button1">Visit WebSite</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>



            <div className="col-md-4 my-3" key={6}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Img variant="top" src={API} style={{borderRadius:'0px'}} />
            <Card.Body>
            <Card.Title className='titlename'>REST API</Card.Title>
            <Card.Title className='titlename'>CRUD Functionality</Card.Title>
            <Card.Text>
            In this project i create RESTAPI that can perform CRUD Functionalities.
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/test111' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            </div>
            </div>
        </div>


        <div className='Web my-5' style={{backgroundColor:(mode==='white'?'#F0EAD6':'#303030'),width:'100%'}}> 
         <h3 className="my-3">ARTIFICIAL INTELLIGENCE</h3>
         <div className="container my-3  justify-content-center" >
             <div className="row" >
             <div className="col-md-4 my-3" key={6}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>OpenCV Project</Card.Title>
            <Card.Title className='titlename'>Real Time Facial Expression, Age, Race, Gender Prediction</Card.Title>
            <Card.Text>
            While Doing This Project I Learn What OpenCV Is And How It Works.
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/blob/main/OpenCV/Real-Time%20Facial%20Expression%20Recognition%2C%20Age%2C%20Gender%20%2C%20Race%20Recoginition.ipynb' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            <div className="col-md-4 my-3" key={7}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Natural Language Processing Project</Card.Title>
            <Card.Title className='titlename'>Plagiarism Checker</Card.Title>
            <Card.Text>
            This Project Is Based On Natural Language Processing
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Palagrism%20Checker' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>


            <div className="col-md-4 my-3" key={8}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'></Card.Title>
            <Card.Title className='titlename'>Linear Regression Project</Card.Title>
            <Card.Title className='titlename'>House Price Prediction</Card.Title>
            <Card.Text>
            In This Project I Learn What Linear Regression Is And How To Use It
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/blob/main/Machine%20Learning/LinearRegression/Linear%20Regression.ipynb' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


              <div className="col-md-4 my-3" key={9}>
              <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Logistic Regression Project</Card.Title>
            <Card.Title className='titlename'>Fake Advertisement </Card.Title>
            <Card.Text>In This Project I Learn What Logistic Regression Is And How To Use It</Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/blob/main/Machine%20Learning/LogisticRegression/Logistic%20Regression.ipynb' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={10}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>K Nearest Neighbour Project</Card.Title>
            <Card.Title className='titlename'>Cloth Size Prediction</Card.Title>
            <Card.Text>
            In This Project I Learn What K Nearest Neighbour Is And How To Use It
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/WebDevelopment/tree/main/Project10' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={11}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Support Vector Machines Project</Card.Title>
            <Card.Title className='titlename'>Diabetes Prediction</Card.Title>
            <Card.Text>
            In This Project I Learn What Support Vector Machines Is And How To Use It
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/blob/main/Machine%20Learning/DiabetesSVM/Daibetes.ipynb' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            <div className="col-md-4 my-3" key={12}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Decision Tree Project</Card.Title>
            <Card.Text>
            In This Project I Learn What Decision Tree Is And How To Use It
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/blob/main/Machine%20Learning/DecisionTree/DecisionTree.ipynb' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={13}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Naive Bayes</Card.Title>
            <Card.Title className='titlename'>Weather Prediction</Card.Title>
            <Card.Text>
            In This Project I Learn What Naive Bayes Is And How To Use It
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/blob/main/Machine%20Learning/Naive%20Bayes/Naive%20Bayes%20Algorithm.ipynb' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

            <div className="col-md-4 my-3" key={14}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'></Card.Title>
            <Card.Title className='titlename'>Web Scrapping</Card.Title>
            <Card.Text>
            In This Project I Learn How to Scrap Data From Website Using WebScrapping
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Deep%20Learning/WebScrapping' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={15}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Voice Assistant</Card.Title>
            <Card.Title className='titlename'>Natural Language Processing</Card.Title>
            <Card.Text>
            In This Project I Create A Voice Assistant
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Voice%20Assistant' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
              </div>

              <div className="col-md-4 my-3" key={16}>
            <Card style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Movie Recommender System</Card.Title>
            <Card.Text>
            In This Project I Create A Movie Recommender System
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/ArtificialIntelligence/tree/main/Machine%20Learning/Recommendation%20system' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className="my-3 button1">Visit Code</Button></a>
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
