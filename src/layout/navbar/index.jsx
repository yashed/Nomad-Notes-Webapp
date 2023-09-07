import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import React from "react";
import './styles.scss';
import { Link } from 'react-router-dom';

export default function Navbar () {
    const { pathname } = useLocation();
    const theme = pathname === '/' ? 'light' : 'white';
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) setIsScrolled(true);
            else setIsScrolled(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id='navbar' className={`fixed w-screen z-50 ${isScrolled ? 'isScrolled' : ''}`}>
            <div className='nav-wrapper flex justify-between items-center p-4 px-16'>
                <div className='logo-wrap w-1/4'>
                    <div className='logo w-16'>
                        <img
                            src={`${
                                theme === 'light'
                                    ? '/images/logo/logo.png'
                                    : '/images/logo/logo_blue.png'
                            }`}
                            alt='Logo'
                            className='img logo'
                        />
                    </div>
                </div>
                <div className='links-wrap text-xl font-bold w-1/3 flex justify-center'>
                    <Link
                        to='/'
                        className={`link ${theme === 'light' ? 'text-white' : 'text-black'} mr-16`}>
                        Destination
                    </Link>
                    <Link
                        to='/stories'
                        className={`link ${theme === 'light' ? 'text-white' : 'text-black'} mr-16`}>
                        Stories
                    </Link>
                    <Link
                        to='/signin'
                        className={`link ${theme === 'light' ? 'text-white' : 'text-black'} mr-16`}>
                        Reviews
                    </Link>
                </div>
                <div className='cta-wrap flex items-center justify-end w-1/4'>
                    <div
                        className={`search-btn flex items-center ${
                            theme === 'light' ? 'text-white' : 'text-black'
                        } cursor-pointer`}>
                        <i className='bx bx-search text-2xl font-bold mt-1'></i>
                    </div>
                    <Link
                        to='/signup'
                        className={`btn rounded-md py-2 px-3 text-xl font-bold
                        ${theme === 'light' ? 'text-white' : 'text-black'} ml-4`}>
                        Sign Up
                    </Link>
                    <Link
                        to='/signin'
                        className={`btn rounded-full bg-white py-2 px-8 text-xl font-bold
        ${theme === 'light' ? 'text-white' : 'text-blue-500'} shadow-sm hover:bg-black hover:text-white
         focus:outline-none focus:ring-2 ml-4`}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
