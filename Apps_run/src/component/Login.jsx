// here we take a usestate for manage state and useContext hook
import React, { useState, useContext } from "react";

import UserContext from "../context/UserContext";

function Login() {
  // these are the states 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // fetch or access a data very important *******
  const {setUser} =useContext(UserContext)

  // handle submit event method  is used for action 
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username,password})
  };

  return (
   <div>
      <h1>login</h1>
      <input
        type="text"
       
        // we write  a value and onchange to use state for change 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
         placeholder="username"
      ></input>
      <input
        type="text"
        
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      ></input>
      <button onClick={handleSubmit}>submit</button>
      </div>
  );
}

export default Login;
