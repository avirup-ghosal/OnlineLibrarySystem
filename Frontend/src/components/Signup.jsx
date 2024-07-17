import React from 'react';
import { Link } from 'react-router-dom';
import { useRef,useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export function Signup() {
  const navigate=useNavigate();
  const ref = useRef();
  const passwordRef = useRef();
  const [user,setUser]=useState({username:"",email:"",password:""});

  let name,value;
  const handleChange=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
  };

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

  const postData = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("online-library-system-api-eight.vercel.app/signup", {
        username: user.username,
        email: user.email,
        password: user.password,
      });
      navigate("/home");
  
      if (response.status === 200) {
        console.log("Registration Successful");
        window.alert("Registration Successful");
        
      } else {
        console.log("Invalid Registration");
        window.alert("Invalid Registration");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      window.alert("Error during registration. Please try again.");
    }
  };



  return (
    <div style={{display:'flex',color:"#2a255a",maxWidth:"500px",margin:"100px auto",fontFamily:"monospace"}}>
        <form method='POST' style={{backgroundColor:"rgba(255, 250, 250, 0.5)",display:"flex",flexDirection:"column",border:"2px solid white",padding:"0 23px 23px 23px",borderRadius:"20px",boxShadow:"1px 1px 30px white",height:"620px"}} >
            <h1 style={{textAlign:"center",marginTop:"55px",fontSize:"35px"}}>Sign Up</h1>
            
            <p style={{fontSize:"15px",marginTop:"35px"}}>Please fill this form to create an account</p>

            <label style={{textTransform:"uppercase",fontWeight:"600",letterSpacing:"2px",fontSize:"18px"}} htmlFor="Username">UserName</label>

            <input type="text" placeholder="Enter Username" name="username" required value={user.username} onChange={handleChange} style={{maxWidth:"500px",padding:"15px",margin:"5px 0 22px 0",display:"inline-block",border:"solid 2px #2a255a",borderRadius:"5px"}}/>

            <label style={{textTransform:"uppercase",fontWeight:"600",letterSpacing:"2px",fontSize:"18px"}} htmlFor='email' >Email</label>
            
            <input type="email" name='email' placeholder='Enter Email' required value={user.email}  onChange={handleChange}style={{maxWidth:"500px",padding:"15px",margin:"5px 0 22px 0",display:"inline-block",border:"solid 2px #2a255a",borderRadius:"5px"}} />
            
            <label style={{textTransform:"uppercase",fontWeight:"600",letterSpacing:"2px",fontSize:"18px"}} htmlFor="password">Password</label>
            
            <div style={{position:"relative"}}>
            <input  ref={passwordRef} type="password" name='password' placeholder='Enter password' required value={user.password} onChange={handleChange} style={{minWidth:"450px",padding:"15px",margin:"5px 0 22px 0",display:"inline-block",border:"solid 2px #2a255a",borderRadius:"5px"}}/>
            <span className="absolute right-[3px] top-[4px] cursor-pointer" style={{position:"absolute",right:"14px",top:"14px",cursor:"pointer"}} onClick={showPassword}>
                <img ref={ref} className="p-1" width={26} src="/closeeye.jpg" alt="eye"/>
              </span>
            </div>
            
            {/*<label htmlFor="checkbox"><input type="checkbox"  />Remember Me</label>*/}
            <p style={{fontSize:"14px"}}>By creating an account you agree to our <span style={{textDecoration:"underline",cursor:"pointer",color:"purple"}}>Terms & Privacy</span></p>
            <div>
            <div className="button" onClick={postData} style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
              <button style={{padding:"14px 20px",margin:"8px 0",border:"none",cursor:"pointer",opacity:"0.9",borderRadius:"12px",fontWeight:"700",color:"white",width:"100px",font:"bold",backgroundColor:"#2a255a"}} type="submit" ><Link style={{textDecoration:"none",color:"white",fontWeight:"700"}} to="/home">SignUp</Link></button>
              </div>
                <p style={{fontSize:"14px"}}>Have an Account? <Link to="/Login">Login</Link></p>

            </div>
        </form>
    </div>
  )
}
