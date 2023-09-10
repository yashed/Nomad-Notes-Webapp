import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './App.css';

import Navbar from './layout/navbar';
import Home from './pages/home';
import CreateStory from './pages/createStory';
import Admin from './pages/admin';
import Stories from './pages/stories';
import Destinations from './pages/destinations';
import DestinationDetail from './pages/destination-detail';
import NotFound from './pages/not-found';
import StoryDetails from './pages/story-detail';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route
                    element={
                        <React.Fragment>
                            <Navbar />
                            <Outlet />
                        </React.Fragment>
                    }>
                    <Route path="/" element={<Home />} />
                    <Route path="/stories" element={<Stories />} />
                    <Route path="/story/create" element={<CreateStory />} />
                    <Route path="/story/:storyId" element={<StoryDetails />} />
                    <Route path="/destinations" element={<Destinations />} />
                    <Route path="/destination/:destinationId" element={<DestinationDetail />} />
                    <Route path="/admin/*" element={<Admin />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>

            <NotificationContainer />
        </div>
    );
}

export default App;
