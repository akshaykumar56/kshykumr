import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Navbar.css'

function BasicExample(props) {

  const mode=localStorage.getItem("mode")

  const style1={
    backgroundColor:(!mode?'black !important':mode),
  }


 const style2={
  backgroundColor:(!mode?'black !important':mode),
  boxShadow: `0px 15px 10px -15px ${(mode==='white'?'black':'grey')}`,
  borderTop:`1px solid ${(mode==='white'?'#C0C0C0':'#303030')}`
}
  return (
    <>
    <div className='Navbar'>
    <div className='nav1'>
    <div className='d-flex justify-content-around' style={style1}>
      <div className='Inner-Navbar'>
        <div > 
        <div className='logo' style={{display:'flex',justifyContent:'center',alignItems:'center'}}><b><Link to='/akshay' style={{textDecoration:'none',color:(mode==='white'?'black':'white'),fontFamily:'BDSuper',color:(mode==='white'?'#65C891':'#3CCDE9')}}>AKSHAY</Link></b></div>
        </div>
       
       <div></div>
       <div></div>
        <div> 
        <div id="basic-navbar-nav"  style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
          
          <div className="me-auto" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <div className='textDescription' style={{position:'relative'}}><NavLink id='icon1' className='icon  nav-links2' to="/" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white') })}><span className="material-symbols-outlined back">home</span></NavLink><div className='text-Description-inner' style={{position:'absolute',zIndex:'20000',color:(mode==='white'?'white':'black'),backgroundColor:(mode==='white'?'black':'white'),borderRadius:'5px',padding:'2px 5px'}}>Home</div></div>
            <div className='textDescription' style={{position:'relative'}}><NavLink className='icon nav-links2' to="/contact" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white')})} ><span className="material-symbols-outlined back">contacts</span></NavLink><div className='text-Description-inner' style={{position:'absolute',zIndex:'20000',color:(mode==='white'?'white':'black'),backgroundColor:(mode==='white'?'black':'white'),borderRadius:'5px',padding:'2px 5px'}}>Contact</div></div>
            <div className='textDescription' style={{position:'relative'}}><NavLink className='icon nav-links2' to="/project" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white')})}><span className="material-symbols-outlined back">work</span></NavLink><div className='text-Description-inner' style={{position:'absolute',zIndex:'20000',color:(mode==='white'?'white':'black'),backgroundColor:(mode==='white'?'black':'white'),borderRadius:'5px',padding:'2px 5px'}}>Project</div></div>
          </div>
         
         <div className="mx-1">
      <div className='icon' onClick={props.toggleMode} style={{cursor:'pointer',color:(mode==='white'?'black':'white')}}>{mode==='white'?<span className="material-symbols-outlined">dark_mode</span>:<span className="material-symbols-outlined " >light_mode</span>}</div>
      
       </div>
       
        </div>
        </div>
      </div>
    </div>
    </div>



    <div className='nav2'>
    <div  className='d-flex justify-content-center flex-wrap' style={style2}>
    <NavLink className='nav-links' to="/home/html" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white') })}><div className='back'>HTML</div></NavLink>
  <NavLink className='nav-links' to="/home/css" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white') })}><div className='back'>CSS</div></NavLink>
  <NavLink className='nav-links' to="/home/javascript" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white') })}><div className='back'>JAVASCRIPT</div></NavLink>
  <NavLink className='nav-links' to="/home/react" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white') })}><div className='back'>REACT</div></NavLink>
  <NavLink className='nav-links' to="/home/node" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white') })}><div className='back'>NODE</div></NavLink>
  <NavLink className='nav-links' to="/home/python" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white') })}><div className='back'>PYTHON</div></NavLink>
  <NavLink className='nav-links' to="/home/express" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white') })}><div className='back'>EXPRESS</div></NavLink>
  <NavLink className='nav-links' to="/home/mongo" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white') })}><div className='back'>MONGO</div></NavLink>
  <NavLink className='nav-links' to="/home/ai" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white') })}><div className='back'>AI</div></NavLink>
  <NavLink className='nav-links' to="/home/c" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white') })}><div className='back'>DATASTRUCTURE</div></NavLink>
  <NavLink className='nav-links' to="/home/cpp" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white') })}><div className='back'>CPP</div></NavLink>
  <NavLink className='nav-links' to="/home/sql" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'#65C891':'#3CCDE9') : (mode==='white'?'black':'white') })}><div className='back'>SQL</div></NavLink>
    </div>
    </div>
    </div>
  </>
  );
}


export default BasicExample;