import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
    const mode=localStorage.getItem("mode");
  return (
    <div className='dropdown'>
    <Dropdown>
      <Dropdown.Toggle className='mx-2' variant="success" id="dropdown-basic" style={{height:'24px',width:'60px',backgroundColor:(mode==='white'?'blue':'#73be73'),display:'flex',justifyContent:'center',alignItems:'center'}}>
        Skills
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/home/html">HTML</Dropdown.Item>
        <Dropdown.Item href="/home/css">CSS</Dropdown.Item>
        <Dropdown.Item href="/home/javascript">JavaScript</Dropdown.Item>
        <Dropdown.Item href="/home/react">React</Dropdown.Item>
        <Dropdown.Item href="/home/node">Node</Dropdown.Item>
        <Dropdown.Item href="/home/express">Express</Dropdown.Item>
        <Dropdown.Item href="/home/mongo">Mongo</Dropdown.Item>
        <Dropdown.Item href="/home/python">Python</Dropdown.Item>
        <Dropdown.Item href="/home/ai">AI</Dropdown.Item>
        <Dropdown.Item href="/home/c">DataStructure</Dropdown.Item>
        <Dropdown.Item href="/home/cpp">CPP</Dropdown.Item>
        <Dropdown.Item href="/home/sql">SQL</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default BasicExample;