// import logo from './logo.svg';
// import './App.css';
// import Student1 from './Props2student'
// import React from 'react'
// class App extends React.Component{
//    constructor(){
//     super();
//     this.state={
//       name:"Anil"
//     }
//    }




//   render(){
//     return(
//       <div classname="App">
//         <h1>Props !</h1>
//         <Student1 name={this.state.name} email="anil@test.com"> </Student1>
//         <button onClick={() => this.setState({name:"Siddhhuu"})}>Update Name</button>
//       </div>
//     )
//   }
// }

// export default App;







// lec 16
// import logo from './logo.svg';
// import './App.css';
// import React from 'react'

// function App(){
//   const[status, setStatus]=React.useState(true)
//   return(
//     <div className="App">
//       {
//           status? <h1>Hello World</h1> : null 
//       }

//        <button onClick={()=>setStatus(false)}>
//         Hide
//         </button>     
//        <button onClick={()=>setStatus(true)}>
//         Show
//        </button>

//        <button onClick={()=>setStatus(!status)}>Toggle</button>



//     </div>
//   )
// }

// export default App;




//lec 17

// import './App.css';
// import { useState } from 'react'
// function App() {
//   const [name, setName] = useState("");
//   const [tnc, setTnc] = useState(false);
//   const [interest, setInterest] = useState("");
//   function getFormData(e) {
//     console.warn(name,tnc,interest)
//     e.preventDefault()
//   }
//   return (
//     <div className="App">
//       <h1>Handle form in React</h1>
//       <form onSubmit={getFormData}>
//         <input type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)} /> <br /> <br />
//         <select onChange={(e) => setInterest(e.target.value)} >
//           <option >
//             Select Options

//           </option>
//           <option>Marvel</option>
//           <option >DC</option>
//         </select> <br /><br />
//         <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
//         <span>Accept Terms and conditions</span><br /><br />
//         <button type="submit">Submit</button>


//       </form>

//     </div>
//   )
// }


// export default App;





//lec 18
// import logo from './logo.svg';
// import './App.css';
// import Profile from './Profile'
// function App(){
//   return(
//     <div className="App">
//       <Profile/>
//     </div>
//   )
// }

// export default App;






// lec 19
// import logo from './logo.svg';
// import './App.css';
// import React, {useState} from 'react' 
// import Login from './Login'
// function App(){
//   const data = true;
//   return(

//     <div className="App">
//       <Login/>
//     </div>

//   )
// }

// export default App;







//lec 20 
// import logo from './logo.svg';
// import './App.css';
// import React, {useState} from 'react' 
// import User from './User1.js'
// import Members from './Members.js';



// function App(){
//   function getData(){
//     alert("Hello from app")
//   }
//   return(

//     <div className="App">
//       <User data={getData} />
//       <div>
//         <Members data={getData} />
//       </div>

//     </div>

//   );
// }

// export default App;





//lec 21
//only understanding of life cycle.





//lec 22
// import logo from './logo.svg';
// import './App.css';
// import React from 'react'
// class App extends React.Component{
//  constructor(){
//   super();
//   // console.warn("constructor");
//   this.state={
//     data:"Ravi"
//   }
//  }

//  render(){
//   // console.warn("render");
//   return(
//     <h1>Hello World {this.state.data} </h1>
//   )
//  }

// }

// export default App;







//lec 23 
// import logo from './logo.svg';
// import './App.css';
// import React from 'react'
// import User from './Render.js'
// function App(){
//   const [name, setName]=React.useState("Ramesh")
//   return(
//     <div className="App">
//       <h1>Render Method in React</h1>
//       <User name={name}/>
//       <button onClick={()=>setName("Sidhhu")}>Update Name</button>
//     </div>
//   );
// }

// export default App;






//lec 24
// import './App.css';
// import React from 'react'
// class App extends React.Component{
//   constructor(){
//     super();
//     // console.warn("constructor")
//     this.state={
//       name:"ravi"
//     }
//   }
//   componentDidMount(){
//     console.warn("componentDidMount");
//   }



//   render(){
//     console.warn("render")
//     return(
//       <div className="App">
//         <h1>Component Did Mount {this.state.name}</h1>
//         <button onClick={()=>{this.setState({name:'ramesh'})}}>Update name</button>
//       </div>
//     )
//   }
// }
// export default App;





//lec 25
// import './App.css';
// import React from 'react'
// class App extends React.Component{
//   constructor(){
//     super();
//     console.warn("constructor")
//     this.state={
//       // name:"ramesh"
//       count:0
//     }
//   }

//   componentDidUpdate(preProps, preState, snapshot){
//     // console.warn("componentDidUpdate", preState.count, this.state.count)

//     console.warn("componentDidUpdate",snapshot)
//     if(this.state.count<10){
//       this.setState({count:this.state.count+1})
//     } 




//   }
//   render(){
//     // console.warn("render")



//      return (
//       <div className="App">
//         <h1>Component Did Update {this.state.count } </h1>
//         <button onClick={()=>

