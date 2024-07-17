import React from 'react';
import { Link } from 'react-router-dom';
import { useRef,useState } from "react";
import axios from "axios";


export default function Login() {
  const ref = useRef();
  const passwordRef = useRef();
  const [user,setUser]=useState({email:"",password:""});

  const showPassword = () => {
    passwordRef.current.type = "password";
    if (ref.current.src.includes("/closeeye.jpg")) {
      passwordRef.current.type = "text";
      ref.current.src = "/openeye.png";
    } else {
      ref.current.src = "/closeeye.jpg";
      passwordRef.current.type = "password";
    }
  };

  let name,value;
  const handleChange=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
  };

  const postData = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:3002/login", {
        //username: user.username,
        email: user.email,
        password: user.password,
      });
  
      if (response.status === 200) {
        console.log("Login Successful");
        window.alert("Login Successful");
        
      } else {
        console.log("Invalid Login");
        window.alert("Invalid Login");
      }
    } catch (error) {
      console.error("Error during Login:", error);
      window.alert("Error during Login. Please try again.");
    }
  };





  return (
    <div style={{display:'flex',color:"white",maxWidth:"500px",margin:"100px auto"}}>
        <form action="" style={{height:"600px",display:"flex",flexDirection:"column",justifyContent:"center",border:"2px solid white",padding:"0 23px 23px 23px",borderRadius:"20px",boxShadow:"9px 9px 20px white"}} >
            <h1 style={{display:"grid",placeItems:"center"}}>Log In</h1>
            <p>Please fill this form to login to your account</p>

            {/*<label htmlFor="Username">UserName</label>

            <input type="text" placeholder="Enter Username" name="username" required value={user.username} onChange={handleChange} style={{maxWidth:"500px",padding:"15px",margin:"5px 0 22px 0",display:"inline-block",border:"none",borderRadius:"5px"}}/>*/}

            <label style={{textTransform:"uppercase",letterSpacing:"2px",filter:"brightness(120%)"}} htmlFor='email' >Email</label>
            
            <input type="email" name='email' placeholder='Enter Email' onChange={handleChange} value={user.email} required style={{maxWidth:"500px",padding:"15px",margin:"5px 0 22px 0",display:"inline-block",border:"none",borderRadius:"5px"}} />
            
            <label style={{textTransform:"uppercase",letterSpacing:"2px"}} htmlFor="password">Password</label>
            
            <div style={{position:"relative"}}>
            <input ref={passwordRef} type="password" name='password' value={user.password} onChange={handleChange} placeholder='Enter password' required style={{minWidth:"450px",padding:"15px",margin:"5px 0 22px 0",display:"inline-block",border:"none",borderRadius:"5px"}}/>
            <span className="absolute right-[3px] top-[4px] cursor-pointer" style={{position:"absolute",right:"14px",top:"14px",cursor:"pointer"}} onClick={showPassword}>
                <img ref={ref} className="p-1" width={26} src="/closeeye.jpg" alt="eye"/>
              </span>
              </div>
            
            <label htmlFor="checkbox"><input type="checkbox"  />Remember Me</label>
            <p>By creating an account you agree to our <span style={{textDecoration:"underline",cursor:"pointer",color:"#505bdb"}}>Terms & Privacy</span></p>
            <div>
            <div className="button" style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
              <button onClick={postData} style={{padding:"14px 20px",margin:"8px 0",border:"none",cursor:"pointer",opacity:"0.9",borderRadius:"12px",fontWeight:"700",color:"#505bdb",width:"100px",font:"bold"}} type="submit"><Link to="/home">Login</Link></button>
              </div>
                
                <p>Don't Have an Account? <Link to="/">SignUp</Link></p>
            </div>
        </form>
    </div>
  )
}