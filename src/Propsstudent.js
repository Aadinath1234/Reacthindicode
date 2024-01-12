function Student(props){
    console.log(props.name)
    return(
        <div style={{backgroundColor: "skyblue", margin:10
    
    }} >
            <h1>Student component </h1>
            <h1>here we are using props with functional component. </h1>
            <h1>Student Component {props.name}

           



            </h1>
            <h2> Email: {props.email} </h2>

            <h4>Address: {props.other.address}</h4>
        </div>
    )
}

export default Student;
