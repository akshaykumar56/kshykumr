import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {memo} from 'react'
import {useState} from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Hamberger from './component/Hamberger'
import Project from './component/Project/Project';
import Contact from './component/Contact/Contact';
import Home from './component/Home1/Home';
import Footer from './component/Footer'
import FooterUpper from './component/FooterUpper'


import Html from './component/home/HTML/Html';
import Css from './component/home/CSS/Css';
import JavaScript from './component/home/JAVAS/Javas';
import React from './component/home/REACT/React';
import Mongo from './component/home/MONGO/Mongo';
import Python1 from './component/home/PYTHON/Python';
import C from './component/home/DATASTRUCTURE/C';
import Cpp from './component/home/CPP/Cpp';
import AI from './component/home/AI/AI';
import Node from './component/home/NODE/Node';
import Express from './component/home/EXPRESS/Express';
import SQL from './component/home/SQL/SQL';
import Akshay from './component/Akshay';

function App() {
  


  const [T,setT]=useState(1);
  
  async function hidden(){
  const myElement = document.getElementsByClassName("nav1")[0];
  console.log(myElement);
  if(T===1){
    myElement.style.display = 'none';
    setT(0)
    
  }
  else{
    myElement.style.display = 'block';
    setT(1)
   
  }
  }


  const [A,setA]=useState('1');
  localStorage.setItem("color", "#909090");
  var toggleMode=()=>{
    if(A==='1'){
      localStorage.setItem("mode", "black");
      setA('2')
    }
    else{
      localStorage.setItem("mode", "white");
      setA('1')
    }
  }

    var e=localStorage.getItem('mode')
      if(e==='white'){
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
      }
      else
      {
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        
      }
  return (
  <>
   <BrowserRouter>
   <Navbar  hiddden={hidden} toggleMode={toggleMode}/>
   <Hamberger/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/project" element={<Project/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/akshay" element={<Akshay/>}/>


    <Route exact path="/home/html" element={<Html/>}/>
    <Route exact path="/home/python" element={<Python1/>}/>
    <Route exact path="/home/css" element={<Css/>}/>
    <Route exact path="/home/javascript" element={<JavaScript/>}/>
    <Route exact path="/home/react" element={<React/>}/>
    <Route exact path="/home/node" element={<Node/>}/>
    <Route exact path="/home/express" element={<Express/>}/>
    <Route exact path="/home/mongo" element={<Mongo/>}/>
    <Route exact path="/home/ai" element={<AI/>}/>
    <Route exact path="/home/c" element={<C/>}/>
    <Route exact path="/home/cpp" element={<Cpp/>}/>
    <Route exact path="/home/sql" element={<SQL/>}/>
    </Routes>
    <FooterUpper/>
    <Footer/>
    </BrowserRouter>
  </>
  );
}

export default memo(App);