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

// import React,{useState,useContext} from "react";
// import UserContextProvider from "./context/UserContextProvider";
// import Login from "./component/Login";
// import Profile from "./component/Profile";



// function App() {
//   return (
//     <UserContextProvider>
//    <h1>react app working on contextapi</h1>
//    {/* how data send overview in this component */}
//     <Login/>
//     {/* how data access  */}
//     <Profile/> 
//     </UserContextProvider>
//   );
// }

// export default App;


import {useState} from 'react'

export default function App() {
  // let counter =14
  
  const [counter,setCounter] =useState(25)

  const addValue =()=>{
   setCounter((prevc)=>prevc+1)
   setCounter((prevc)=>prevc+1)
   setCounter((prevc)=>prevc+1)
   setCounter((prevc)=>prevc+1)
  // setCounter =counter+1
  }
  const removeValue =()=>{
   setCounter(counter -1)
  }
  return (
   <>
   {/* here in a curly braces we injection of variable */}
   <h1>React with noone{counter} </h1>  
   <h1>counter value :{counter}</h1>
   <button
   onClick={addValue}
   >Add value</button>
   <button
   onClick={removeValue} 
   >remove value :{counter}</button>
   <p>footer : </p>
   </> 
  )
}
