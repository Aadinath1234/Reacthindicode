import {useState} from 'react'
function Profile(){
const [loggedIn, setLoggedIn] = useState(3)

//1,2,3
return(
    <div>
        {loggedIn==1?
        <h1>Welcome User1</h1>:loggedIn==2?<h1>Welcome User2</h1>:<h1>Welcome User3</h1>}
    </div>
)







}

export default Profile;