import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Dropdown from './dropdown'


// import BootstrapSwitchButton from 'bootstrap-switch-button-react';
// import Form from 'react-bootstrap/Form';
 
import './Navbar.css'

function BasicExample(props) {


//   const [T,setT]=useState(1);
  
// let hidden=()=>{
//   const myElement = document.getElementsByClassName("nav2")[0];
//   if(T===1){
//     myElement.style.display = 'block';
//     setT(0)
//   }
//   else{
//     myElement.style.display = 'none';
//     setT(1)
//   }
//   }
  


  const mode=localStorage.getItem("mode");


  // const color=localStorage.getItem("color");
  const style1={
    backgroundColor:(!mode?'#212529':mode)
  }


 const style2={
  backgroundColor:(!mode?'#212529':mode),
}
let d=window.location.pathname;
  return (
    <>
    <div className='Navbar'>
    <div className='nav1'>
    <Navbar className='d-flex justify-content-around  border-bottom border-success back' style={style1}>
      <Container className='d-flex justify-content-between'>
      {/* <div className='menu' onClick={hidden} style={{cursor:'pointer',border:'2px solid',borderColor:(mode==='white'?'blue':'#73be73'),padding:'1px 8px',borderRadius:'5px',color:(mode==='white'?'blue':'#73be73')}}>Skills</div> */}
        <div > 
        <Navbar.Brand className='logo' href="/akshay" style={{color:(mode==='white'?'#212529':'white'),fontFamily: "'Hind Siliguri', sans-serif"}} ><b>AKSHAY</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Dropdown/>
       
        <div>
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
            <Nav.Link id='icon1' className='icon  nav-links1' href="/home" style={d==='/home' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}}><span className="material-symbols-outlined back">home</span></Nav.Link>
            <Nav.Link className='icon nav-links1' href="/contact" style={d==='/contact' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}} ><span className="material-symbols-outlined back">contacts</span></Nav.Link>
            <Nav.Link className='icon nav-links1' href="/project" style={d==='/project' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}} ><span className="material-symbols-outlined back">work</span></Nav.Link>
            
          </Nav>
         
         <div className="mx-1">
      <div className='icon' onClick={props.toggleMode} style={{cursor:'pointer',color:(mode==='white'?'blue':'#73be73')}}>{mode==='white'?<span className="material-symbols-outlined">dark_mode</span>:<span className="material-symbols-outlined " >light_mode</span>}</div>
      
       </div>
       
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </div>



    <div className='nav2'>
    <Nav activeKey="/home"  className='d-flex justify-content-center sticky-top' style={style2}>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-1" href="/home/html"style={d==='/home/html' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}}><div className='back'>HTML</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-2" href="/home/css" style={d==='/home/css' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}}><div className='back'>CSS</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-3" href="/home/javascript" style={d==='/home/javascript' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}}><div className='back'>JAVASCRIPT</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-4" href="/home/react" style={d==='/home/react' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}}><div className='back'>REACT</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-5" href="/home/node" style={d==='/home/node' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}}><div className='back'>NODE</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-6" href="/home/express" style={d==='/home/express' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}}><div className='back'>EXPRESS</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-7" href="/home/mongo" style={d==='/home/mongo' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}}><div className='back'>MONGODB</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-8" href="/home/python" style={d==='/home/python' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}}><div className='back'>PYTHON</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-9" href="/home/ai" style={d==='/home/ai' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}}><div className='back'>AI</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-10" href="/home/c" style={d==='/home/c' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}}><div className='back'>DATASTRUCTURE</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-11" href="/home/cpp" style={d==='/home/cpp' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}}><div className='back'>CPP</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-12" href="/home/sql" style={d==='/home/sql' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#73be73')}}><div className='back'>SQL</div></Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
    </div>
  </>
  );
}


export default BasicExample;