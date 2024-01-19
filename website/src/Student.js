import React from 'react'
class Student extends React.Component{
     
  componentWillUnmount(){
    alert("componentwillUnmount called")
  }


    render(){
        return(
            <div className='App'>
                <h1>Student component will unmount</h1>
               
            </div>
        )
    }
}

export default Student;