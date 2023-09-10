import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import './App.css';
import Navbar from './layout/navbar';

import Home from './pages/home';
import Contact from './pages/contact';
import SignIn from './pages/signin';
import CreateStory from './pages/createStory';
import Admin from './pages/admin';
import { NotificationContainer } from 'react-notifications';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
                <Route path="/story/create" element={<CreateStory />} />
                <Route path="/admin/*" element={<Admin />} />
            </Routes>

            <NotificationContainer />
        </div>
    );
}

export default App;