//           // this.setState({name:"sidhhu"}
//           // {this.setState({count:this.state.count + 1})}}
//           {this.setState({count:1})}}
//         >Update Name</button>
//       </div>
//      )



//   }

// }

// export default App;












//lec 26
// import './App.css';
// import React from 'react'
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       count:0
//     }
//   }

//  shouldComponentUpdate(){
//   console.warn("shouldComponentUpdate",this.state.count);
//   if(this.state.count>5 && this.state.count<10)
//   {
//     return true;
//   }

//  }

//   render(){
//     return(
//       <div className="App">
//         <h1>Should Component Update{this.state.count} </h1>
//         <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update counter</button>
//       </div>
//     )
//   }
// }

// export default App;








//lec 27
// import './App.css';
// import React from 'react'
// import Student from './Student.js'
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       show:true
//     }
//   }
//   render(){
//     return(
//       <div className="App">
//         {/* <h1>Component will Unmount </h1> */}
//         {
//           this.state.show? <Student/>:<h1>Child component Removed </h1>
//         }

//         <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Component </button>
//       </div>
//     )
//   }
// }

// export default App;










//lec 28
// import './App.css';
// import React,{useState} from 'react'
// function App(){
//   const [data, setData] = useState("Rahul")
//   return(
//     <div className="App">
//       <h1>{data}!</h1> 
//       <button onClick={()=>setData("sidhhy")}>Update data</button>
//     </div>
//   )
// }

// export default App;







//lec 29
// import './App.css';
// import React,{useEffect,useState} from 'react'
// function App(){
//   const [count, setCount] = useState(0)
//   useEffect(() =>{
//     // alert("useEffect")
//     console.warn("useEffect")
//   })
//   return(
//     <div className="App">
//       <h1>useEffect in React {count} </h1>
//       <button onClick={()=>setCount(count+1)}> Update Counter </button>
//     </div>
//   )
// }

// export default App;










//lec 30
// import './App.css'
// import React, {useEffect,useState} from 'react'
// import User from './User2.js'
// function App(){
//   const [data, setData]=useState(10);
//   const [count, setCount]=useState(100);
//   // useEffect(()=>{
//     // console.warn("use effect called")
//   // },[data])


//   // useEffect(()=>{
//     // alert("count is " + count)
//   // },[count])

//   return(
//     <div className="App">
//       {/* <h1>Count: {count}</h1> */}
//       {/* <h1>Data : {data}</h1> */}

//       <User count={count} data={data} />


//       <button onClick={()=>setCount(count+1)}>Update Count </button>
//       <button onClick={()=>setData(data+1)}>Update Data</button>
//     </div>
//   )
// }

// export default App;







//lec 31 
// import './App.css';
// import './style.css'
// import style from './custom.module.css';
// import React from 'react'
// function App(){
//   return(
//     <div className="App">
//       <h1 className='primary'>Style type 1 in React js </h1>
//       <h1 style={{color:'red', backgroundColor:"black"}}>style type 2 in React js </h1>

//       <h1 className={style.success}>Style type 3 in React js </h1>
//     </div>
//   )
// }
// export default App;








//lec 32 
// import './App.css';
// import React from 'react'
// import {Button,Alert} from 'react-bootstrap'
// function App(){
//   return (
//     <div className="App">
//       <h1>Install Bootstrap </h1>
//       <Button onClick={()=>alert("Hello")}>Click Me</Button>
//       <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button>{' '}
//       <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button>{' '}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>

//       {[
//         'primary',
//         'secondary',
//         'success',
//         'danger',
//         'warning',
//         'info',
//         'light',
//         'dark',
//       ].map((variant) => (
//         <Alert key={variant} variant={variant}>
//           This is a {variant} alert—check it out!
//         </Alert>
//       ))}
//     </div>
//   )
// }
// export default App;








//lec 33
// import './App.css'
// import React from 'react'
// function App(){
//   // const students=['Anil','Sidhu', 'Sam','Peter'];
//   const students=[
//     {name:"anil", email:'anil@test.com', contact:888},
//     {name:'sidhhu', email:'sidhhu@test.com', contact:111},
//     {name:'sam', email:'sam@test.com', contact:222},
//     {name:'peter', email:'peter@test.com', contact:333},



//   ]
//   //map looping 
//   // students.map((item)=>{
//   //   console.warn("My name is : ", item)
//   // });
//   // for(let i=0;i<students.length;i++){
//   //   console.warn("in for loop My name is : ", students[i])
//   // }
//   return(
//     <div className='App'>
//       <h1>Handle Array with List</h1>
//       <table border='1'>
//          <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Contact</td>
//          </tr>






//       {
//         students.map((data)=>
//         <tr>
//           <td>{data.name}</td>
//           <td>{data.email}</td>
//           <td>{data.contact}</td>
//         </tr>

//         )
//       }
//       </table>

//     </div>
//   )
// }
// export default App;








