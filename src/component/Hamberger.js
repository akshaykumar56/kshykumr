import Dropdown from './dropdown'
import './Hamberger.css'
function BasicExample(props) {

  const mode=localStorage.getItem("mode")

  const style1={
    backgroundColor:(!mode?'#212529':mode),
    padding:'5px 0px 0px 40px',
    boxShadow:'rgb(17, 17, 17) 0px 15px 10px -15px',
  
  }

  return (
    <>
    <div className='ham' style={style1}>
    <Dropdown/>
   </div>
  </>
  );
}


export default BasicExample;