import './Service.scss'
// import Img1 from './1.png'
// import Img2 from './2.png'
// import Img3 from './3.png'
// import Img4 from './4.png'
import Tech1 from './html.png'
import Tech2 from './Css.png'
import Tech3 from './Javascript.png'
import Tech4 from './React.png'
import Tech5 from './Python.png'
import Tech8 from './node.png'
import Tech9 from './Express.png'
import Tech10 from './strapi.png'
import Tech11 from './mongo.png'
import Marquee from "react-fast-marquee";
// import {Link} from 'react-router-dom'

function Service() {
  const mode=localStorage.getItem('mode');
  return (
<>

<div style={{margin:'100px 10px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
    <div  className='our-services' style={{fontSize:'40px',fontFamily:'BDSuper',textAlign:'center'}}>Technology I Work With</div>
    </div>

 </div>


<div style={{margin:'0px 0px 100px 0px'}}>
 <Marquee>
 <div className="ticker__item" key={1}><img src={Tech1} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px',filter:(mode==='white'?'invert(0)':'invert(1)')}}/></div>
  <div className="ticker__item" key={2}><img src={Tech2} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px',filter:(mode==='white'?'invert(0)':'invert(1)')}}/></div>
  <div className="ticker__item" key={3}><img src={Tech3} alt='tech1' style={{height:'150px',width:'200px',margin:'0px 30px',filter:(mode==='white'?'invert(0)':'invert(1)')}}/></div>
  <div className="ticker__item" key={4}><img src={Tech4} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px',filter:(mode==='white'?'invert(0)':'invert(1)')}}/></div>
 <div className="ticker__item" key={5}><img src={Tech5} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px',filter:(mode==='white'?'invert(0)':'invert(1)')}}/></div>
  <div className="ticker__item" key={8}><img src={Tech8} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px',filter:(mode==='white'?'invert(0)':'invert(1)')}}/></div>
  <div className="ticker__item" key={9}><img src={Tech9} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px',filter:(mode==='white'?'invert(0)':'invert(1)')}}/></div>
  <div className="ticker__item" key={10}><img src={Tech10} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px',filter:(mode==='white'?'invert(0)':'invert(1)')}}/></div>
 <div className="ticker__item" key={11}><img src={Tech11} alt='tech1' style={{height:'150px',width:'150px',margin:'0px 30px',filter:(mode==='white'?'invert(0)':'invert(1)')}}/></div>
  </Marquee>
  </div>

</>
  );
}

export default Service;