import React from 'react'
import './SQL.css'
import AnimatedCursor from '../../Home1/ANIMATED';
import Card from 'react-bootstrap/Card';

const SQL = () => {
  const mode=localStorage.getItem("mode");
  var newColor =(mode ==='white'?'black':'white');
  var newColor1 =(mode ==='white'?'grey':'grey');
  var backgroundColor=(mode==='white'?'white':'black');
  var color=(mode==='white'?'black':'white');
  return (
    <>
 <AnimatedCursor/>
  <div className='concepts' >
  <div className='concept my-5' style={{backgroundColor:(mode==='white'?'white':'black')}}>
  <h2 style={{fontFamily: "'Hind Siliguri', sans-serif",display:'flex',justifyContent:'center',alignItems:'center'}}><a className='my-3' target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/Sql' style={{textDecoration:'none',color:(mode==='white'?'black':'white'),fontFamily: 'BDSuper'}}>SQL</a></h2>
  <div className="container my-5 justify-content-center">
            <div className="row" >
            

            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Constraints in SQL</Card.Title>
            <Card.Text>
            Concept of Integrity Constraints in SQL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/Sql/tree/main/Constaints' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Operators in SQL</Card.Title>
            <Card.Text>
            Operators Available in SQL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/Sql/tree/main/Program' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>InBuilt Function In SQL</Card.Title>
            <Card.Text>
            Inbuilt Functions in SQL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/Sql/tree/main/Functions' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

              

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',boxShadow: `1px 2px 3px ${newColor}, -1px -2px 3px ${newColor1}`}}>
            <Card.Body>
            <Card.Title className='titlename'>String Functions In SQL</Card.Title>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/Sql/blob/main/StringFunc/1.sql' style={{color:'white',textDecoration: 'none'}}><button className="custom-btn btn-12"><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Click!</span><span style={{background:'none',backgroundColor:(mode ==='white'?'black':'white'),color:(mode ==='white'?'white':'black')}}>Visit Code</span></button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

      </div>
      </div>
    </div>
  </div>
</>
  )
}

export default SQL
