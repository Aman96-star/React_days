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


// import {useState} from 'react'

// export default function App() {
//   // let counter =14
  
//   const [counter,setCounter] =useState(25)

//   const addValue =()=>{
//    setCounter((prevc)=>prevc+1)
//    setCounter((prevc)=>prevc+1)
//    setCounter((prevc)=>prevc+1)
//    setCounter((prevc)=>prevc+1)
//   // setCounter =counter+1
//   }
//   const removeValue =()=>{
//    setCounter(counter -1)
//   }
//   return (
//    <>
//    {/* here in a curly braces we injection of variable */}
//    <h1>React with noone{counter} </h1>  
//    <h1>counter value :{counter}</h1>
//    <button
//    onClick={addValue}
//    >Add value</button>
//    <button
//    onClick={removeValue} 
//    >remove value :{counter}</button>
//    <p>footer : </p>
//    </> 
//   )
// }

import React, { useState, useCallback, useEffect } from 'react'

export default function App() {
  const[length,setLength] =useState(8)
  const[numallowed,setNumallowed] =useState(false)
  const[carallowed,setCarallowed] =useState(false)
  const[password,setPassword] =useState('')

  const generatePassword = useCallback(() =>{
    let pass =" "
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallowed) str += "0123456789"
    if(carallowed) str += "!@#$%^&*"

    for(let i=1; i<length ;i++)
    {
     const char =Math.floor(Math.random() *str.length +1)
      pass +=str.charAt(char)
    }

    setPassword(pass)
  },[length,numallowed,carallowed])

  useEffect (()=>{
    generatePassword()
  },[length,numallowed,carallowed])

  const copytoclipboard =() =>{
    navigator.clipboard.writeText(password)
  }
  
  return (
    <>
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Password Generator</h1>

      <div className="bg-white shadow-md rounded-md p-6 w-80">
        {/* Display Generated Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="generatedPassword">
            Generated Password
          </label>
          <input
            type="text"
            value={password}
            id="generatedPassword"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your password will appear here"
            readOnly
          />
        </div>

        {/* Options for Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Password Length :{length}</label>
          <input
            type="range"
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
            min="8"
            max="32"
  
            value={length}
            // onchane event 
            onChange={(e)=>setLength(e.target.value)}

          />
          <button 
          onClick={copytoclipboard}
          className='bg-red-600'>copy</button>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" id="includeUppercase" className="h-4 w-4"
          defaultChecked={numallowed}
          onChange={()=>{
            setNumallowed ((prev) => !prev)
          }}
          />
          <label htmlFor="includeUppercase" className="text-gray-700">number allowed</label>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" id="includeNumbers" className="h-4 w-4" 
           defaultChecked={carallowed}
           onChange={()=>{
             setCarallowed ((prev) => !prev)
           }}
          />
          <label htmlFor="includeNumbers" className="text-gray-700">Include Numbers</label>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" id="includeSymbols" className="h-4 w-4" 
          
          />
          <label htmlFor="includeSymbols" className="text-gray-700">Include Symbols</label>
        </div>

        {/* Generate Button */}
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
          Generate Password
        </button>
      </div>
    </div>
    </>
  )
}
