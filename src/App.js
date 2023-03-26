import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Navigate, Routes, BrowserRouter as Router, Route} from "react-router-dom";


import NavBar from './components/Navbar.js';
import Aboutme from './components/Aboutme';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    // <div>
    //   <main>
    //     <About></About>
    //   </main>
    // </div>

    <Router>
      {/* <> */}
         <NavBar />
         {/* <br></br> */}
         <Routes>
           <Route path='/' element={<Navigate replace to="/Aboutme" />} />
             
           <Route path='/Aboutme' element={<Aboutme/>} />
           <Route path='/Education' element={<Education/>} />
           <Route path='/Experience' element={<Experience/>} />
           <Route path='/Contact' element={<Contact/>} />

           
           <Route path='/Resume' element={<Resume/>} />
           {/* <Route component={NoMatch} /> */}
         </Routes>
         <br></br>
         {/* <Footer/> */}
      {/* </> */}
    </Router>
  );
}

export default App;
