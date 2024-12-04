import React from 'react'
import { createContext,useContext } from 'react'

export const TodoContext =createContext({
todo:[
{
    id:1,
    todo:"msg33",
    completed: false,
}
],
    addTodo:(todo) =>{},
    updatedTodo:(id,todo) =>{},
    deleteTodo:(id) =>{},
    toggleComplete: (id) =>{}
})

export const useTodo =() =>{
    return useContext(useTodo)
}

export const TodoProvider = TodoContext.Provider