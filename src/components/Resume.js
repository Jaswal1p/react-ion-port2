import React from 'react';
import JResume from '../assets/images/jaswal_resume2022.png';

import Pdf from '../assets/docu/jaswal_resume2022.pdf';

function Resume() {
    
    return (
         

        <React.Fragment>

            <div className="containerJas">
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='header'>
                                <h5>Download Resume: 
                                    <a href={Pdf} download> Pupinder S Jaswal</a>
                                    
                                </h5>
                            </div>
                            <br></br>
                            <div className='row resume'>

                                <img className='JResume' src={JResume} alt="My-Resume" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
                
            
        </React.Fragment>
    );
}


export default Resume;