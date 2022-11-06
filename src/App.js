import React from "react";
import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Undone from "./undone";
import TodoList from './todolist';
import "./styles.css"


const LOCAL_STORAGE_KEY="todos.key"

function App() {

  const [todo,setTodo]=useState([]);
  const refname=useRef();
  
  useEffect(() => {
    
    const stored=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (stored) {
      setTodo(stored);
    }
  },[])
  
  
  useEffect(() => {
    if (todo?.length){///// VERY IMPORTANT !!!! 
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todo))
    }
  }, [todo])
  
  const toggleTodo=(id)=>{
    let todos=[...todo]
    let t=todos.find(todo=>todo.id===id)
    t.complete=!t.complete
    setTodo(todos)
  }
  
  const handleChange = ()=>{
    const name = refname.current.value;
    console.log(name);
    if (name){
      
      setTodo(prevTodo=>{
        return [...prevTodo,{name:name, complete:false, id : uuidv4()}]
      });

    }
    refname.current.value='';
  }

  const handleComplete=()=>{
    let newtodos=[...todo]
    newtodos=newtodos.filter(t=>t.complete===false)
    setTodo(newtodos)
  }

  
  return (
    <body>
      
      <div className="header">
        <h1 className="done">

        {todo.filter(t=>t.complete===true).length} done <span/>
        </h1>

        <h1 className="done">
        {todo.filter(t=>t.complete===false).length} undone

        </h1>
        <input ref={refname}></input>
        <div>
          
          <button onClick={handleChange} className="addBtn">addtodo</button>
          <button onClick={handleComplete} className="addBtn">clear complete</button>

        </div>
      </div>
      
      <ul>
        <TodoList thatname={todo} toggleTodo={toggleTodo}/>
      </ul>
      <ul>
        <Undone todo={todo}/>
      </ul>
    </body>
  )
}

export default App;
