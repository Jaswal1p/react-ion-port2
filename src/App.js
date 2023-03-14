import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Navigate, Routes, BrowserRouter as Router, Route} from "react-router-dom";


import NavBar from './components/Navbar.js';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
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
         <br></br>
         <Routes>
           <Route path='/' element={<Navigate replace to="/Aboutme" />} />
             
           <Route path='/Aboutme' element={<Aboutme/>} />
           <Route path='/Portfolio' element={<Portfolio/>} />
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
