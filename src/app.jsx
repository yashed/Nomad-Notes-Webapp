import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './layout/navbar';

import Home from './pages/home';
import Contact from './pages/contact';
import SignIn from './pages/signin';
import CreateStory from './pages/CreateStory';
import DestinationPage from './pages/Destination';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/story/create" element={<CreateStory />} />
            </Routes>
        </div>
    );
}

export default App;
