import React from 'react';
import { BsPlus, BsThreeDots } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';
import axiosInstance from '../../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import PopUp from '../../modals/popup';
import ConfirmModal from '../../modals/confirm';
import EditCountryModal from '../../modals/edit-country';
import SearchBar from '../../components/search-bar';
import AddCountryModal from '../../modals/add-country';

export default function Countries() {
    const [selectedItem, setSelectedItem] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [openNewCountryModal, setOpenNewCountryModal] = React.useState(false);
    const [openDeleteModal, setOpenDeleteModal] = React.useState({});
    const [openCountryModal, setOpenCountryModal] = React.useState({});
    const [openEditCountryModal, setOpenEditCountryModal] = React.useState({});

    React.useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    const fetchData = (search = '') => {
        axiosInstance
            .get('/countries/all', { params: { search } })
            .then((result) => {
                if (result?.data?.data) setData(result?.data?.data);
            })
            .catch((error) => {
                console.log(error);
                NotificationManager.error(
                    error?.response?.data?.message || error.message || 'Error message'
                );
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const onEditCountry = (item) => {
        setOpenEditCountryModal(item);
        setSelectedItem('');
    };

    const onApproveCountry = (item) => {
        setOpenCountryModal(item);
        setSelectedItem('');
    };

    const onDeleteCountry = (item) => {
        setOpenDeleteModal(item);
        setSelectedItem('');
    };

    const onEdited = () => {
        fetchData();
        setOpenEditCountryModal({});
    };

    const onAdded = () => {
        fetchData();
        setOpenNewCountryModal(false);
    };

    const onDelete = () => {
        setIsProcessing(true);

        axiosInstance
            .delete(`/countries/remove/${openDeleteModal?._id}`)
            .then((result) => {
                if (result?.data?.status === 'success') {
                    NotificationManager.success('Country details deleted');
                    setOpenDeleteModal('');
                    fetchData();
                }
            })
            .catch((error) => {
                console.log(error);
                NotificationManager.error(
                    error?.response?.data?.message || error.message || 'Error message'
                );
            })
            .finally(() => {
                setIsProcessing(false);
            });
    };

    const onApprove = () => {
        setIsProcessing(true);

        axiosInstance
            .patch(`/countries/update/state/${openCountryModal?._id}`, {
                approved: !openCountryModal?.approved
            })
            .then((result) => {
                if (result?.data?.status === 'success') {
                    NotificationManager.success('Country state updated');
                    setOpenCountryModal({});
                    fetchData();
                }
            })
            .catch((error) => {
                console.log(error);
                NotificationManager.error(
                    error?.response?.data?.message || error.message || 'Error message'
                );
            })
            .finally(() => {
                setIsProcessing(false);
            });
    };

    return (
        <div className="flex flex-col gap-y-5">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Countries
            </h1>

            <div className="mb-0 flex justify-end">
                <button
                    onClick={() => setOpenNewCountryModal(true)}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add New
                    <BsPlus className="w-3.5 h-3.5 mr-2 text-white" />
                </button>
            </div>
            <div className="mb-4">
                <SearchBar onSearch={fetchData} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading ? (
                    <div className="flex items-center justify-center w-full max-w-xs h-96 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                            loading...
                        </div>
                    </div>
                ) : data.length === 0 ? (
                    <span>No countries yet.</span>
                ) : (
                    data.map((country) => {
                        return (
                            <div
                                key={country._id}
                                className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="absolute right-0 flex justify-end px-4 pt-4">
                                    <div className="flex flex-col gap-2 items-end">
                                        {selectedItem === country._id ? (
                                            <button
                                                onClick={() => setSelectedItem('')}
                                                data-dropdown-toggle="dropdown"
                                                className="inline-block w-max text-gray-400  bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 ring-gray-700 rounded-lg text-sm p-1.5"
                                                type="button">
                                                <span className="sr-only">Close dropdown</span>
                                                <IoCloseSharp className="w-5 h-5 text-gray-400" />
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => setSelectedItem(country._id)}
                                                data-dropdown-toggle="dropdown"
                                                className="inline-block w-max text-gray-400  bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 ring-gray-700 rounded-lg text-sm p-1.5"
                                                type="button">
                                                <span className="sr-only">Open dropdown</span>
                                                <BsThreeDots className="w-5 h-5 text-gray-400" />
                                            </button>
                                        )}

                                        <div
                                            id="dropdown"
                                            className={`${
                                                selectedItem === country._id ? '' : 'hidden'
                                            } z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                                            <ul className="py-2" aria-labelledby="dropdownButton">
                                                <li>
                                                    <span
                                                        onClick={() => onEditCountry(country)}
                                                        className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                        Edit
                                                    </span>
                                                </li>
                                                <li>
                                                    <span
                                                        onClick={() => onDeleteCountry(country)}
                                                        className="cursor-pointer block px-4 py-2 text-sm text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-400 dark:hover:text-white">
                                                        Delete
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <a href="#">
                                    <img className="rounded-t-lg" src={country.image} alt="" />
                                </a>
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {country.name}
                                    </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate-3-lines">
                                        {country.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            <PopUp
                title={'Country Details'}
                openModal={openNewCountryModal}
                setOpenModal={setOpenNewCountryModal}>
                <AddCountryModal onSuccess={onAdded} setOpenModal={setOpenNewCountryModal} />
            </PopUp>

            <PopUp
                title={'Country Details'}
                openModal={!!openEditCountryModal?._id}
                setOpenModal={setOpenEditCountryModal}>
                <EditCountryModal
                    data={openEditCountryModal}
                    onSuccess={onEdited}
                    setOpenModal={setOpenEditCountryModal}
                />
            </PopUp>

            <PopUp
                title={'Delete Country'}
                openModal={!!openDeleteModal?._id}
                setOpenModal={setOpenDeleteModal}>
                <ConfirmModal
                    isProcessing={isProcessing}
                    onConfirm={onDelete}
                    setOpenModal={setOpenDeleteModal}
                />
            </PopUp>

            <PopUp
                title={`${openCountryModal?.approved ? 'Decline' : 'Approve'} Country`}
                openModal={!!openCountryModal?._id}
                setOpenModal={setOpenCountryModal}>
                <ConfirmModal
                    message={`Are you sure you want to ${
                        openCountryModal?.approved ? 'decline' : 'approve'
                    } this item?`}
                    isProcessing={isProcessing}
                    onConfirm={onApprove}
                    setOpenModal={setOpenCountryModal}
                />
            </PopUp>
        </div>
    );
}
