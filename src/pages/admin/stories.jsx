import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import PopUp from '../../modals/popup';
import ConfirmModal from '../../modals/confirm';
import EditStoryModal from '../../modals/edit-story';
import SearchBar from '../../components/search-bar';

export default function Stories() {
    const [selectedItem, setSelectedItem] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [openDeleteModal, setOpenDeleteModal] = React.useState({});
    const [openStoryModal, setOpenStoryModal] = React.useState({});
    const [openEditStoryModal, setOpenEditStoryModal] = React.useState({});

    React.useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    const fetchData = (search = '') => {
        axiosInstance
            .get('/stories/all', { params: { search } })
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

    const onEditStory = (item) => {
        setOpenEditStoryModal(item);
        setSelectedItem('');
    };

    const onApproveStory = (item) => {
        setOpenStoryModal(item);
        setSelectedItem('');
    };

    const onDeleteStory = (item) => {
        setOpenDeleteModal(item);
        setSelectedItem('');
    };

    const onEdited = () => {
        fetchData();
        setOpenEditStoryModal({});
    };

    const onDelete = () => {
        setIsProcessing(true);

        axiosInstance
            .delete(`/stories/remove/${openDeleteModal?._id}`)
            .then((result) => {
                if (result?.data?.status === 'success') {
                    NotificationManager.success('Story details deleted');
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
            .patch(`/stories/update/state/${openStoryModal?._id}`, {
                approved: !openStoryModal?.approved
            })
            .then((result) => {
                if (result?.data?.status === 'success') {
                    NotificationManager.success('Story state updated');
                    setOpenStoryModal({});
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
                Travel Stories
            </h1>

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
                    <span>No stories yet.</span>
                ) : (
                    data.map((story) => {
                        return (
                            <div
                                key={story._id}
                                className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="absolute right-0 flex justify-end px-4 pt-4">
                                    <div className="flex flex-col gap-2 items-end">
                                        {selectedItem === story._id ? (
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
                                                onClick={() => setSelectedItem(story._id)}
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
                                                selectedItem === story._id ? '' : 'hidden'
                                            } z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                                            <ul className="py-2" aria-labelledby="dropdownButton">
                                                <li>
                                                    <span
                                                        onClick={() => onEditStory(story)}
                                                        className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                        Edit
                                                    </span>
                                                </li>
                                                <li>
                                                    <span
                                                        onClick={() => onApproveStory(story)}
                                                        className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                        {story.approved ? 'Decline' : 'Approve'}
                                                    </span>
                                                </li>
                                                <li>
                                                    <span
                                                        onClick={() => onDeleteStory(story)}
                                                        className="cursor-pointer block px-4 py-2 text-sm text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-400 dark:hover:text-white">
                                                        Delete
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <a href="#">
                                    <img className="rounded-t-lg" src={story.image} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {story.title}
                                        </h5>
                                    </a>
                                    <a href="#">
                                        <p
                                            className={`mb-2 font-bold p-1 text-green-100 ${
                                                story.approved ? 'bg-green-500' : 'bg-yellow-500'
                                            } max-w-fit rounded-md text-xs`}>
                                            {story.approved ? 'Approved' : 'Not Approved'}
                                        </p>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate-3-lines">
                                        {story.review}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            <PopUp
                title={'Story Details'}
                openModal={!!openEditStoryModal?._id}
                setOpenModal={setOpenEditStoryModal}>
                <EditStoryModal
                    data={openEditStoryModal}
                    onSuccess={onEdited}
                    setOpenModal={setOpenEditStoryModal}
                />
            </PopUp>

            <PopUp
                title={'Delete Story'}
                openModal={!!openDeleteModal?._id}
                setOpenModal={setOpenDeleteModal}>
                <ConfirmModal
                    isProcessing={isProcessing}
                    onConfirm={onDelete}
                    setOpenModal={setOpenDeleteModal}
                />
            </PopUp>

            <PopUp
                title={`${openStoryModal?.approved ? 'Decline' : 'Approve'} Story`}
                openModal={!!openStoryModal?._id}
                setOpenModal={setOpenStoryModal}>
                <ConfirmModal
                    message={`Are you sure you want to ${
                        openStoryModal?.approved ? 'decline' : 'approve'
                    } this item?`}
                    isProcessing={isProcessing}
                    onConfirm={onApprove}
                    setOpenModal={setOpenStoryModal}
                />
            </PopUp>
        </div>
    );
}
