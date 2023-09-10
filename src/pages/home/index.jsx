import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import FeaturedDestination from '../../components/common/FeaturedDestination';
import DestinationCard from '../../components/common/DestinationCard';
import ArticleCard from '../../components/common/ArticleCard';

import Footer from '../../layout/footer';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axiosInstance from '../../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import moment from 'moment';
import LoadingScreen from '../../components/loading-screen';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function Home() {
    const [destinationsLoading, setDestinationsLoading] = React.useState(true);
    const [storiesLoading, setStoriesLoading] = React.useState(true);
    const [destinations, setDestinations] = React.useState([]);
    const [stories, setStories] = React.useState([]);

    React.useEffect(() => {
        setDestinationsLoading(true);
        setStoriesLoading(true);
        fetchDestinations();
        fetchStories();
    }, []);

    const fetchDestinations = (search = '') => {
        axiosInstance
            .get('/countries/all', { params: { search, limit: 10 } })
            .then((result) => {
                if (result?.data?.data) setDestinations(result?.data?.data);
            })
            .catch((error) => {
                console.log(error);
                NotificationManager.error(
                    error?.response?.data?.message || error.message || 'Error message'
                );
            })
            .finally(() => {
                setDestinationsLoading(false);
            });
    };

    const fetchStories = (search = '') => {
        axiosInstance
            .get('/stories/all', { params: { search, limit: 6 } })
            .then((result) => {
                if (result?.data?.data) setStories(result?.data?.data);
            })
            .catch((error) => {
                console.log(error);
                NotificationManager.error(
                    error?.response?.data?.message || error.message || 'Error message'
                );
            })
            .finally(() => {
                setStoriesLoading(false);
            });
    };

    function readingTime(text) {
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);

        return time < 5 ? 5 : time;
    }

    return (
        <div id="home" className="">
            <div className="hero-section flex bg-black">
                <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h1 className="2xl:text-6xl xl:text-4xl text-2xl font-bold">
                        Discover New Places and Create Unforgettable Memories
                    </h1>
                </div>

                <FeaturedDestination title="" imageUrl="/images/misc/dest1.jpg" />
                <FeaturedDestination title="" imageUrl="/images/misc/dest2.jpg" />
                <FeaturedDestination title="" imageUrl="/images/misc/dest3.jpg" />
            </div>

            <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-16">
                <div className="container 2xl:w-3/4" style={{ minHeight: 200 }}>
                    <div className="flex flex-wrap justify-between items-center px-4">
                        <div>
                            <div className="text-4xl font-bold">Plan Your Best Trip Ever</div>
                            <div>Making the Most of Your Travel Experience in 2023</div>
                        </div>
                        <div>
                            <Link
                                to="/destinations"
                                className="px-8 py-4 text-blue-500 rounded-full border-2
              border-blue-500 text-xl hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
                                View All Destinations
                            </Link>
                        </div>
                    </div>

                    <div className="px-0 mt-8">
                        {destinationsLoading ? (
                            <Carousel infinite={true} draggable={false} responsive={responsive}>
                                {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => {
                                    return (
                                        <div
                                            key={`destination-${i}`}
                                            role="status"
                                            className="max-w-sm p-4 animate-pulse md:p-6 dark:border-gray-700">
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                                <svg
                                                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 18">
                                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                                </svg>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        ) : (
                            <Carousel infinite={true} draggable={false} responsive={responsive}>
                                {destinations?.map((item) => {
                                    return (
                                        <DestinationCard
                                            key={item?._id}
                                            imgSrc={item.image}
                                            title={item.name}
                                            description={item.description}
                                            link={`/destination/${item._id}`}
                                        />
                                    );
                                })}
                            </Carousel>
                        )}
                    </div>
                </div>
            </div>

            <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-4">
                <div className="container 2xl:w-3/4">
                    <div className="flex flex-wrap justify-between items-center px-4">
                        <div>
                            <div className="text-4xl font-bold">Top Travel Stories</div>
                            <div>Explore our latest stories from our active users</div>
                        </div>
                        <div>
                            <Link
                                to="/stories"
                                className="px-8 py-4 text-blue-500 rounded-full border-2
              border-blue-500 text-xl hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
                                View All Stories
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between px-0 mt-8">
                        {storiesLoading
                            ? Array.from({ length: 4 }, (_, i) => i + 1).map((i) => {
                                  return (
                                      <div
                                          key={`story-${i}`}
                                          role="status"
                                          className="mb-7 w-full lg:w-1/2 p-4 animate-pulse md:p-6 dark:border-gray-700">
                                          <div className="aspect-[3/2] object-cover rounded-xl flex items-center justify-center mb-4 bg-gray-300 dark:bg-gray-700">
                                              <svg
                                                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                                  aria-hidden="true"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="currentColor"
                                                  viewBox="0 0 20 18">
                                                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                              </svg>
                                          </div>
                                          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                                          <span className="sr-only">Loading...</span>
                                      </div>
                                  );
                              })
                            : stories?.map((item) => {
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
                </div>
            </div>

            <Footer />
        </div>
    );
}
