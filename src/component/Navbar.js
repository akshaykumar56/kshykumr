import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
 
import './Navbar.css'

function BasicExample(props) {

  const mode=localStorage.getItem("mode")

  const style1={
    backgroundColor:(!mode?'#212529':mode)
  }


 const style2={
  backgroundColor:(!mode?'#212529':mode),
  boxShadow: '0px 15px 10px -15px #111'
}
  return (
    <>
    <div className='Navbar'>
    <div className='nav1'>
    <Navbar className='d-flex justify-content-around  border-bottom border-success back' style={style1}>
      <Container className='d-flex justify-content-between'>
        <div > 
        <Navbar.Brand className='logo' href="/akshay" style={{color:(mode==='white'?'#212529':'#fccb06'),fontFamily:'BDSuper'}}><b>AKSHAY</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
       
        <div>
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
            <NavLink id='icon1' className='icon  nav-links2' to="/" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })}><span className="material-symbols-outlined back">home</span></NavLink>
            <NavLink className='icon nav-links2' to="/contact" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })} ><span className="material-symbols-outlined back">contacts</span></NavLink>
            <NavLink className='icon nav-links2' to="/project" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })}><span className="material-symbols-outlined back">work</span></NavLink>
            
          </Nav>
         
         <div className="mx-1">
      <div className='icon' onClick={props.toggleMode} style={{cursor:'pointer',color:(mode==='white'?'black':'white')}}>{mode==='white'?<span className="material-symbols-outlined">dark_mode</span>:<span className="material-symbols-outlined " >light_mode</span>}</div>
      
       </div>
       
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </div>



    <div className='nav2'>
    <Nav  className='d-flex justify-content-center sticky-top' style={style2}>
    <NavLink className='nav-links' to="/home/html" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })}><div className='back'>HTML</div></NavLink>
  <NavLink className='nav-links' to="/home/css" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })}><div className='back'>CSS</div></NavLink>
  <NavLink className='nav-links' to="/home/javascript" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })}><div className='back'>JAVASCRIPT</div></NavLink>
  <NavLink className='nav-links' to="/home/react" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })}><div className='back'>REACT</div></NavLink>
  <NavLink className='nav-links' to="/home/node" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })}><div className='back'>NODE</div></NavLink>
  <NavLink className='nav-links' to="/home/express" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })}><div className='back'>EXPRESS</div></NavLink>
  <NavLink className='nav-links' to="/home/mongo" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })}><div className='back'>MONGO</div></NavLink>
  <NavLink className='nav-links' to="/home/ai" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })}><div className='back'>AI</div></NavLink>
  <NavLink className='nav-links' to="/home/c" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })}><div className='back'>DATASTRUCTURE</div></NavLink>
  <NavLink className='nav-links' to="/home/cpp" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })}><div className='back'>CPP</div></NavLink>
  <NavLink className='nav-links' to="/home/sql" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'#fccb06') : (mode==='white'?'black':'white') })}><div className='back'>SQL</div></NavLink>
    </Nav>
    </div>
    </div>
  </>
  );
}


export default BasicExample;