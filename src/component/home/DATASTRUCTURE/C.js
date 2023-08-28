import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const C = () => {
  const mode=localStorage.getItem("mode");
  return (
    <>
    <div className='container d-flex flex-column align-items-center justify-content-around my-5' style={{fontFamily: "'Hind Siliguri', sans-serif"}}>
    <h2 className='heading my-3'>DATASTRUCTURE</h2>
     
    </div>


    <div className='concepts' style={{backgroundColor:(mode==='white'?'#F0EAD6':'	#303030')}}>
   <h4 className='my-5'>WATCH MY WORK WITH DATASTRUCTURE AT MY <a href='https://github.com/akshaykumar56/DataStructure' style={{textDecoration: 'none',color:'red'}}>GITHUB</a></h4>
   <div className='concept my-2'>
   <h4 className='my-3'>DATASTRUCTURE CONCEPTS</h4>
   <div className="container my-5 justify-content-center">
             <div className="row" >
            

            <div className="col-md-4 my-3" key={1}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Linked List</Card.Title>
            <Card.Text>
            Here we can see the concept of Linked List
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/DataStructure/tree/main/Linked%20List' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

            <div className="col-md-4 my-3" key={2}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Stack</Card.Title>
            <Card.Text>
            Here we can see the concept of Stack
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/DataStructure/tree/main/Stack%20and%20Queue/Stact' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={3}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Queue</Card.Title>
            <Card.Text>
            Here we can see the concept of Queue
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/DataStructure/tree/main/Stack%20and%20Queue/Queue' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>

              

            <div className="col-md-4 my-3" key={4}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Tree</Card.Title>
            <Card.Text>
            Here we can see the concept of tree in DataStructure
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/DataStructure/blob/main/Tree/Traversal.cpp' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={5}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Searching Algorithms</Card.Title>
            <Card.Text>
            Here we see how to use Searching Algorithms
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/DataStructure/tree/main/Searching' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
            </div>
            </Card.Body>
            </Card>
            </div>


            <div className="col-md-4 my-3" key={6}>
            <Card className='card1'  style={{backgroundColor:(mode==='white'?'white':'black'),color:(mode==='white'?'black':'white'),borderRadius:'0px'}}>
            <Card.Body>
            <Card.Title className='titlename'>Sorting Algorithms</Card.Title>
            <Card.Text>
            Here we see how to use Sorting Algorithms
            </Card.Text>
            <div className="d-flex flex-column">
            <a href='https://github.com/akshaykumar56/DataStructure/tree/main/Sorting' style={{color:'white',textDecoration: 'none'}}><Button variant="primary" className='button1'>Visit Code</Button></a>
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

export default C
