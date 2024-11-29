import { createContext,useContext } from "react";

// here we pass inside a createcontext while we not pass in first example
export const ThemeContext =createContext({
    themeMode :"light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

// make context provider in  a same component 

export const ThemeProvider = ThemeContext.Provider

// custom hook we make 
export default function useTheme (){
    return useContext(ThemeContext)

}

// this custom make a code simplyfy making two file work into one