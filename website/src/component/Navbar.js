// import {Link} from 'react-router-dom'

// function NavBar(){
//     return (
//         <div>
//             <Link to="/about" >About</Link><br/>
//             <Link to="/">Home</Link>
//             <Link to="/contact">Contact</Link>
//             <Link to="/user/anil" >Anil </Link>
//             <Link to="/user/peter">Peter </Link>
            
//         </div>
//     ) 
// }

// export default NavBar;







//lec 51 
// import {Link , NavLink} from "react-router-dom";
// function NavBar(){
//   return(
//     <div>
//       <ul className="navbar">
//         <li><NavLink className="nav-bar-link" style={{backgroundColor:'red'}}>Home</NavLink></li>
//         <li><NavLink className="nav-bar-link" to="/about">About</NavLink></li>
//         <li><NavLink className="nav-bar-link" to="/contact">Contact  </NavLink></li>


//       </ul>
//     </div>
//   )
// }
// export default NavBar;






//lec 52 
import { NavLink} from "react-router-dom";
function NavBar(){
  return(
    <div>
      <ul className="navbar">
        <li><NavLink style={({isActive})=>{return {backgroundColor:isActive?"skyblue":""}}}className="nav-bar-link" to="/" >Home</NavLink></li>
        <li><NavLink style={({isActive})=>{return {backgroundColor:isActive?"skyblue": ''}}}className="nav-bar-link" to="/about">About</NavLink></li>
        <li><NavLink style={({isActive}) =>{return {backgroundColor: isActive ?"skyblue": ""}}}className="nav-bar-link" to="/contact">Contact  </NavLink></li>
        <li>
            
            
            <NavLink style={({isActive}) =>{
            return {backgroundColor: isActive? "skyblue": ''}
        }} className="nav-bar-link" to="/filter">Filter </NavLink></li>


        <li>
          <NavLink className="nav-bar-link" to="/login">Login</NavLink>
        </li>



      </ul>
    </div>
  )
}
export default NavBar; 