//lec 34
// import './App.css';
// import React from 'react';
// import {Table} from 'react-bootstrap'

// function App(){
//   const users=[
//     {name:'anil', email:'anil@test.com', contact:'111'},
//     {name:'ravi', email:'ravi@test.com', contact:'222'},
//     {name:'tushar', email:'tushar@test.com', contact:'111'},
//     {name:'sam', email:'sam@test.com',contact:'111'},
//   ]

//   return(
//     <div className="App">
//       <h1>List with bootstrap Table</h1>
//       <Table striped variant='dark'>
//         <tbody>
//         <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Contact</td>
//         </tr>

//        {
//         users.map((item,i)=>
//         item.contact === '111'?
//         <tr key={i}>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//           <td>{item.contact}</td>
//         </tr>:null


//        )}
//          </tbody>
//       </Table>
//     </div>
//   )




// }

// export default App;






//lec 35
// import './App.css';
// import React from 'react'
// import { Table } from 'react-bootstrap'
// function App() {
//   const users = [
//     {
//       name: "anil", email: 'anil@test.com', address: [
//         { Hn: "10", city: "Noida", country: "India" },
//         { Hn: "34", city: "Noida", country: "India" },
//         { Hn: "43", city: "Noida", country: "India" },
//         { Hn: "90", city: "Noida", country: "India" }
//       ]
//     },
//     {
//       name: "Burce", email: "burce@test.com", address: [
//         { Hn: "10", city: "Noida", country: "India" },
//         { Hn: "34", city: "Noida", country: "India" },
//         { Hn: "43", city: "Noida", country: "India" },
//         { Hn: "90", city: "Noida", country: "India" }
//       ]
//     },

//     {
//       name: "Peter", email: "peter@test.com", address: [
//         { Hn: "10", city: "Noida", country: "India" },
//         { Hn: "34", city: "Noida", country: "India" },
//         { Hn: "43", city: "Noida", country: "India" },
//         { Hn: "90", city: "Noida", country: "India" }
//       ]
//     },

//     {
//       name: "Sam", email: "sam@test.com", address: [
//         { Hn: "10", city: "Noida", country: "India" },
//         { Hn: "34", city: "Noida", country: "India" },
//         { Hn: "43", city: "Noida", country: "India" },
//         { Hn: "90", city: "Noida", country: "India" }
//       ]
//     },
//   ]



//   return (
//     <div className='App'>
//       <h1>List with Nested Array </h1>
//       <Table  >
//         <tbody>
//           <tr>
//             <td>S.No.</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Address</td>
//           </tr>
//         </tbody>
//         {
//           users.map((item, i) =>
//             <tr key={i}>
//               <td>{i + 1}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{
//                 item.address.map((data) =>
//                   <tr>
//                     <td>{data.Hn}</td>
//                     <td>{data.city}</td>
//                     <td>{data.country}</td>
//                   </tr>
//                 )
//               }</td>
//             </tr>
//           )
//         }
//       </Table>
//     </div>
//   );


// }

// export default App;







//lec 36
// import './App.css';
// import React from 'react'
// import User from './User1.js'

// function App(){
//   const users = [
//     {name:"ramesh", email:'ramesh@test.com', contact:"111"},
//     {name:"ravi", email:'ravi@test.com', contact:"111"},
//     {name:"tushar", email:'tushar@test.com', contact:"111"},

//     {name:"ketan", email:'ketan@test.com', contact:"111"},


//   ]
//   return(
//     <div className="App">
//       <h1>Reuse Component with List </h1>

//       {
//         users.map((item, i)=>
//         <User item={item}/>
//         )
//       }
//     </div>
//   )
// }

// export default App;










//lec 37










// lec 38
// import React from 'react'
// import './App.css';
// import User from './User1.js'
// function App(){
//     function parentAlert(data){
//       console.log(data);
//       alert(data.name);
//     }
//   return(
//     <div className="App">
//       <h1>Lifting State up </h1>
//       <User alert={parentAlert} />
//     </div>
//   )
// }

// export default App;



//lec 39
// import './App.css';
// import React,{PureComponent} from 'react'
// import User from './User1.js'
// class App extends React.Component{
//   // class App extends PureComponent{
//   constructor(){
//     super();
//     this.state={
//       count:1
//     }
//   }

//   render()
//   {
//     // console.warn("Check-re-rendering")
//     return(
//       <div className="App">
//         {/* <h1>Pure Component in React {this.state.count}</h1> */}
//         <User count={this.state.count} />
//         <button onClick={()=>this.setState({
//           count:this.state.count+1
//         })}>Update Counttt</button>
//       </div>
//     )
//   }
// }
// export default App;






//lec 40
// import './App.css';
// import React,{useState, useMemo} from 'react'
// function App(){
//   const [count, setCount]=useState(0);
//   const[item, setItem]=useState(10);
//   const multiCountMemo = useMemo(function multiCount(){

//   console.warn("multiCount")
//   return count*5
//   },[count])

