import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Books(props){
    
    return(
    
        <div style={{
        display:"flex",
        backgroundColor:"grey",
        height:"200px",
        border:"solid 2px 2px 2px 2px",
        borderTopColor:"white",
        borderLeftColor:"white",
        borderRightColor:"white",
        borderBottomColor:"white",
        borderStyle:"solid", 
        marginTop:"50px",
        marginBottom:"50px",
        boxShadow:"9px 9px 20px white"

    }}>
        
        <h2 style={{marginTop:"85px",marginBottom:"50px",marginLeft:"20px",color:"#505bdb"}}>{props.title}</h2>
        
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>{props.body}</div>
        <Link to={props.link} style={{textDecoration:"none"}}><button style={{display:"block",margin:"50px",width:"120px",marginTop:"70px",height:"40px",borderRadius:"8px",cursor:"pointer",fontWeight:"600"}}>View More</button></Link>
    </div>
    )
}