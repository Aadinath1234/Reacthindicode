import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Users from './Users.js';
import Fcomponent from './Fcomponent.js';
import Ccompnent from './Ccomponent';
import Jsx from './JSX.js';
import App1 from "./App1.js"
import App2 from "./App2.js"





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1 />
    <App/>
    <Users />
    <Fcomponent />
    <Ccompnent /> 
    <App2 />


    <Jsx />

    
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