//   return(
//     <div className="App">
//       <h1>useMemo hook in React </h1>
//       <h2>Count: {count}</h2>
//       <h2>Item: {item} </h2>
//       <h2>{multiCountMemo}</h2>
//       <button onClick={()=>setCount(count+1)}>Update Counter</button>
//       <button onClick={()=> setItem(item*10)}>Update Itemmm</button>
//     </div>
//   )
// }

// export default App;







//lec 41 
// import './App.css';
// import React,{createRef} from 'react'
// class App extends React.Component{
//   constructor(){
//     super();
//     this.inputRef=createRef();
//   }
//   componentDidMount(){
//     // console.warn(this.inputRef.current.value="1000")
//   }
//   getVal(){
//     console.warn(this.inputRef.current.value)
//     this.inputRef.current.style.color="red"
//     this.inputRef.current.style.backgroundColor="black";
//   }

//   render(){
//     return(
//       <div className="App">
//         <h1>Ref in React </h1>
//         <input type="text" ref={this.inputRef} />
//         <button onClick={()=>this.getVal()}>Check Ref</button>
//       </div>
//     )
//   }
// }

// export default App;












//lec 42
// import './App.css';
// import React,{useRef} from 'react'
// function App(){
//   let inputRef=useRef(null)
//   function handleInput(){
//     console.warn("Function call")
//     // inputRef.current.value="1000"
//     // inputRef.current.focus();
//     inputRef.current.style.color="red";
//     inputRef.current.style.display="none";

//   }
//   return(
//     <div className="App">
//       <h1>UseRef in React</h1>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleInput}>Handle Input </button>
//     </div>
//   )
// }
// export default App;










//lec 43 
// import './App.css';
// import React,{useRef} from 'react'
// import User  from './User1.js'
// function App(){
//   let inputRef=useRef(null);
//     function updateInput(){
//       inputRef.current.value="1000"
//       inputRef.current.style.color="red";
//       inputRef.current.focus()
//     }
//   return(
//     <div className="App">
//       <h1>forwardRef in React </h1>
//       <User ref={inputRef} />
//       <button onClick={updateInput}>
//         update InputBox
//       </button>
//     </div>
//   )
// }

// export default App;












//lec 44
// import './App.css';
// import React,{useState} from 'react'
// function App(){
//   let [val, setVal]=useState("000")
//   let [item, setItem] = useState("")
//   return(
//     <div className="App">
//       <h1>Controlled Component </h1>
//       <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
//       <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
//       <h1>value {val}</h1>
//     </div>
//   )
// }


// export default App;












// lec 45 
// import './App.css';
// import React,{useRef} from 'react'
// function App(){
//    let inputRef=useRef(null)
//    let inputRef2=useRef(null)



//   function submitForm(e){
//     e.preventDefault()
//     console.warn("input field 1 value : ", inputRef.current.value)
//     console.warn("input field 2 value : ", inputRef2.current.value)
//     let input3=document.getElementById('input3').value
//     console.warn("input field 3 value : ", input3)
//   }


//   return (
//     <div className='App'>
//       <h1>Uncontrolled Component</h1>
//       <form onSubmit={submitForm}>
//       <input
//       ref={inputRef} type="text" /> <br /><br />
//       <input 
//       ref={inputRef2}
//       type="text" /><br />
//       <br />
//       <input id='input3' type="text" /><br /><br />
//       <button>Submit </button>


//       </form>
//     </div>
//   )
// }

// export default App; 








//lec 46
// import './App.css';
// import React, {useRef, useState} from 'react'
// function App(){

//   return(
//     <div className='App'>
//       <h1>HOC</h1>
//       {/* <Counter/>
//       <Counter/> */}

//       <HOCRed cmp={Counter} />
//       <HOCGreen cmp={Counter} />


//     </div>
//   )
// }

// function HOCRed(props){
//   return <h2 style={{backgroundColor:'red', width:100}}><props.cmp /></h2>
// }

// function HOCGreen(props){
//   return <h2 style={{backgroundColor:"green", width:100}}><props.cmp /></h2>
// }



// function Counter(){
//   const [count, setCount]=useState(0)
//   return<div>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(count+1)}>Update</button>
//   </div>
// }

// export default App;






//lec 47 
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
// import Home from './component/Home.js'
// import About from './component/About.js'

// function App(){
//   return(
//     <div className="App">
//     <BrowserRouter>
//     <Routes>

//       <Route path="/"  element={<Home />}   />

//       <Route path="/about" element={<About />} />

//     </Routes>
//     </BrowserRouter>
//     </div>
//   )
// }

// export default App;






//lec 48
// import './App.css';
// import { BrowserRouter, Routes , Route } from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About'
// import NavBar from "./component/Navbar";
// import { Navbar } from 'react-bootstrap';


// function App(){
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path='/about' element={<About />}/>

//       </Routes>
//       </BrowserRouter>
//     </div>
//   )

// }

// export default App;






//lec 49
// import "./App.css";
// import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
// import Home from './component/Home'
// import About from './component/About'
// import NavBar from './component/Navbar'
// import Page404 from "./component/Page404";

