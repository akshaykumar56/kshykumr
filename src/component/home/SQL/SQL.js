import React from 'react'
import './SQL.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SQL = () => {
  const mode=localStorage.getItem("mode");
  var newColor =(mode ==='white'?'black':'white');
  var backgroundColor=(mode==='white'?'white':'black');
  var color=(mode==='white'?'black':'white');
  return (
    <>

    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3'>STRUCTURED QUERY LANGUAGE</h2>
    
    
    </div>



  <div className='concepts' >
  <div className='concept my-2' style={{backgroundColor:(mode==='white'?'#DCDCDC':'#303030')}}>
  <h4 className='my-5'>WATCH MY WORK WITH SQL AT MY <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/Sql' style={{textDecoration:'none',color:(mode==='white'?'blue':'red')}}>GITHUB</a></h4>
  <div className="container my-5 justify-content-center">
            <div className="row" >
            

            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Constraints in SQL</Card.Title>
            <Card.Text>
            Concept of Integrity Constraints in SQL               
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/Sql/tree/main/Constaints' style={{color:'white',textDecoration: 'none'}}><Button  className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>Operators in SQL</Card.Title>
            <Card.Text>
            Operators Available in SQL
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/Sql/tree/main/Program' style={{color:'white',textDecoration: 'none'}}><Button  className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>InBuilt Function In SQL</Card.Title>
            <Card.Text>
            Inbuilt Functions in SQL
            </Card.Text>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/Sql/tree/main/Functions' style={{color:'white',textDecoration: 'none'}}><Button  className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

              

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:`${backgroundColor}`,color:`${color}`,borderRadius:'0',border:`3px solid ${newColor}`}}>
            <Card.Body>
            <Card.Title className='titlename'>String Functions In SQL</Card.Title>
            <div className="d-flex flex-column">
            <a target="_blank" rel="noreferrer"  href='https://github.com/akshaykumar56/Sql/blob/main/StringFunc/1.sql' style={{color:'white',textDecoration: 'none'}}><Button  className='button1'>Visit Code</Button></a>
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
