import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';


 
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
let d=window.location.pathname;
  return (
    <>
    <div className='Navbar'>
    <div className='nav1'>
    <Navbar className='d-flex justify-content-around  border-bottom border-success back' style={style1}>
      <Container className='d-flex justify-content-between'>
        <div > 
        <Navbar.Brand className='logo' to="/akshay" style={{color:(mode==='white'?'#212529':'white'),fontFamily: "'Hind Siliguri', sans-serif"}} ><b>AKSHAY</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
       
        <div>
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
            <Nav.Link id='icon1' className='icon  nav-links1' to="/home" style={d==='/home' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}}><span className="material-symbols-outlined back">home</span></Nav.Link>
            <Nav.Link className='icon nav-links1' to="/contact" style={d==='/contact' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}} ><span className="material-symbols-outlined back">contacts</span></Nav.Link>
            <Nav.Link className='icon nav-links1' to="/project" style={d==='/project' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}} ><span className="material-symbols-outlined back">work</span></Nav.Link>
            
          </Nav>
         
         <div className="mx-1">
      <div className='icon' onClick={props.toggleMode} style={{cursor:'pointer',color:(mode==='white'?'blue':'#C19A6B')}}>{mode==='white'?<span className="material-symbols-outlined">dark_mode</span>:<span className="material-symbols-outlined " >light_mode</span>}</div>
      
       </div>
       
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </div>



    <div className='nav2'>
    <Nav activeKey="/home"  className='d-flex justify-content-center sticky-top' style={style2}>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-1" to="/home/html"style={d==='/home/html' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}}><div className='back'>HTML</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-2" to="/home/css" style={d==='/home/css' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}}><div className='back'>CSS</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-3" to="/home/javascript" style={d==='/home/javascript' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}}><div className='back'>JAVASCRIPT</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-4" to="/home/react" style={d==='/home/react' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}}><div className='back'>REACT</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-5" to="/home/node" style={d==='/home/node' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}}><div className='back'>NODE</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-6" to="/home/express" style={d==='/home/express' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}}><div className='back'>EXPRESS</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-7" to="/home/mongo" style={d==='/home/mongo' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}}><div className='back'>MONGODB</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-8" to="/home/python" style={d==='/home/python' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}}><div className='back'>PYTHON</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-9" to="/home/ai" style={d==='/home/ai' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}}><div className='back'>AI</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-10" to="/home/c" style={d==='/home/c' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}}><div className='back'>DATASTRUCTURE</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-11" to="/home/cpp" style={d==='/home/cpp' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}}><div className='back'>CPP</div></Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-12" to="/home/sql" style={d==='/home/sql' ? {color:(mode==='white'?'red':'white')} : {color:(mode==='white'?'blue':'#C19A6B')}}><div className='back'>SQL</div></Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
    </div>
  </>
  );
}


export default BasicExample;