// function App(){
//   return(
//     <div className="App">
//       <BrowserRouter>
//       <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />}  />
//           <Route path="/about" element={<About />}  />

//           {/* <Route path="/*" element={<Page404 /> }  /> */}

//           <Route path="/*" element={<Navigate to="/" />}  />





//         </Routes>

//       </BrowserRouter>
//     </div>
//   )
// }

// export default App;












//lec 50 
//  import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
//  import Home from './component/Home'
//  import About from './component/About'
// import NavBar from "./component/Navbar"
// import Filter from "./component/Filter"
//  import Page404 from "./component/Page404"
//  import User from "./component/User";
//  import Contact from "./component/Contact";
//  import Company from './component/Company'
//  import Channel from './component/Channel'
//  import Other from './component/Other'
//  import Login from './component/Login.js'
//  import './App.css'
// import Protected from "./component/Protected.js";
//  function App(){
//   return(

//      <div className="App">
//      < BrowserRouter >
//        <NavBar />
//        <Routes>
//            <Route path="/" element={< Protected Component={Home} />} />

//            <Route path="/login" element={<Login />} />

//            <Route path="/about" element={<Protected Component={About}/>} />

//            <Route path="/user/:name" element={<User />} />

//            <Route path="/*" element={<Navigate to="/" />} />

//            <Route path="/filter" element={
//             <Protected Component={Filter} />
//            } />

// {/* lec 55 */}
//           <Route path="/contact/" element={<Contact />} >
//             <Route path="company" element={<Company />} />
//             <Route path="channel" element={<Channel />} />
//             <Route path="other" element={<Other />} />
//             </Route>




//        </Routes>

//      </BrowserRouter>

//      </div>
//   )
//  }

//  export default App;











//lec 59
// import './App.css';
// import React from 'react'
// import {  Link, Route, Routes }  from 'react-router-dom';
// import Nav from "./Nav.js";
// import Home from './component/Home.js'
// import About from './component/About.js'
// function App(){
//   return(
//     <div className="App">



//        <Routes>
//        <Nav />
//         <Route path='/home' ><Home />
//            </Route>
//         <Route path="/about" ><About /></Route>
//         </Routes>


//     </div>
//   )
// }


// function Home(){
//   return(
//     <div>
//       <h1>Home page </h1>
//       <p>This is Home page of website </p>
//     </div>
//   )
// }

// function About(){
//   return(
//     <div>
//       <h1>About Page </h1>
//       <p>
//         This is about page of website 
//       </p>
//     </div>
//   )
// }

// export default App;







// //lec 61
// import './App.css';
// import React from 'react'
// import { BrowserRouter , Router, Link, Route ,Routes} from 'react-router-dom';
// function App(){
//   return(

//     <div className="App">

//       <Router>
//         <Routes>
//         <Link to="/">Home</Link><br /><br />
//         <Link to="/about">About</Link><br /><br />
//         <Route path="/" exact={true}><Home /></Route>
//         <Route path="/about"><About /></Route>
//         </Routes>
//       </Router>

//     </div>
//   )
// }

// function Home(){
//   return(
//     <div>
//       <h1>Home page</h1>
//       <p>This is Home page</p>
//     </div>
//   )
// }

// function About(){
//   return(
//     <div>
//       <h1>About page</h1>
//       <p>this is the about page</p>
//     </div>
//   )
// }

// export default App;








//safe zone code lec 59-60
// import './App.css';
// import React from 'react'
// import { BrowserRouter as Router , Route,Link,Routes  } from 'react-router-dom';

// function App(){
//   return(
//     <div className="App">
//       <h1>Routing Setup</h1>
//       <Router>

//         <Link to="/home">Home Page </Link>
//         <Link to="/about">About Page</Link>
//         {/* <Home />
//         <About /> */}
//         <Routes>
//         <Route path="/home" element={<Home/>} />

//         <Route path="/about" element={<About/>} />
//         </Routes>



//       </Router>
//     </div>
//   )
// }

// function Home(){
//   return(
//     <div>
//       <h1>Home page</h1>
//       <p>This is Home page of website </p>
//     </div>
//   )
// }


// function About(){
//   return(
//     <div>
//       <h1>About Page </h1>
//       <p>This is About Page </p>
//     </div>
//   )
// }

// export default App;









//lec 60 
// import './App.css';
// import React from 'react'
// import {  Route,Link,Routes  } from 'react-router-dom';
// import Nav from './Nav.js'
// import Home from './Home.js'
// import About from './About.js'

// function App(){
//   return(
//     <div className="App">
//       <h1>Routing Setup</h1>


//         {/* <Link to="/home">Home Page </Link>
//         <Link to="/about">About Page</Link> */}
//         {/* <Home />
//         <About /> */}

//         <Nav />
//         <Routes>


//         <Route path="/about" element={<About/>} />

//         <Route path="/" exact={true}  element={<Home/>} />
//         </Routes>




