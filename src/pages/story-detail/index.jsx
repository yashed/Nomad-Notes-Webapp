import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './styles.css';
import Footer from '../../layout/footer';

import 'react-multi-carousel/lib/styles.css';
import axiosInstance from '../../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import LoadingScreen from '../../components/loading-screen';
import ArticleCard from '../../components/common/ArticleCard';
import moment from 'moment';

export default function StoryDetails() {
    let { storyId } = useParams();

    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [relatedData, setRelatedData] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        fetchData();
    }, [storyId]);

    React.useEffect(() => {
        fetchRelated();
    }, [storyId, data]);

    const fetchData = () => {
        axiosInstance
            .get(`/stories/${storyId}`)
            .then((result) => {
                if (result?.data?.data) {
                    setData(result?.data?.data);
                } else {
                    window.location.assign('/not-found');
                }
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

    const fetchRelated = () => {
        axiosInstance
            .get(`/stories/random/${storyId}`, { params: { search: '', limit: 6 } })
            .then((result) => {
                if (result?.data?.data) {
                    setRelatedData(result?.data?.data);
                }
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

    function readingTime(text) {
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);

        return time < 5 ? 5 : time;
    }

    if (loading) return <LoadingScreen />;

    return (
        <div className="">
            <div className="hero-section flex bg-black relative">
                <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h1 className="text-stroke text-[15vw] -webkit-text-fill-color- text-stroke-1 text-stroke-black font-bold uppercase">
                        {data?.name}
                    </h1>
                </div>

                <div className="w-full relative">
                    <div
                        className="z-0 h-[80vh] w-full bg-bottom bg-no-repeat bg-cover relative opacity-70"
                        style={{
                            backgroundImage: `url(${
                                data?.image || '/images/common/destinations_bg.jpg'
                            })`
                        }}></div>
                </div>
            </div>

            <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-16">
                <div className="2xl:w-3/4">
                    <div>
                        <div className="text-center">
                            <div className="pb-3 xl:text-7xl text-6xl font-bold text-blue-500">
                                {data?.title}
                            </div>
                            <div className="flex flex-wrap gap-3 items-center justify-center pb-3">
                                <div className="xl:text-2xl text-lg font-semibold text-gray-400">
                                    {data?.location}
                                </div>
                                <div className="w-2 h-2 rounded-full bg-gray-500 mx-2"></div>
                                <div className="xl:text-2xl text-lg font-semibold text-gray-400">
                                    {data?.country}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3 items-center justify-center pb-3">
                                <div className="xl:text-2xl text-lg font-semibold text-gray-400">
                                    {moment(data?.when).format('DD MMM YYYY')}
                                </div>
                            </div>
                            <p className="pb-3 w-1/2 m-auto font-semibold">{data?.review}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 pb-8">
                <div className="container 2xl:w-3/4">
                    <div className="px-4">
                        <div className="text-blue-500 font-semibold tracking-[.25em] pb-4">
                            EXPLORE MORE STORIES
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between px-0 mt-8 w-full">
                        {relatedData?.map((item) => {
                            return (
                                <ArticleCard
                                    key={item?._id}
                                    to={`/story/${item._id}`}
                                    imgSrc={item.image}
                                    location={item.location}
                                    date={moment(item.when).format('DD MMM YYYY')}
                                    readTime={`${readingTime(item.review)} min read`}
                                    title={item.title}
                                    description={item.review}
                                />
                            );
                        })}
                    </div>

                    <div className="flex w-full justify-center">
                        <Link
                            to="/stories"
                            className="px-8 py-4 text-blue-500 rounded-full border-2
              border-blue-500 text-xl hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
                            View All Stories
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
