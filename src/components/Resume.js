import React from 'react';
import JResume from '../assets/images/demo_alln_CV.png';
import "../App.css";
import Pdf from '../assets/docu/demo_Alln-CV.pdf';

function Resume() {
    
    return (
         

        <React.Fragment>

            <div className="containerJas">
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='header'>
                                <h5>Download Resume: 
                                    <a href={Pdf} download> Allen Jaswal</a>
                                    
                                </h5>
                            </div>
                            <br></br>
                            <div className='rowRresume'>
                                <div className='image'>
                                   <img className='JResume' src={JResume} alt="My-Resume" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
                
            
        </React.Fragment>
    );
}


export default Resume;