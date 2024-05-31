import React from "react";
import {useState} from 'react';
import axios from "axios";

//realized after much trial and error that
// function 'SignUp' can mostly be
//replicated from 'Signin' code!

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
    };
    

    // can use mainly html for our signup process
    
    return (
        <div>
        <h1>Welcome! Would you like to sign up?</h1>
        <form onSubmit={handleSubmit}>
          <div> 
            <label userName="userName">User Name:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setFirstName(e.target.value)}
              />
        </div>
        <div> 
            <label passWord="passWord">Password:</label>
            <input
              type="text"
              id="passWord"
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
              />
        </div>
      </form>
    </div>

    )
}

export default SignUp;
