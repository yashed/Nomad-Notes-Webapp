import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/navbar";

import Home from "./pages/home";
import Stories from "./pages/stories";
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
          <Route path="/stories" element={<Stories />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
