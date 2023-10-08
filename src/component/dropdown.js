import { Link,NavLink } from "react-router-dom";
import './dropdown.css'
function BasicExample() {
  const mode=localStorage.getItem("mode");
  /* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav(e) {
  e.preventDefault()
  document.getElementById("mySidenav").style.width = "0";
}


  return (
    <div className='dropdown' >
    <div id="mySidenav" className="sidenav" style={{backgroundColor:(mode==='white'?'#DCDCDC':'#696969'),opacity:'0.985'}}>
  <Link   className="closebtn" onClick={closeNav} style={{fontSize:'25px',color:(mode==='white'?'black':'white')}}>&times;</Link >
  <div onClick={closeNav}><NavLink className='nav-links1' to="/home/html" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'yellow') : (mode==='white'?'black':'white') })}>HTML</NavLink></div>
  <div onClick={closeNav}><NavLink className='nav-links1' to="/home/css" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'yellow') : (mode==='white'?'black':'white') })}>CSS</NavLink></div>
  <div onClick={closeNav}><NavLink className='nav-links1' to="/home/javascript" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'yellow') : (mode==='white'?'black':'white') })}>JAVASCRIPT</NavLink></div>
  <div onClick={closeNav}><NavLink className='nav-links1' to="/home/react" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'yellow') : (mode==='white'?'black':'white') })}>REACT</NavLink></div>
  <div onClick={closeNav}><NavLink className='nav-links1' to="/home/node" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'yellow') : (mode==='white'?'black':'white') })}>NODE</NavLink></div>
  <div onClick={closeNav}><NavLink className='nav-links1' to="/home/express" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'yellow') : (mode==='white'?'black':'white') })}>EXPRESS</NavLink></div>
  <div onClick={closeNav}><NavLink className='nav-links1' to="/home/mongo" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'yellow') : (mode==='white'?'black':'white') })}>MONGO</NavLink></div>
  <div onClick={closeNav}><NavLink className='nav-links1' to="/home/ai" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'yellow') : (mode==='white'?'black':'white') })}>AI</NavLink></div>
  <div onClick={closeNav}><NavLink className='nav-links1' to="/home/c" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'yellow') : (mode==='white'?'black':'white') })}>DATASTRUCTURE</NavLink></div>
  <div onClick={closeNav}><NavLink className='nav-links1' to="/home/cpp" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'yellow') : (mode==='white'?'black':'white') })}>CPP</NavLink></div>
  <div onClick={closeNav}><NavLink className='nav-links1' to="/home/sql" style={({ isActive }) => ({ color: isActive ? (mode==='white'?'red':'yellow') : (mode==='white'?'black':'white') })}>SQL</NavLink></div>
</div>
<button onClick={openNav} style={{border:'0px',background:'transparent'}}>
  <div style={{backgroundColor:(mode==='white'?'black':'white'),height:'3px',width:'20px',margin:'3px'}}></div>
  <div style={{backgroundColor:(mode==='white'?'black':'white'),height:'3px',width:'20px',margin:'3px'}}></div>
  <div style={{backgroundColor:(mode==='white'?'black':'white'),height:'3px',width:'20px',margin:'3px'}}></div>
</button>
    </div>
  );
}

export default BasicExample;