import React from "react";
import { Link } from "react-router-dom";

export default function DestinationCard({ imgSrc, title, location, description, link }) {

    const handleLinkDragStart = (e) => {
        e.stopPropagation(); // Stop event propagation to prevent link dragging
    };

    return (
        // <Link to={link || "/"} className="w-full lg:w-1/3 p-4 block text-black transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] hover:backface-visibility-visible">
        <Link to={link || "/"} className="w-full p-4 block text-black transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] hover:backface-visibility-visible"
        onDragStart={handleLinkDragStart} >
            {imgSrc && <div><img className="rounded-xl aspect-square object-cover" src={imgSrc} alt="" /></div>}
            <div className="p-4 ps-1">
                {location && <div className="text-sm text-gray-500">{location}</div>}
                {title && <div className="2xl:text-3xl text-2xl font-bold">{title}</div>}
                {description && <div>{description}</div>}
            </div>
        </Link>
    );
}