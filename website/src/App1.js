import React,{Component} from "react";
import logo from './logo.svg'
import './App.css';
class App1 extends Component{
    constructor(){
        super();
        this.state={
            // data:"anil"
            data: 1
        }
    }
    apple(){
        // alert("apple");
                // this.setState({data:"sidhhu"})
                this.setState({data:this.state.data + 1})
    }
    render()
    {
        return(
            <div className="App">
                <h1>{this.state.data}</h1>
                <button onClick={()=> this.apple()}>Update1 data</button>
            </div>
        )
    }
}

export default App1;
