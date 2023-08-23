import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="home" className="">
      <div className="hero-section flex bg-black">
        <div className="min-h-screen w-1/3 relative">
          <Link to="" className="z-10 absolute bottom-0 p-16 pt-0 flex items-center text-white text-4xl font-bold">
            <div className="text-4xl">
              Why you should reconsider The Inca Trail, Peru Trip
            </div>
            <div className="text-5xl">
              <i className='bx bx-arrow-back bx-rotate-180' ></i>
            </div>
          </Link>
          <div className="z-0 min-h-screen w-full bg-center bg-no-repeat bg-cover relative opacity-70" style={{ backgroundImage: "url(/images/misc/dest1.jpg)" }}></div>
        </div>
        <div className="min-h-screen bg-center bg-no-repeat bg-cover w-1/3 opacity-70"
          style={{ backgroundImage: "url(/images/misc/dest2.jpg)" }}></div>
        <div className="min-h-screen bg-center bg-no-repeat bg-cover w-1/3 opacity-70"
          style={{ backgroundImage: "url(/images/misc/dest3.jpg)" }}></div>
      </div>
    </div>
  );
}
