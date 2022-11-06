import React from 'react'
import './styles.css'

export default function Todo({n,toggleTodo}) {
    const handleChange=()=>{
        toggleTodo(n.id)
    }
    return(
    <div>
        <label className='container'>
          
            {n.name}
            <input type="checkbox" checked={n.complete} onChange={handleChange}/>
            <span class="checkmark"></span>

        </label>

    </div> 
  )
}
