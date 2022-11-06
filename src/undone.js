import React from 'react'

export default function Undone({todo}) {
  let undons=todo.filter(t=>t.complete===true)
  return (
    undons.map(e=>{
        return <li style={{"textDecoration":"line-through"}} key={e.name}>{e.name}</li>
    })
  )
}
