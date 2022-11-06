import React from "react"
import Todo from "./todo"

export default function TodoList({thatname,toggleTodo}){
    return (
        
        thatname.map(e=>{
            return( 
            <li>
                <Todo key={e.name} toggleTodo={toggleTodo} n={e}/>
            </li>
            )
        })
        
    )
}