//     </div>
//   )
// }




// export default App;












//lec 61 
// import './App.css'
// import React from 'react'
// import {BrowserRouter as Router, Link, Route,  Routes } from 'react-router-dom'
// function App(){
//   return(
//     <div className="App">
//       <Router>
//         <Link to="/">Home</Link> <br /><br />
//         <Link to="/about">About</Link>
//         <Link to="/login">Login</Link>




//           <Routes>
//              <Route path="/" exact={true} element={<Home />} />
//              <Route path="/about" element={<About />}/>
//              <Route path="*" element={<PageNotFound />} />


//           </Routes>

//       </Router>
//     </div>
//   )
// }




// function Home(){
//   return (
//     <div>
//       <h1>HOme page </h1>
//       <p>this is home page </p>
//     </div>
//   )
// }


// function About(){
//   return(
//     <div>
//       <h1>About Page </h1>
//       <p>This is About page </p>
//     </div>
//   )
// }


// function PageNotFound(){
//   return(
//     <div>
//       <h1>404 page </h1>
//       <p>This page is not found </p>
//     </div>
//   )
// }

// export default App;











//lec 62
// import './App.css';
// import React from 'react'
// import {Link, BrowserRouter as Router,Routes ,Route  } from 'react-router-dom'
// import User from './User1.js'

// function App(){
//   let users = [
//     {id:1, name:'anil', email:'anil@test.com'},
//     {id:2,name:'sam', email:'sam@test.com'},
//     {id:3,name:'peter',email:'peter@test.com'},
//     {id:4,name: 'bruce', email:'bruce@test.com'},
//     {id:5, name:'tony', email:'tony@test.com'},
//   ]


//   return(
//     <div className='App'>
//       <Router>

//       <h1>React Dynamic Routing</h1>
//       {
//         users.map((item)=>
//         <div><Link to={"/user/"+item.id +'/'+item.name}><h3> {item.name}</h3></Link></div>
//         )
//       }
//       <Routes>
//       <Route path="/user/:id/:name" element={<User />}   />
//       </Routes>
//         </Router>
//     </div>
//   )
// }

// export default App;








//lec 63
// import React, {useEffect, useState} from 'react'
// function App(){
//   const [data, setData] = useState({ data: [] });

//   useEffect(() => {
//     fetch("https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2024-01-01&end_date=2024-01-15&hourly=temperature_2m")
//       .then((result) => {
//         result.json().then((resp) => {
//           console.log("API response:", resp);
//           setData(resp);
//         })
//       })
//   }, [])

//   console.warn(data)
//   return(
//     <div className="App">
//       <h1>Get Api Call</h1>
//        <table>
//         <tr>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Mobile</td>
//         </tr>
//         {
//           data.data.map((item)=>
//           <tr>
//             <td>{item.userId}</td>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.mobile}</td>
//           </tr>

//           )
//         }
//        </table>

//     </div>
//   )
// }

// export default App;

// import React, { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:4000/users")
//       .then((result) => result.json())
//       .then((resp) => {
//         console.log("API response:", resp);
//         setData(resp);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setData({ error: true });
//       });
//   }, []);

//   if (!data) {
//     return <p>Loading...</p>;
//   }

//   if (data.error) {
//     return <p>Error fetching data</p>;
//   }

//   return (
//     <div className="App">
//       <h1>Get Api Call</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Mobile</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.data && data.data.map((item) => (
//             <tr key={item.userId}>
//               <td>{item.userId}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.mobile}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;








//lec 65
// import './App.css';
// import React, { useEffect, useState } from 'react'
// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("")
//   function saveUser() {
//     console.warn({name, email, mobile});
//     let data = {name,email, mobile}
//     fetch("http://localhost:4000/users",{
//       method:'POST',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(data)
//     }).then((result)=>{
//       // console.warn("result",result);
//       result.json().then((resp)=>{
//         console.warn("resp",resp)

//       })
//     })
//     }



//   return (
//     <div className="App">
//       <h1>POST API EXAMPLE </h1>
//       <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name='name' /><br /><br />
//       <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" /> <br /><br />
//       <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile" /><br /><br />
//       <button type="button" onClick={saveUser}>Save New User </button>
//     </div>
//   )
// }
// export default App;






//lec 66
//ye code run ho raha hai bhai 
// import './App.css';
// import React, {useEffect, useState} from 'react'
// function App(){
//   const [users, setUser]=useState([])
//   useEffect(()=>{
//     getList()
//     },[])

//   console.warn(users)


//   function getList(){
//     fetch('http://localhost:4000/users').then((result)=>{
//       result.json().then((resp)=>{
//         //console.warn(resp)
//         setUser(resp)
//       })
//     })
//   }

//   function deleteUser(id)
//   {
//     fetch(`http://localhost:4000/users/${id}`,{
//       method:'DELETE'
//     }).then((result)=>{
//       result.json().then((resp)=>{

