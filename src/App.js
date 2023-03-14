import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Navigate, Routes, BrowserRouter as Router, Route} from "react-router-dom";


import NavBar from './components/Navbar.js';
import Aboutme from './components/Aboutme';


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
           {/* <Route path='/'>
             <Navigate to='/Aboutme' />
           </Route> */}
           <Route path='/Aboutme' element={<Aboutme/>} />
           {/* <Route path='.components/about' component={About} /> */}
           {/* <Route exact path='/contact' component={Contact} />
           <Route exact path='/jaswal' component={Jaswal} />
           <Route exact path='/portfolio' component={Portfolio} />
           <Route exact path='/resume' component={Resume} />
           <Route component={NoMatch} /> */}
         </Routes>
         <br></br>
         {/* <Footer/> */}
      {/* </> */}
    </Router>
  );
}

export default App;
