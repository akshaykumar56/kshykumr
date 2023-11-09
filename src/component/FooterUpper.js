import React from 'react'
import './FooterUpper.css'
import {Link} from 'react-router-dom'
const Footer = () => {
    const mode=localStorage.getItem("mode");
  return (
    <div style={{margin:'50px 0px 50px 0px'}}>
      <div className='Component6-Box-Container' style={{position:'relative',width:'100%'}}>
        <div className='Component6-Box1' style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
            <Link onClick={()=>{window.scroll(0,0)}} to='/' style={{textDecoration:'none'}}><div style={{textAlign:'left',fontWeight:'800',fontSize:'20px',fontFamily:'BDSuper',color:(mode==='white'?'#65C891':'#3CCDE9'),fontSize:'26px'}}>AKSHAY</div></Link>
            <div className='Component6-Box1-Text' style={{fontFamily:'Inter',fontSize:'14px',Color:(mode==='white'?'black':'white')}}>I am a skilled web developer with a passion for creating engaging and user-friendly websites that make a meaningful impact</div>
            
        </div>
        <div className='Component6-Box2' style={{display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',margin:'10px 0px',fontWeight:'600',fontSize:'16px',color:(mode==='white'?'#65C891':'#3CCDE9')}}>NAVIGATION</div>
            <div className='Component6-Navigation' style={{display:'flex',flexDirection:'column'}}>
                <Link onClick={()=>{window.scroll(0,0)}} to='/' style={{color:(mode==='white'?'black':'white'),textDecoration:'none'}}><div style={{fontFamily:'Inter',margin:'2px 0px',color:(mode==='white'?'black':'white')}}>Home</div></Link>
                <Link onClick={()=>{window.scroll(0,0)}} to='/contact' style={{color:(mode==='white'?'black':'white'),textDecoration:'none'}}><div style={{fontFamily:'Inter',margin:'2px 0px',Color:(mode==='white'?'black':'white')}}>Contact Me</div></Link>
                <Link onClick={()=>{window.scroll(0,0)}} to='/project' style={{color:(mode==='white'?'black':'white'),textDecoration:'none'}}><div style={{fontFamily:'Inter',margin:'2px 0px',Color:(mode==='white'?'black':'white')}}>Projects</div></Link>
               
            </div>
        </div>
        <div className='Component6-Box3' style={{display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',margin:'10px 0px',fontWeight:'600',fontSize:'16px',color:(mode==='white'?'#65C891':'#3CCDE9')}}>TOP SKILLS</div>
            <div className='Component6-Dishes-Container' style={{display:'flex',flexDirection:'column'}}>
            <Link onClick={()=>{window.scroll(0,0)}} to='/home/react' style={{color:(mode==='white'?'black':'white'),textDecoration:'none'}}><div style={{fontFamily:'Inter',margin:'2px 0px',color:(mode==='white'?'black':'white')}}>React</div></Link>
                <Link onClick={()=>{window.scroll(0,0)}} to='/home/node' style={{color:(mode==='white'?'black':'white'),textDecoration:'none'}}><div style={{fontFamily:'Inter',margin:'2px 0px',Color:(mode==='white'?'black':'white')}}>Node</div></Link>
                <Link onClick={()=>{window.scroll(0,0)}} to='/home/python' style={{color:(mode==='white'?'black':'white'),textDecoration:'none'}}><div style={{fontFamily:'Inter',margin:'2px 0px',color:(mode==='white'?'black':'white')}}>Python</div></Link>
                <Link onClick={()=>{window.scroll(0,0)}} to='/home/ai' style={{color:(mode==='white'?'black':'white'),textDecoration:'none'}}><div style={{fontFamily:'Inter',margin:'2px 0px',Color:(mode==='white'?'black':'white')}}>AI</div></Link>
            </div>
        </div>
        <div className='Component6-Box4' style={{display:'flex',flexDirection:'column'}}>
            <div className='Follow-Us' style={{width:'100%',display:'flex',margin:'10px 0px',fontWeight:'600',fontSize:'16px',color:(mode==='white'?'#65C891':'#3CCDE9')}}>CONTACT ME</div>
            <div className='Follow-Us-Div' style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <div style={{fontFamily:'Inter'}}>Call Me: 8894055729</div>
                <div style={{fontFamily:'Inter'}}>E-Mail: kshykumr@gmail.com</div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
