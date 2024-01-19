// import React from 'react'
// function User(props) {
//     return(
//         <div>
//             <h1>User Component </h1>
//             <button onClick={()=>props.data()}> Call data function </button>
//         </div>
//     )
// }

// export default User;




// function User(props){
//     return(
//         <div>
//         <span> {props.data.name}</span>
//         <span>{props.data.email}</span>
//         <span>{props.data.address}</span>
//         </div>

//     )
// }
// export default User;


// function User(props){
//     // const data = "Anil Sidhhu"
//     const data = {name:'anil sidhhu', email:'anil@test.com'}
//     return(
//         <div>
//             <h2>User Name:  </h2>
//             <button onClick={()=>props.alert(data)}>Click Me </button>
//         </div>
//     )
// }

// export default User;





// import './App.css';
// import React, {PureComponent} from 'react'
// // class User extends React.Component
// class User extends PureComponent
// {
//     render(){
//         console.warn("User component check-rerendering")
//         return(
//             <div className="App">
//                 <h1>User Component {this.props.count}</h1>
//             </div>
//         )
//     }
// }

// export default User;






// import React,{forwardRef} from 'react'
// function User(props, ref){
//     return(
//         <div>
//             <input type="text"  ref={ref}/>
//         </div>
//     )
// }
// export default forwardRef(User);


//lec62 
//ye code nahi chalega purana hai 
// import {withRouter} from 'react-router-dom'
// function User(props)
// {
//     console.warn(props)
//     return(
//     <div><h1>User No {props.match.params.id}</h1>
//     <h1>User Name {props.match.params.name}</h1></div>

//     )
// }

// export default withRouter(User);






//lec 62 ye code chalega sahi se 
// import React from 'react';
// import { useParams } from 'react-router-dom';

// function User() {
//   const { id, name } = useParams();

//   return (
//     <div>
//       <h1>Hi this is user no. {id}</h1>
//       <h1>Hi this is  {name}</h1>
//     </div>
//   );
// }

// export default User;








//lec 70

// import React, {useEffect, useRef} from 'react';
// function User(props)
// {
//      const lastVal=useRef();
//      useEffect(()=>{
//       lastVal.current=props.count 
//      })
//      const previosProps = lastVal.current
//   return(
//     <div>
//       {/* <h1>User Component {props.count} </h1> */}
//       {/* <h2>previos val {previosProps}</h2> */}

//       <h1>Diff{props.count-previosProps}</h1>
//     </div>
//   )
// }

// export default User;




//lec 76
import React from 'react'
const User=(props)=>{
  const {data} = props 
  return(
    <div>
      <h1>User Component </h1>
      <h2>{data.name}</h2>
      <h4>{data.age}</h4>
    </div>
  )
}
export default User;
