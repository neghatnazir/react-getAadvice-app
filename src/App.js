import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
const [advice, setAdvice] = useState('');
const [ isActive, setIsActive] = useState(false);

useEffect(() => {
  fetchAdvice()
},[advice])

 const fetchAdvice = () => {
   axios.get('https://api.adviceslip.com/advice')
     .then((response) => {
       const { advice } = response.data.slip;

       setAdvice(advice );
     })
     .catch((error) => {
       console.log(error);
     });
  //  console.log('fettch')
 } 
 const focusButton = () => {
   
    setIsActive(isActive => !isActive);
 } 

  return (
    <div className="app">
    <div className="card">
      <h1  className="heading" >{advice}</h1>
      <button className="button" style={{backgroundColor: isActive ? '#90EE90'  : '#ffffff'}} onMouseEnter={focusButton} onMouseLeave={focusButton} onClick={fetchAdvice} >
        <span>GIVE ME ADVICE!</span>
      </button>
    </div>
  </div>
  )
}

export default App;

