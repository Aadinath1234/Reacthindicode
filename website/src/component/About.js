import {Link} from 'react-router-dom'
function About(){
    return(
    
    <div>
    <h1>About  Page</h1>
    <p>this is a about  page of our awesome app</p>
    <p>and here we are learning about router </p>
    <Link to="/">Go to Home  page</Link>
    <li><Link to="/user/anil" state={{name:'anil sidhhu', age:47}}>Anil</Link></li>
    <li><Link to="/user/peter">Peter</Link></li>
    <li>
        <Link to="/user/bruce">Bruce</Link>
    </li>
    
    </div>

)}
export default About;