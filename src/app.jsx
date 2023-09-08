import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./app.css";
import Navbar from "./layout/navbar";

import Home from "./pages/home";
import Destinations from "./pages/destinations";
import DestinationDetail from "./pages/destination-detail";
import Contact from "./pages/contact";
import SignIn from "./pages/signin";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route
          element={
            <React.Fragment>
              <Navbar />
              <Outlet />
            </React.Fragment>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:destinationId" element={<DestinationDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
