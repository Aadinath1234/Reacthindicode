import React from "react";
class User extends React.Component{
    constructor(){
        super();
        this.state={
            email:"ravi@wadegaon.com"
        }
    }
    render(){
        // console.warn("Render method", this.props)
        console.warn("Render method", this.state.email);
        return(
            <div>
                <h1>User component {this.props.name}</h1>
                <button onClick={()=>this.setState({email:"tushar@test.com"})}>Update Email Address </button>
            </div>
        )
    }
}

export default User;
