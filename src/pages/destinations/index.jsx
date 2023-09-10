import React from 'react';

import DestinationCard from '../../components/common/DestinationCard';
import Footer from '../../layout/footer';
import axiosInstance from '../../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import LoadingScreen from '../../components/loading-screen';

export default function Home() {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

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

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <div id="destinations" className="">
            <div className="hero-section flex bg-black relative">
                <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl font-bold">
                        Discovering the wonders of our planet, one adventure at a time
                    </h1>
                </div>

                <div className="w-full relative">
                    <div
                        className="z-0 h-[80vh] w-full bg-bottom bg-no-repeat bg-cover relative opacity-70"
                        style={{
                            backgroundImage: `url(/images/common/destinations_bg.jpg)`
                        }}></div>
                </div>
            </div>

            <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-10">
                <div className="container 2xl:w-3/4">
                    <div className="mb-6 w-1/2 px-4">
                        <div className="relative">
                            <input
                                onChange={(e) => fetchData(e.target.value)}
                                type="search"
                                id="default-search"
                                className="block w-full px-6 pr-12 py-4 text-lg text-gray-900 rounded-full border-2 border-blue-500 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                placeholder="Search ..."
                            />
                            <button
                                type="submit"
                                className="block absolute inset-y-0 right-0 flex items-center pr-6">
                                <svg
                                    className="w-4 h-4 text-blue-500 dark:text-blue-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between px-0 mt-16 w-full">
                        {data?.map((item) => {
                            return (
                                <DestinationCard
                                    key={item?._id}
                                    width={'lg:w-1/3'}
                                    imgSrc={item.image}
                                    title={item.name}
                                    description={item.description}
                                    link={`/destination/${item._id}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
