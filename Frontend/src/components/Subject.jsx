import React from 'react'
import { Link } from 'react-router-dom'

export function Subject() {
  return (
    <div style={{padding:"23px",backgroundColor:"#282c32",color:"#505bdb"}}>
      <h1>Subjects</h1>
      <form role="search">
        <input type="text" placeholder="Search" aria-label=" Search" />
        <button style={{ marginLeft:"7px"}} type="submit">Search</button>
      </form>
      <br />
      <div style={{display:"flex"}} className="boxes">
      <div style={{height:"auto",width:"33%"}} className="box1">
      <h3>Core Subjects</h3>
      <ul>
        <li style={{cursor:"pointer"}}><Link style={{color:"white",textDecoration:"none"}} to="/physics">Physics</Link></li>
        <li style={{cursor:"pointer"}}><Link style={{color:"white",textDecoration:"none"}} to="/chemistry">Chemistry</Link></li>
        <li style={{cursor:"pointer"}}><Link style={{color:"white",textDecoration:"none"}} to="/mathematics">Mathematics</Link></li>
        <li style={{cursor:"pointer"}}><Link style={{color:"white",textDecoration:"none"}} to="/mechanics">Mechanics</Link></li>
      </ul>
      </div>
      <div style={{height:"auto",width:"33%"}} className="box2">
      <h3>Programming Languages</h3>
      <ul>
        <li style={{cursor:"pointer"}}><Link style={{color:"white",textDecoration:"none"}} to="/python">Python</Link></li>
        <li style={{cursor:"pointer"}}><Link style={{color:"white",textDecoration:"none"}} to="/C++" >C++</Link></li>
        <li style={{cursor:"pointer"}}><Link style={{color:"white",textDecoration:"none"}} to="/Java">Java</Link></li>
      </ul>
      </div>
      <div style={{height:"auto",width:"33%"}} className="box3">
        <h3>Extra</h3>
      </div>
      </div>
      
      
    </div>
  )
}