//         console.warn(resp)
//         getList()
//       })
//     })
//   }
//   return(
//     <div className="App">
//       <h1>Delete Data with API Call</h1>
//       <table border='1'>
//         <tbody>
//           <tr>
//             <td>ID</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Mobile</td>
//           </tr>{
//             users.map((item,i)=>
//             <tr key={i}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.mobile}</td>
//              <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
//             </tr>
//             )
//           }
//         </tbody>

//       </table>
//     </div>
//   )
// }
// export default App;














//lec 67
// import './App.css';
// import React, { useEffect, useState } from 'react'
// function App() {
//   const [users, setUser] = useState([])
//   const [name, setName]=useState("");
//   const [email, setEmail]=useState("");
//   const[mobile, setMobile]=useState("");



//   useEffect(() => {
//     getUsers();
//   }, [])

//   // console.warn(users)


//   function getUsers() {
//     fetch('http://localhost:4000/users').then((result) => {
//       result.json().then((resp) => {
//         //console.warn(resp)
//         setUser(resp)
//         setName(resp[0].name)
       
//         setEmail(resp[0].email)
//         setMobile(resp[0].mobile)
            
//       })
//     })
//   }

//   function deleteUser(id) {
//     fetch(`http://localhost:4000/users/${id}`, {
//       method: 'DELETE'
//     }).then((result) => {
//       result.json().then((resp) => {

//         console.warn(resp)
//         getUsers()
//       })
//     })
//   }

//   function selectUser(id){
//     console.warn(users[id])
//     let item = users[id-1]
//     setName(item.name)
//     setMobile(item.mobile)
//     setEmail(item.email)
//   }



  





//   return (
//     <div className="App">
//       <h1>Delete Data with API Call</h1>
//       <table border='1'>
//         <tbody>
//           <tr>
//             <td>ID</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Mobile</td>
//           </tr>{
//             users.map((item, i) =>
//               <tr key={i}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.mobile}</td>
//                 <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>

//                 <td><button onClick={()=> selectUser(item.id)}>Update</button></td>
//               </tr>
//             )
//           }
//         </tbody>

//       </table>
//       <div>
//         <input type="text" value={name} /><br /><br />
//         <input type="text" value={mobile} /><br /><br />
//         <input type="text" value={email} /><br /><br />
//         <button>Update User </button>
//       </div>
//     </div>
//   )
// }
// export default App;


//lec 67 part 
// import React, { useEffect, useState } from 'react';

// function App() {
//   const [users, setUser] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");

//   useEffect(() => {
//     getUsers();
//   }, []);

//   function getUsers() {
//     fetch('http://localhost:4000/users').then((result) => {
//       result.json().then((resp) => {
//         setUser(resp);
//         setName(resp[0]?.name || "");
//         setEmail(resp[0]?.email || "");
//         setMobile(resp[0]?.mobile || "");
//       });
//     });
//   }

//   function deleteUser(id) {
//     fetch(`http://localhost:4000/users/${id}`, {
//       method: 'DELETE',
//     }).then((result) => {
//       result.json().then(() => {
//         getUsers();
//       });
//     });
//   }

//   function selectUser(id) {
//     if (users.length >= 0 && id >= 0 && id <= users.length) {
//       let item = users[id];
//       setName(item.name);
//       setMobile(item.mobile);
//       setEmail(item.email);
//     }
//   }


//   return (
//     <div className="App">
//       <h1>Delete Data with API Call</h1>
//       <table border='1'>
//         <tbody>
//           <tr>
//             <td>ID</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Mobile</td>
//           </tr>
//           {users.map((item, i) => (
//             <tr key={i}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.mobile}</td>
//               <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
//               <td><button onClick={() => selectUser(item.id)}>Update</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         <input type="text" value={name} /><br /><br />
//         <input type="text" value={mobile} /><br /><br />
//         <input type="text" value={email} /><br /><br />
//         <button>Update User </button>
//       </div>
//     </div>
//   );
// }

// export default App;
















//lec 68
// import './App.css'
// import React, { useEffect,useState} from 'react'
// function App() {
//   const [users, setUser] = useState([])
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [userId, setUserId] = useState(null)

//   useEffect(() => {
//     getUsers();
//   }, [])

//   function getUsers() {
//      fetch("http://localhost:4000/users").then((result) =>{
//       result.json().then((resp) => {
//         //console.warn(resp)
//         setUser(resp)
//         setName(resp[0].name)
//         setMobile(resp[0].mobile)
//         setEmail(resp[0].email)
//         setUserId(resp[0].id)
//       })
//      })
//   }

   

//   function deleteUser(id){
//     fetch(`http://localhost:4000/users/${id}`, {
//       method:'DELETE'
//     }).then((result) =>{
//       result.json().then((resp) => {
//         console.warn(resp)
//         getUsers()
//       })
//     })
//   }

  


  
//   function selectUser(id) {
//     if (users.length >= 0 && id >= 0 && id <= users.length) {
//       let item = users[id];
//       setName(item.name);
//       setMobile(item.mobile);
//       setEmail(item.email);
//       setUserId(item.id)
//     }
//   }

