import { Link } from "react-router-dom";
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
    <div id="mySidenav" className="sidenav" style={{backgroundColor:(mode==='white'?'#DCDCDC':'#696969'),opacity:'0.96'}}>
  <Link   className="closebtn" onClick={closeNav} style={{fontSize:'25px',color:(mode==='white'?'black':'white')}}>&times;</Link >
  <Link  to="/home/html" style={{fontSize:'18px',color:(mode==='white'?'black':'white')}}>HTML</Link >
  <Link  to="/home/css" style={{fontSize:'18px',color:(mode==='white'?'black':'white')}}>CSS</Link >
  <Link  to="/home/javascript" style={{fontSize:'18px',color:(mode==='white'?'black':'white')}}>JAVASCRIPT</Link >
  <Link  to="/home/react" style={{fontSize:'18px',color:(mode==='white'?'black':'white')}}>REACT</Link >
  <Link  to="/home/node" style={{fontSize:'18px',color:(mode==='white'?'black':'white')}}>NODE</Link >
  <Link  to="/home/mongo" style={{fontSize:'18px',color:(mode==='white'?'black':'white')}}>MONGODB</Link >
  <Link  to="/home/python" style={{fontSize:'18px',color:(mode==='white'?'black':'white')}}>PYTHON</Link >
  <Link  to="/home/ai" style={{fontSize:'18px',color:(mode==='white'?'black':'white')}}>AI</Link >
  <Link  to="/home/c" style={{fontSize:'18px',color:(mode==='white'?'black':'white')}}>DATASTRUCTURE</Link >
  <Link  to="/home/cpp" style={{fontSize:'18px',color:(mode==='white'?'black':'white')}}>CPP</Link >
  <Link  to="/home/sql" style={{fontSize:'18px',color:(mode==='white'?'black':'white')}}>SQL</Link >
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