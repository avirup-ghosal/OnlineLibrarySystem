// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter, Link, Route, RouterProvider, Routes, createBrowserRouter, useNavigate } from 'react-router-dom'
// import { Landing } from './components/Landing'
// import Navbar from './components/Navbar'
// import { Books } from './components/Books'
// import Viewmore from './components/Viewmore'
// import { Aboutus } from './components/Aboutus'
// import { Signup } from './components/Signup'
// import { Contactus } from './components/Contactus'
// import Footer from './components/Footer'
// import { Physics } from './components/Physics'
// import { Chemistry } from './components/Chemistry'
// import { Cplusplus } from './components/Cplusplus'
// import { Python } from './components/Python'
// import { Mechanics } from './components/Mechanincs'
// import { Subject } from './components/Subject'
// import { Login } from './components/Login'
// import axios from 'axios'
// import { Test } from './components/Test'

// function App() {
//   const router=createBrowserRouter(
//     [
//       {
//         path:"/Morebooks",
//         element:<><Test></Test> </>
//       },
//       {
//         path:"/",
//         element:<><Navbar/>
//         <Test></Test>
//         <Viewmore/>
//         <Footer></Footer>
//         </>
        
//       },
//       {
//         path:"/Aboutus",
//         element:<><Navbar></Navbar><Aboutus></Aboutus><Footer></Footer></>
//       },
//       {
//         path:"/Subject",
//         element:<><Navbar></Navbar><Subject></Subject></>

//       },
//       {
//         path:"/Signup",
//         element:<><Navbar></Navbar><Footer></Footer></>
//       },
//       {
//         path:"/Signup//Login",
//         element:<><Navbar></Navbar><Footer></Footer></>
//       },
//       {
//         path:"/Contactus",
//         element:<><Navbar></Navbar><Contactus></Contactus><Footer></Footer></>
//       },
//       {
//         path:"/Home",
//         element:<><Navbar/>
//         <Test></Test>
//         <Viewmore/>
//         <Footer></Footer>
//         </>
//       },
//       {
//         path:"/Physics",
//         element:<><Navbar></Navbar><Physics></Physics><Footer></Footer></>
//       },
//       {
//         path:"/Chemistry",
//         element:<><Navbar></Navbar><Chemistry></Chemistry><Footer></Footer></>
//       },
//       {
//         path:"/C++",
//         element:<><Navbar></Navbar><Cplusplus></Cplusplus><Footer></Footer></>
//       },
//       {
//         path:"/Python",
//         element:<><Navbar></Navbar><Python></Python><Footer></Footer></>
//       },
//       {
//         path:"/Mechanics",
//         element:<><Navbar></Navbar><Mechanics></Mechanics><Footer></Footer></>
//       },
//     ]
//   )
  
//   return (
//     <div style={{backgroundColor:"#282c32",padding:"16px"}}>
//     <RouterProvider router={router}>
    
    
    
//     <Navbar/>
    
    
//     <Test></Test>
//     <Viewmore/>
//     </RouterProvider>
//     </div>
//   )
// }

// export default App

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Books } from './components/Books';
import library from './components/library.jpg';
import Viewmore from './components/Viewmore';
import Review from './components/Review';
import { Aboutus } from './components/Aboutus';
import  { Signup } from './components/Signup';
import { Contactus } from './components/Contactus';
import Footer from './components/Footer';
import { Subject } from './components/Subject';
import { Login } from './components/Login';
import { Test } from './components/Test';
import { Book } from './components/Book';

function App() {
  return (
    <div style={{backgroundImage:`url(${library})`,backgroundSize:"cover",backgroundPosition:"center",filter:"brightness(80%)",overflow:"hidden",padding:"16px"}}>
  
    <Router>
    <Navbar />
      <Routes>
        <Route path='/review' element={<Review/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Morebooks" element={<Test subjects={["java","ruby","rust"]} links={["Java","Ruby","Rust"]} />} />
        <Route exact path="/" element={<Signup/>}></Route>
        <Route exact path="/Signup" element={<Signup/>}></Route>
        <Route path="/home" element={<><Test subjects={["physics", "chemistry", "cplusplus", "python", "mechanics"]} links = {["physics", "chemistry", "cplusplus", "python", "mechanics"]}  /><Viewmore /></>} />
        <Route exact path="/subject" element={<Subject/>}></Route>
        <Route path="/home//Physics" element={<><Book link="physics" subject="Physics"/><Footer /></>} />
          <Route path="/home//Chemistry" element={<><Book link="chemistry" subject="Chemistry" /><Footer /></>} />
          <Route path="/home//Cplusplus" element={<><Book link="cplusplus" subject="C++"/><Footer /></>} />
          <Route path="/home//Python" element={<><Book link="python" subject="Python"/><Footer /></>} />
          <Route path="/home//Mechanics" element={<><Book link="mechanics" subject="Mechanics" /><Footer /></>} />
          <Route path="/Morebooks//Java" element={<><Book link="java" subject="Java"/><Footer /></>} />
          <Route path="/Morebooks//Ruby" element={<><Book link="ruby" subject="Ruby"/><Footer /></>} />
          <Route path="/Morebooks//Rust" element={<><Book link="rust" subject="Rust"/><Footer /></>} />
        
      </Routes>
      <Footer/>

    </Router>
    
    </div>
  );
}

export default App;