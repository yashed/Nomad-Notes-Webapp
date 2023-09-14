import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PopUp from '../../modals/popup';
import SignInModal from '../../modals/signin';
import SignUpModal from '../../modals/signup';
import axiosInstance from '../../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import EditUserModal from '../../modals/edit-user';

export var logoutUser;

export default function Navbar() {
    const location = useLocation();
    const [user, setUser] = React.useState({});
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openProfileMenu, setOpenProfileMenu] = React.useState(false);
    const [openSignInModal, setOpenSignInModal] = React.useState(false);
    const [openSignUpModal, setOpenSignUpModal] = React.useState(false);
    const [openEditModal, setOpenEditModal] = React.useState(false);

    React.useEffect(() => {
        setUserSetting();
    }, []);

    const setUserSetting = () => {
        const logged_user = sessionStorage.getItem('logged-user');

        if (logged_user) {
            axiosInstance
                .get(`/users/${logged_user}`)
                .then((result) => {
                    if (result?.data?.status === 'success') {
                        setUser(result.data?.data);
                        setIsAdmin(result.data?.data?.role == 'ADMIN');
                    }
                })
                .catch((error) => {
                    console.log(error);
                    NotificationManager.error(
                        error?.response?.data?.message || error.message || 'Error message'
                    );
                });
        } else if (user?._id) {
            setUser({});
            setIsAdmin(false);
            window.location.assign('/');
        }
    };

    const onSignedIn = () => {
        setOpenEditModal(false);
        setOpenSignUpModal(false);
        setOpenSignInModal(false);
        setOpenMenu(false);

        setUserSetting();
    };

    const onOpenSignIn = () => {
        setOpenEditModal(false);
        setOpenSignUpModal(false);
        setOpenSignInModal(true);
        setOpenMenu(false);
        setOpenProfileMenu(false);
    };

    const onOpenSignUp = () => {
        setOpenEditModal(false);
        setOpenSignInModal(false);
        setOpenSignUpModal(true);
        setOpenMenu(false);
        setOpenProfileMenu(false);
    };

    const onOpenEditProfile = () => {
        setOpenSignUpModal(false);
        setOpenSignInModal(false);
        setOpenEditModal(true);
        setOpenMenu(false);
        setOpenProfileMenu(false);
    };

    const onEdited = () => {
        setOpenEditModal(false);
        setOpenProfileMenu(false);
    };

    const onSettingItem = () => {
        setOpenMenu(false);
        setOpenProfileMenu(false);
    };

    const onSignOut = () => {
        axiosInstance
            .delete(`/auth/signout`)
            .then((result) => {
                if (result?.data?.status === 'success') {
                    sessionStorage.removeItem('logged-user');
                    sessionStorage.removeItem('is-admin');
                    NotificationManager.success(`Logged out!`);
                    setUserSetting();
                }
            })
            .catch((error) => {
                console.log(error);
                NotificationManager.error(
                    error?.response?.data?.message || error.message || 'Error message'
                );
            })
            .finally(() => setOpenMenu(false));
    };

    logoutUser = () => onSignOut();

    if (location.pathname.includes('/admin')) return null;

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
                    <img src="/images/logo/logo.png" className="h-8 mr-3" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Nomad Notes
                    </span>
                </Link>
                <button
                    onClick={() => setOpenMenu(!openMenu)}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${
                        !openMenu && 'hidden'
                    } transition-all ease-linear w-full md:block md:w-auto`}
                    id="navbar-default">
                    <ul className="md:items-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                onClick={() => setOpenMenu(false)}
                                to="/destinations"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Destinations
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setOpenMenu(false)}
                                to="/stories"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Stories
                            </Link>
                        </li>
                        <li>
                            {user?._id ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setOpenProfileMenu(!openProfileMenu)}
                                        id="dropdownNavbarLink"
                                        data-dropdown-toggle="dropdownNavbar"
                                        className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                        <div className="flex items-center gap-2">
                                            {user?.image ? (
                                                <img
                                                    className="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                                                    src={user?.image}
                                                    alt="Bordered avatar"
                                                />
                                            ) : (
                                                <div className="relative w-8 h-8 overflow-hidden bg-gray-100 p-1 rounded-full ring-2 dark:bg-gray-600">
                                                    <svg
                                                        className="absolute w-10 h-10 text-gray-400 -left-1"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <svg
                                            className="w-2.5 h-2.5 ml-2.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6">
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 4 4 4-4"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        id="dropdownNavbar"
                                        className={`${
                                            !openProfileMenu && 'hidden'
                                        } top-10 right-0 md:absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                            <div>{user?.name}</div>
                                            <div className="font-medium truncate">
                                                {user?.email}
                                            </div>
                                        </div>
                                        <ul
                                            className="w-full py-2 text-sm text-gray-700 dark:text-gray-400"
                                            aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <span
                                                    onClick={onOpenEditProfile}
                                                    className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Profile
                                                </span>
                                            </li>

                                            <li>
                                                <Link
                                                    onClick={onSettingItem}
                                                    to="/story/create"
                                                    className="text-inherit block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Create Story
                                                </Link>
                                            </li>

                                            {isAdmin && (
                                                <li>
                                                    <Link
                                                        onClick={onSettingItem}
                                                        to="/admin"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        Dashboard
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                        <div className="py-1">
                                            <span
                                                onClick={onSignOut}
                                                className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-red-500">
                                                Logout
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <span
                                    onClick={onOpenSignIn}
                                    className="cursor-pointer block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-blue-500">
                                    Login
                                </span>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            <PopUp
                size="sm"
                title={'Login'}
                openModal={openSignInModal}
                setOpenModal={setOpenSignInModal}>
                <SignInModal
                    onSuccess={onSignedIn}
                    onSignUp={onOpenSignUp}
                    setOpenModal={setOpenSignInModal}
                />
            </PopUp>
            <PopUp
                size="lg"
                title={'Sign Up'}
                openModal={openSignUpModal}
                setOpenModal={setOpenSignUpModal}>
                <SignUpModal
                    onSuccess={onOpenSignIn}
                    onSignIn={onOpenSignIn}
                    setOpenModal={setOpenSignUpModal}
                />
            </PopUp>
            <PopUp title={'Profile'} openModal={openEditModal} setOpenModal={setOpenEditModal}>
                <EditUserModal data={user} onSuccess={onEdited} />
            </PopUp>
        </nav>
    );
}
