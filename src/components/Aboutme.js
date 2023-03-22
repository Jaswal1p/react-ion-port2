import React from "react";
import "../App.css";
// import {Navbar, Nav, Container, NavDropdown}  from 'react-bootstrap';
import Typed from "typed.js"
import { useEffect, useRef } from "react";
// import Typed from "typed.js"



function Aboutme() {

    // create ref element

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Think", "Learn", "Work", "Create", "Inspire", "Share"],
            startDelay: 300,
            typeSpeed: 150,
            backDelay: 150,
            backSpeed: 150,
            smartBackSpace:true,
            showCursor: false,
            loop: true,
        })

            // destroying

        return() => {
                typed.destroy();
            };

    }, []);

    

    

    return (
        <div>
             
            <>
            <div className="wrapper">
                <h2>This is about me</h2>
                <div className="overlay"></div>

                <div className="content">
                    <h3>Its All about what you <br/><span ref={el}></span></h3>
                    <p>Excepteur enim enim sint esse excepteur deserunt commodo fugiat ut ut cillum elit. Enim dolor commodo mollit sit ullamco sit mollit laborum cupidatat voluptate. Exercitation fugiat officia cillum est esse ea sint laboris est eiusmod ea ullamco.</p>
                    
                </div>
            </div>
            </>
        </div>    
    );
}


export default Aboutme;