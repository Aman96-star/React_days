// import { useCallback, useState } from 'react'

// function App() {

//   const [count,setCount] =useState(0);

//   const incre = () => setCount(count+1)
//   const dcre = () => setCount(count-1)

// return(
//   <div className=" h-">
//     <h1>count value : {count}</h1>
//     <button onClick={incre}> add value</button>
//     <button onClick={dcre}>reduce value</button>
//   </div>
// )

// }

// export default App()

import React,{useState,useContext} from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./component/Login";
import Profile from "./component/Profile";



function App() {
  return (
    <UserContextProvider>
   <h1>react app working on contextapi</h1>
   {/* how data send overview in this component */}
    <Login/>
    {/* how data access  */}
    <Profile/> 
    </UserContextProvider>
  );
}

export default App;
