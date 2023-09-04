import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/navbar";

import Home from "./pages/home";
import Contact from "./pages/contact";
import SignIn from "./pages/signin";
import CreateStory from "./pages/CreateStory";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route
          element={
            <React.Fragment>

              <CreateStory/>
              
             
            </React.Fragment>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
