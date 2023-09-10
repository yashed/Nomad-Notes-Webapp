import React from 'react';
import AdminCard from '../../components/admin-card';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import axiosInstance from '../../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import PopUp from '../../modals/popup';
import AddAdmin from '../../modals/add-admin';
import SearchBar from '../../components/search-bar';

export default function Admins() {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [openModal, setOpenModal] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    const fetchData = (search = '') => {
        axiosInstance
            .get('/admins/all', { params: { search } })
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

    const onAdded = () => {
        fetchData();
        setOpenModal(false);
    };

    return (
        <div className="flex flex-col gap-y-5">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Admins
            </h1>

            <div className="mb-4">
                <SearchBar onSearch={fetchData} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                {loading ? (
                    <div
                        style={{ minHeight: 250 }}
                        className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                            loading...
                        </div>
                    </div>
                ) : (
                    data.map((item) => {
                        return <AdminCard key={item._id} data={item} onDeleteSuccess={fetchData} />;
                    })
                )}
                <div
                    onClick={() => setOpenModal(true)}
                    style={{ minHeight: 250 }}
                    className="flex flex-col justify-center items-center w-full max-w-sm bg-white border border-blue-500 hover:bg-blue-100 transition-colors ease-linear cursor-pointer rounded-lg shadow p-5">
                    <AiOutlinePlusCircle className="text-blue-500 text-6xl mb-5" />
                    <h5 className="mb-1 text-xl font-medium text-blue-500 text-center">
                        Add New Admin
                    </h5>
                </div>
            </div>

            <PopUp title={'Add New Admin'} openModal={openModal} setOpenModal={setOpenModal}>
                <AddAdmin onSuccess={onAdded} />
            </PopUp>
        </div>
    );
}
