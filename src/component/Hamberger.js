import Dropdown from './dropdown'
import './Hamberger.css'
function BasicExample(props) {

  const mode=localStorage.getItem("mode")

  const style1={
    backgroundColor:(!mode?'black':mode),
    padding:'5px 0px 0px 40px',
    boxShadow:`0px 15px 10px -15px ${(mode==='white'?'black':'white')}`,
    borderTop:`1px solid ${(mode==='white'?'#C0C0C0':'#585858')}`
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