import React from 'react'

export default class Student1 extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div style={{backgroundColor:'red', margin:20}}>Student {this.props.name} 
            <h3>{this.props.email}</h3>
             </div>
        )
    }
}