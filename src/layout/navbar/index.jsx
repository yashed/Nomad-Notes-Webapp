import { React, useCallback, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Button } from '@mui/material';

import './styles.css';

const Navbar = () => {

    const onDestinationClick = useCallback(() => {}, []);

    const onStoriesClick = useCallback(() => {}, []);

    const onReviewsClick = useCallback(() => {}, []);

    const onSignUpClick = useCallback(() => {}, []);

    const onLoginClick = useCallback(() => {}, []);

    const [expanded, setExpanded] = useState(false);
    return (
        <div id='navbar'>
            <div className='nav-logo'>
                <img className='logo' alt='' src='public\images\signin\logo\logo.png' />
            </div>
            <div className='navbar-parent'>
                <Button
                    className='navbar-btn'
                    variant='text'
                    name='nav_btn'
                    color='primary'
                    href='/destination'
                    onClick={onDestinationClick}>
                    Destination
                </Button>
                <Button
                    className='navbar-btn'
                    variant='text'
                    name='stories_btn'
                    color='primary'
                    href='/stories'
                    onClick={onStoriesClick}>
                    Stories
                </Button>
                <Button
                    className='navbar-btn'
                    variant='text'
                    name='reviews_btn'
                    color='primary'
                    href='/review'
                    onClick={onReviewsClick}>
                    Reviews
                </Button>
            </div>
            <div className='login-parent'>
                <div classname='search'></div>
                {expanded ? (
                    <input type='text' onBlur={() => setExpanded(false)} />
                ) : (
                    <button
                        className='akar-iconssearch'
                        sx={{ width: 28 }}
                        color='primary'
                        onClick={() => setExpanded(true)}>
                        <FiSearch />
                    </button>
                )}
                <div className='sign-up-parent'>
                    <Button
                        className='navbar-btn'
                        variant='text'
                        name='signup_btn'
                        color='primary'
                        href='/sign-up'
                        onClick={onSignUpClick}>
                        Sign Up
                    </Button>
                    <Button
                        className='login-btn'
                        sx={{ width: 167, borderRadius: 5}}
                        variant='contained'
                        name='login_btn'
                        color='primary'
                        href='/default-login'
                        onClick={onLoginClick}>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
