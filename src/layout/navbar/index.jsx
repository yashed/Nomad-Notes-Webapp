import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PopUp from '../../modals/popup';
import SignInModal from '../../modals/signin';
import SignUpModal from '../../modals/signup';
import axiosInstance from '../../utils/axios-instance';
import { NotificationManager } from 'react-notifications';

export default function Navbar() {
    const location = useLocation();
    const [user, setUser] = React.useState(null);
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openSignInModal, setOpenSignInModal] = React.useState(false);
    const [openSignUpModal, setOpenSignUpModal] = React.useState(false);

    React.useEffect(() => {
        setUserSetting();
    }, []);

    const setUserSetting = () => {
        const user = sessionStorage.getItem('logged-user');
        const admin = sessionStorage.getItem('is-admin');

        setUser(user);
        setIsAdmin(!!admin);
    };

    const onSignedIn = () => {
        setOpenSignUpModal(false);
        setOpenSignInModal(false);
        setOpenMenu(false);

        setUserSetting();
    };

    const onOpenSignIn = () => {
        setOpenSignUpModal(false);
        setOpenSignInModal(true);
        setOpenMenu(false);
    };

    const onOpenSignUp = () => {
        setOpenSignInModal(false);
        setOpenSignUpModal(true);
        setOpenMenu(false);
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
                            {user ? (
                                <Link
                                    onClick={() => setOpenMenu(false)}
                                    to="/story/create"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Create Story
                                </Link>
                            ) : (
                                <span
                                    onClick={() => openSignInModal()}
                                    className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Create Story
                                </span>
                            )}
                        </li>
                        <li>
                            {user ? (
                                <span
                                    onClick={onSignOut}
                                    className="cursor-pointer block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-red-500">
                                    Logout
                                </span>
                            ) : (
                                <span
                                    onClick={onOpenSignIn}
                                    className="cursor-pointer block py-2 pl-3 pr-4 rounded md:border-0  md:p-0 text-blue-500">
                                    Login
                                </span>
                            )}
                        </li>
                        {isAdmin && (
                            <li>
                                <Link
                                    to="/admin"
                                    onClick={() => setOpenMenu(false)}
                                    className="max-w-fit p-1 rounded md:border-0 bg-blue-500 text-white block ">
                                    Dashboard
                                </Link>
                            </li>
                        )}
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
        </nav>
    );
}