//   function updateUser()
//   {
//     let item = {name, mobile, email}
//     console.warn("item", item)
//     fetch(`http://localhost:4000/users/${userId}`,{
//       method: 'PUT',
//       headers:{
//         'Accept': 'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(item)

//     }).then((result) =>{
//       result.json().then((resp) => {
//         console.warn(resp)
//         getUsers()
//       })
//     })
//   }

//   return(
//     <div className='App'>
//       <h1>Update user data with api</h1>
//       <table border="1" style={{float: 'left'}}>
//         <tbody>
//           <tr>
//             <td>ID</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Mobile</td>
//             <td>Operations</td>
//           </tr>{
//             users.map((item, i) =>
//             <tr key={i}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.mobile}</td>
//                 <td><button onClick={()=> deleteUser(item.id)}>Delete</button></td>
//                  <td><button onClick={() => selectUser(item.id)}>Update</button></td>
//             </tr>
//             )
//           }
//         </tbody>

//       </table>

//       <div>
//         <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} /> <br /><br />
//         <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} /> <br /><br />
//         <input type="text" value={mobile} onChange={(e)=>{
//           setMobile(e.target.value)
//         }} /> <br /><br />
//         <button onClick={updateUser}>update User</button>
//       </div>

//     </div>
//   )




// }
// export default App;













//lec 69
// import './App.css';
// import React, {useState} from 'react'
// function App(){
//   const [count, setCount] = useState(1)
//   function updateCounter() {


//     // let rand = Math.floor(Math.random() * 10)
//     // setCount((pre) =>{
//     //   console.warn(pre)
//     //   if(pre > 5){
//     //     alert("low value")
//     //   }
//     //   return rand;
//     // })


//     for(let i=0;i<5;i++){
//       setCount((pre)=>
//       {
//         return pre+1
//       })
//     }



//   }


// return (
//   <div className="App">
//     <h1>{count}</h1>
//     <button onClick={updateCounter}>Click me to update counter </button>
//   </div>
// )
// }

// export default App;








//lec 70
// import './App.css';
// import React from 'react'
// import User from './User1.js'
// function App(){
//   const[count, setCount]=React.useState(0)
//     return(
//       <div className="App">
//         {/* <h1>Previous Props </h1> */}
//         <User  count={count}/>
//         {/* <button onClick={()=>setCount(count+1)}>Update Counter </button> */}

//         <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update Counter </button>
//       </div>
//     )
// }

// export default App;









//lec 71 
// import './App.css';
// import React from 'react'
// function App(){
//   const [data, setData]=React.useState({name:'anil',age:27})
//   return(
//     <div className='App'>
//       <h1>State Object with Hooks</h1>
//       {/* <h1>{data.name}</h1>
//       <h1>{data.age}</h1> */}

//       {/* <input type="text" placeholder='enter name' value={data.name} onChange={(e)=>{setData({age:data.age, name:e.target.value})}} />
//       <input type="text" placeholder='enter age ' value={data.age} onChange={(e)=>{setData({name:data.name, age:e.target.value})}} /> */}


// <input type="text" placeholder='enter name' value={data.name} onChange={(e)=>{setData({...data, name:e.target.value})}} />

// <input type="text" placeholder='enter name' value={data.age} onChange={(e)=>{setData({...data, age:e.target.value})}} />
       
//        <h1>{data.name}</h1>
//        <h1>{data.age}</h1>
//     </div>
//   )
// }

// export default App;










//lec 72
// import React from 'react';
// import { CommonContext } from './component/CommonContext';
// import Main from './component/main';
// import UpdateButton from './component/UpdateButton';
// import Header from './component/Header';
// import Footer from './component/Footer';
// class App extends React.Component{
//   constructor(){
//     super()


    
//     this.updateColor=(color)=>{
//       this.setState({
//         color:color 
//       })
//     }
//     this.state={
//       color:"green",
//       updateColor:this.updateColor
//     }

//   }

//   render(){
//     return(
//       <CommonContext.Provider value={this.state} >
//         <Header/>
//       <h1>Complete and easy example for Context API </h1>
//       <Main />

//       <Footer/>
//       <UpdateButton/>
//       </CommonContext.Provider>
//     )
//   }
// }
// export default App;










//lec 76

// import React from 'react';
// import User from './User1.js'
// import logo from './logo.svg';
// import './App.css';


// function App(){
//   return(
//     <div className="App">
//       {/* <h1>App Component </h1> */}
//       <User data={{name: 'anil sidhhu',age:46}} />
//     </div>
//   )
// }

// export default App;







//lec 78
import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Home from './component/Home.js'
import HomeContainer from './containers/HomeContainer.js'
import HeaderContainer from './containers/HeaderContainer.js';
function App(){
  return(
    <div className="App">
      {/* <Home /> */}
      <HeaderContainer/>
      <HomeContainer />
    </div>
  )
}
export default App;





