// import './Navbar.css';
import { Link } from "react-router-dom";
import logo from "./icon.png";
export default function Navbar() {
  

    return (
      <>
    <div style={{backgroundColor:"beige",border:"solid"}}>

        <nav style={{backgroundColor:"rgb(128,128,128)",display:"flex",justifyContent:"space-between",height:"50px",color:"white"}} className="bg-purple-800 text-white flex justify-between">
        <img src={logo} style={{display:"flex",alignItems:"center",height:"30px",width:"auto",paddingTop:"0.6rem",paddingLeft:"0.6rem"}} alt="icon" />
          
        <Link to={"/home"} style={{textDecoration:"none",fontSize:"1.25rem",display:"flex",color:"white",marginLeft:"0.4rem",marginRight:"0.75rem",fontWeight:"700",alignItems:"center"}}><span  style={{fontSize:"1.25rem",display:"flex",textDecorationColor:"white",marginLeft:"0.4rem",marginRight:"0.75rem",fontWeight:"700",alignItems:"center"}}className="text-xl flex text-white mx-3 font-bold items-center">InfiniteLibrary</span></Link>
        <ul style={{listStyle:"none",paddingLeft:"7rem",paddingRight:"7rem",paddingTop:"1.5rem",paddingBottom:"1.5rem",display:"flex",justifyContent:"flex-end",marginRight:"2.75rem",marginLeft:"2.75rem",alignItems:"center"}} className="px-28 py-4 flex space-x-11 justify-end">
            <Link to={"/home"} style={{textDecoration:"none"}}><li style={{cursor:"pointer",marginRight:"1.75rem",marginLeft:"1.75rem",paddingBottom:"1.75rem",fontWeight:"600",color:"white"}} className="cursor-pointer">Home</li></Link>
            <Link to={"/Subject"} style={{textDecoration:"none"}}><li style={{cursor:"pointer",marginRight:"1.75rem",marginLeft:"1.75rem",paddingBottom:"1.75rem",fontWeight:"600",color:"white"}} className="cursor-pointer">Subjects</li></Link>
            <Link to={"/Signup"} style={{textDecoration:"none"}}><li style={{cursor:"pointer",marginRight:"1.75rem",marginLeft:"1.75rem",paddingBottom:"1.75rem",fontWeight:"600",color:"white"}} className="cursor-pointer">Login/SignUp</li></Link>
            <Link to={'/Contactus'} style={{textDecoration:"none"}}><li style={{cursor:"pointer",marginRight:"1.75rem",marginLeft:"1.75rem",paddingBottom:"1.75rem",fontWeight:"600",color:"white"}} className="cursor-pointer">Contact Us</li></Link>
        </ul>
        <form style={{display:"flex"}} className="d-flex" role="search">
        <input style={{alignContent:"center",marginTop:"10px",marginBottom:"10px",border:"2px solid black",borderRadius:"6px"}}className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button style={{alignContent:"center",padding:"7px",border:"2px solid white",cursor:"pointer",backgroundColor:"rgb(0,0,0)",borderRadius:"6px",marginTop:"10px",marginBottom:"10px",marginLeft:"7px",marginRight:"7px",color:"white"}} className="btn btn-outline-success" type="submit">Search</button>
      </form>
       </nav>
    </div>
    </>
    )
  }
  
  