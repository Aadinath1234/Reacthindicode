import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react' 

function Members(props){
  
  return(
   
    <div className="App">
        <h1>User Component </h1> 
      <button onClick={props.data}>Call data function </button>
    </div>
    
  )
}

export default Members;
