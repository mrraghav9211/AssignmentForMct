import React from "react";
import {useState} from 'react'
function App() {
  const colorh1={
    color:'#9c1144'
  }
  const [bg, setbg] = useState('while')
  const [textcolor, setcolor] = useState('black')
  const backcolor={
    backgroundColor:bg
  }
  const txtcolor={
    color:textcolor
  }
  function toggle(){
    if(bg=='white' && textcolor == 'black'){
      setbg('black')
      setcolor('white')
    }else{
      setbg('white')
      setcolor('black')
    }
  }
  return (
    <div style={backcolor} className="App">
      <div className="container">
      <div className="toggle-sec">
      <h1 style={txtcolor}>Overreacted</h1>
      <button onClick={toggle}>Toggle</button>
    </div>

    <div className="first">
      <h1 style={colorh1}>The WET Codebase </h1>
      <p style={txtcolor}>Sunday 4th 2020 11 min road</p>
      <p style={txtcolor}>Come waste your time with me</p>
    </div>

    <div className="second">
      <h1 style={colorh1}>Goodby, Clean Code</h1>
      <p style={txtcolor}>Friday 22nd, 2019 5min read</p>
      <p style={txtcolor}>Let clean code guide you Then let it go.</p>
          </div>
        <div className="third">
          <h1 style={colorh1}>My Decade In Review</h1>
          <p style={txtcolor}>Saturday 11th, 2018 5 min read</p>
          <p style={txtcolor}>A personal reflection.</p>
        </div>

        <div className="forth">
          <h1 style={colorh1}>What Are The React Team Principles</h1>
          <p style={txtcolor}>Thrusday 4th 2015 5 min read</p>
        </div>
      </div>
    
    </div>
  );
}

export default App;
