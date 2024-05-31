import React, {useState} from "react";
import axios from "axios";
// import "useState" from react above ^
// create State variables for our user name and password

function Signin({ setToken, token }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


// creating a signup form that will ask for a username
// and password
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://unit3-bookbuddy-api.onrender.com/api//users/login'), {
        body: JSON.stringify({
            email: username,
            password,
      })
            // ^ we could have used password: password, but typing 
            // it out this way works just as well and is shorter!
            .then((res) => {
                console.log(res.data);
                if(res.data.token) {
                    setToken(res.data.token);
                    localStorage.setItem("token", res.data.token);
                    navigate("/")
                } 
                .catch((err) => console.log(err))
            )};
        
        {
    return(
        <div>
            <form>
                <h1>Sign in here</h1>
                <label>
                    Username:
                    <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="text" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}