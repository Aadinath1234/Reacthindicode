// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Users from './Users.js';
// import Fcomponent from './Fcomponent.js';
// import Ccompnent from './Ccomponent';
// import Jsx from './JSX.js';
// import App1 from "./App1.js"

// import App2 from "./App2.js"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter ,Router } from 'react-router-dom';





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App1 />
//     <App/>
//     <Users />
//     <Fcomponent />
//     <Ccompnent /> 
//     <App2 />


//     <Jsx />

    
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();










// // lec 60 
// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <Router>
// //       <App />
// //     </Router>
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();


//safe zone code 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Router} from 'react-router-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// ReactDOM.render(
//   <React.StrictMode>
    
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();





// import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// ReactDOM.render(
//   <React.StrictMode>
    
//     {/* <Router><App /></Router> */}
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();














// //lec 82


// import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
// import './index.css';
// import * as serviceWorker from './serviceWorker';
// //
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import rootReducer from './Services/Reducers/index'
// const store=createStore(rootReducer)
// console.warn("store data", store)


// //
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// ReactDOM.render(
 
//   <Provider store={store}>
//     <App />

//   </Provider>,
// document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Services/Reducers/index'
const store=createStore(rootReducer)
console.warn("store data",store)
// 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();