import React, { useState, useEffect } from 'react';
import './Bakery.css';
import { Outlet, Link } from "react-router-dom";
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
                                <li className="list"><Link to="/" className="anchor1 active">HOME</Link></li>
                                <li className="list"><Link to="/about" className="anchor2 active">ABOUT US</Link></li>
                                <li
                                    className="list"
                                    onMouseEnter={() => setIsProductHovered(true)}
                                    onMouseLeave={() => setIsProductHovered(false)}
                                    onClick={() => setIsProductHovered(!isProductHovered)}
                                >
                                    <Link to="/product" className="anchor3 active">PRODUCTS</Link>
                                    {isProductHovered && (
                                    <div className='dropdown-menu-head'>
                                        <div className="dropdown-menu row">
                                            <div className="col-6">
                                                <Link to="/cakes">CAKES</Link>
                                                <Link to="/pastry">PASTRIES</Link>
                                                <Link to="/browny">BROWNIES</Link>
                                                <Link to="/bread">BREADS</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="/cupcake">DESSERTS & CUPCAKES</Link>
                                                <Link to="/sandwich">SANDWICH & SAVOURIES</Link>
                                                <Link to="/gift">GIFTING</Link>
                                                <Link to="/tea">TEA CAKES</Link>
                                            </div>
                                            <div className="col-12">
                                                <Link to="/cooky">BISCUITS, COOKIES & CRACKERS</Link>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </li>
                                <li className="list"><Link to="/speciality" className="anchor3 active">SPECIALITIES</Link></li>
                                <li className="list"><Link to="/order" className="anchor4 active">ORDER</Link></li>
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
