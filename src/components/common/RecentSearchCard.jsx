import React from "react";
import { Link } from "react-router-dom";

export default function RecentSearchCard({ to, icon, title, location }) {
    return (
        <Link to={to || "#"}
            className="p-4 me-4 block text-black transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] hover:backface-visibility-visible rounded-xl bg-white shadow-md border border-gray-500">
            <div className="flex flex-wrap justify-between items-center">
                {icon && (
                    <div className="pe-4"><div><i className={icon + " text-4xl mt-1"}></i></div></div>
                )}
                <div>
                    {title && <div className="text-xl font-bold">{title}</div>}
                    {location && <div className="text-gray-500 text-sm">{location}</div>}
                </div>
            </div>
        </Link>
    )
}