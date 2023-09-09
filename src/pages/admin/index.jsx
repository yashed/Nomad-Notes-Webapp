import React from 'react';
import {
    MdOutlineAdminPanelSettings,
    MdOutlineHistoryEdu,
    MdOutlineKeyboardArrowLeft
} from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import { Link, NavLink, Route, Router, Routes } from 'react-router-dom';
import Admins from './admins';
import Users from './users';
import Stories from './stories';
import './styles.css';

const adminRoutes = [
    {
        icon: MdOutlineAdminPanelSettings,
        title: 'Admins',
        to: '/admin'
    },
    {
        icon: FiUsers,
        title: 'Users',
        to: '/admin/user'
    },
    {
        icon: MdOutlineHistoryEdu,
        title: 'Travel Stories',
        to: '/admin/story'
    }
];

export default function Admin() {
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <div id="admin-wrap">
            <aside
                id="sidebar-multi-level-sidebar relative"
                className={`fixed top-0 left-0 z-40 h-screen transition-all ease-in-out sm:translate-x-0 ${
                    openMenu ? 'w-64' : 'w-20'
                }`}
                aria-label="Sidebar">
                <span
                    className={`flex justify-center align-middle bg-white absolute cursor-pointer -right-3 top-9 w-7 border-blue-600 border-2 rounded-full  ${
                        !openMenu && 'rotate-180'
                    }`}
                    onClick={() => setOpenMenu(!openMenu)}>
                    <MdOutlineKeyboardArrowLeft className="text-blue-600 text-xl font-bold" />
                </span>
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <Link to="/" className="flex items-center pl-2.5 mb-5">
                        <img src="/images/logo/logo.png" className="h-10 mr-3" alt="Nomad Notes" />

                        <span
                            className={`${
                                !openMenu && 'hidden'
                            } self-center text-xl font-semibold whitespace-nowrap dark:text-white`}>
                            Nomad Notes
                        </span>
                    </Link>
                    <ul className="space-y-2 font-medium">
                        {adminRoutes.map((route, i) => {
                            return (
                                <li className="!mt-5" key={`admin-route-${i}`}>
                                    <NavLink
                                        end
                                        to={route.to}
                                        className={({ isActive }) =>
                                            `flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
                                                isActive
                                                    ? 'bg-gray-100 dark:bg-gray-700'
                                                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                            } group`
                                        }>
                                        <route.icon className="w-10 h-10 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                        <span className={`${!openMenu && 'hidden'} ml-3`}>
                                            {route.title}
                                        </span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </aside>

            <div
                className={`transition-all ease-in-out admin-container p-4 ${
                    openMenu ? 'open' : 'close'
                } min-h-screen`}>
                <Routes>
                    <Route path="/" element={<Admins />} />
                    <Route path="user" element={<Users />} />
                    <Route path="story" element={<Stories />} />
                </Routes>
            </div>
        </div>
    );
}
