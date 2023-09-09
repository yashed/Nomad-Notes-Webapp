import React from 'react';
import axiosInstance from '../../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import PopUp from '../../modals/popup';
import ConfirmModal from '../../modals/confirm';
import EditUserModal from '../../modals/edit-user';

export default function Users() {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [openEditModal, setOpenEditModal] = React.useState({});
    const [openDeleteModal, setOpenDeleteModal] = React.useState('');

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        axiosInstance
            .get('/users/all')
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

    const onDelete = () => {
        setIsProcessing(true);

        axiosInstance
            .delete(`/users/remove/${openDeleteModal}`)
            .then((result) => {
                if (result?.data?.status === 'success') {
                    NotificationManager.success('User details deleted');
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

    const onEdited = () => {
        fetchData();
        setOpenEditModal('');
    };

    return (
        <div className="flex flex-col gap-y-5">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Users
            </h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-tl-lg">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3"></th>
                            <th scope="col" className="px-6 py-3 text-right rounded-tr-lg"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr className="bg-white dark:bg-gray-800">
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div role="status" className="max-w-sm animate-pulse">
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div role="status" className="max-w-sm animate-pulse">
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div role="status" className="max-w-sm animate-pulse">
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div role="status" className="max-w-sm animate-pulse">
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </td>
                            </tr>
                        ) : data.length === 0 ? (
                            <tr className="bg-white dark:bg-gray-800">
                                <td
                                    colSpan="4"
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    No records yet.
                                </td>
                            </tr>
                        ) : (
                            data.map((item, i) => {
                                return (
                                    <tr key={`user-${i}`} className="bg-white dark:bg-gray-800">
                                        <td
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.email}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => setOpenEditModal(item)}
                                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                Edit
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => setOpenDeleteModal(item._id)}
                                                class="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            <PopUp
                title={'User Details'}
                openModal={openEditModal?._id}
                setOpenModal={setOpenEditModal}>
                <EditUserModal data={openEditModal} onSuccess={onEdited} />
            </PopUp>

            <PopUp
                title={'Delete User'}
                openModal={!!openDeleteModal}
                setOpenModal={setOpenDeleteModal}>
                <ConfirmModal
                    isProcessing={isProcessing}
                    onConfirm={onDelete}
                    setOpenModal={setOpenDeleteModal}
                />
            </PopUp>
        </div>
    );
}
