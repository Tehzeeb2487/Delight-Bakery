import React, { useState, useEffect } from 'react';
import './Bakery.css';
import { Outlet } from "react-router-dom";
import logo from './Images/what.jpg';

function Home() {
    // State to track scroll position
    const [isVisible, setIsVisible] = useState(false);
    // State to track hover over PRODUCTS link and dropdown
    const [isProductHovered, setIsProductHovered] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true); // Show button after scrolling 300px
        } else {
            setIsVisible(false); // Hide button when at the top
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',  // Smooth scrolling effect
        });
    };

    // useEffect to listen to the scroll event
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);  // Cleanup on component unmount
        };
    }, []);


    return (
        <>
            <header className="header sticky-top" id="Bakeryhome">
                <nav className="na navbar navbar-expand-md">
                    <div className="container-fluid">
                        <div className="logo">
                            <img src={logo} alt="logo" width="80px" height="80px" />
                        </div>
                        <div className="collapse navbar-collapse" id="mynav">
                            <ul className="link ms-auto me-5">
                                <li className="list"><a href="/" className="anchor1 active">HOME</a></li>
                                <li className="list"><a href="/about" className="anchor2 active">ABOUT US</a></li>
                                <li
                                    className="list"
                                    onMouseEnter={() => setIsProductHovered(true)}
                                    onMouseLeave={() => setIsProductHovered(false)}
                                >
                                    <a href="/product" className="anchor3 active">PRODUCTS</a>
                                    {isProductHovered && (
                                        <div className="dropdown-menu row">
                                            <div className="col-6">
                                                <a href="/cakes">CAKES</a>
                                                <a href="/pastry">PASTRIES</a>
                                                <a href="/browny">BROWNIES</a>
                                                <a href="/bread">BREADS</a>
                                            </div>
                                            <div className="col-6">
                                                <a href="/cupcake">DESSERTS & CUPCAKES</a>
                                                <a href="/sandwich">SANDWICH & SAVOURIES</a>
                                                <a href="/gift">GIFTING</a>
                                                <a href="/tea">TEA CAKES</a>
                                            </div>
                                            <div className="col-12">
                                                <a href="/cooky">BISCUITS, COOKIES & CRACKERS</a>
                                            </div>
                                        </div>
                                    )}
                                </li>
                                <li className="list"><a href="/speciality" className="anchor3 active">SPECIALITIES</a></li>
                                <li className="list"><a href="/order" className="anchor4 active">ORDER</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Back-to-top button */}
            {isVisible && (
                <button onClick={scrollToTop} className="go-to-top">
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                </button>
            )}

            <Outlet />
        </>
    );
}

export default Home;
