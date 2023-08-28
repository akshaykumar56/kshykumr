import React from 'react'
import './SQL.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SQL = () => {
  const mode=localStorage.getItem("mode");
  return (
    <>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3' >STRUCTURED QUERY LANGUAGE</h2>
     </div>

    <div className='concepts' style={{backgroundColor:(mode==='white'?'#F0EAD6':'	#303030')}}>
    <h4 className='my-5'>WATCH MY WORK WITH SQL AT MYN<a href='https://github.com/akshaykumar56/Sql' style={{textDecoration: 'none',color:'red'}}>GITHUB</a></h4>
    <div className='concept my-2' >
    <h4 className='my-3'>SQL CONCEPTS</h4>
    <div className="container my-5 justify-content-center">
        <div className="row" >
            

            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Constraints in SQL</Card.Title>
            <Card.Text>
            Here we can see the concept of Integrity Constraints in SQL
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/Sql/tree/main/Constaints' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Operators in SQL</Card.Title>
            <Card.Text>
            Here we see various operators available in SQL
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/Sql/tree/main/Program' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>InBuilt Function In SQL</Card.Title>
            <Card.Text>
            Here we see various Inbuilt function available in SQL
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/Sql/tree/main/Functions' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

              

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>String Functions In SQL</Card.Title>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/Sql/blob/main/StringFunc/1.sql' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
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
