import React from "react";
import { Link, useParams } from "react-router-dom";

import "./styles.scss";

import FeaturedDestination from "../../components/common/FeaturedDestination";
import DestinationCard from "../../components/common/DestinationCard";
import RecentSearchCard from "../../components/common/RecentSearchCard";
import ArticleCard from "../../components/common/ArticleCard";

import SelectField from "../../components/select-field";

import Footer from "../../layout/footer";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
    const { destinationId } = useParams();

    return (
        <div id="home" className="">
            <div className="hero-section flex bg-black relative">

                <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h1 className="text-stroke text-[15vw] -webkit-text-fill-color- text-stroke-1 text-stroke-black font-bold">CROATIA</h1>
                </div>

                <div className="w-full relative">
                    <div
                        className="z-0 h-[80vh] w-full bg-bottom bg-no-repeat bg-cover relative opacity-70"
                        style={{ backgroundImage: `url(/images/common/destinations_bg.jpg)` }}
                    ></div>
                </div>


            </div>

            <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-16 pb-8">
                <div className="container 2xl:w-3/4">
                    <div>
                        <div className="text-center">
                            <div className="pb-3 xl:text-7xl text-6xl font-bold text-blue-500">Croatia</div>
                            <div className="pb-3 xl:text-4xl text-3xl font-semibold text-gray-400">Europe</div>
                            <p className="pb-3 w-1/2 m-auto font-semibold">Croatia is a fun destination with a wide range of attractions, including beautiful coastal cities, stunning national parks, charming seaside towns, and picturesque islands. The country offers a rich history and culture, with ancient ruins, impressive architecture, and a vibrant cultural scene. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-16 pb-8">
                <div className="container 2xl:w-3/4">
                    <div className=" px-4">
                        <div className="text-blue-500 font-semibold tracking-[.25em] pb-4">01 / TOP SIGHTS & LOCATIONS</div>
                        <div className="flex flex-wrap justify-between items-center">
                            <div>
                                <div className="text-6xl font-medium leading-tight">Top Destinations for<br /> your Travel Plans</div>
                            </div>
                            <div>
                                <label htmlFor="" className="text-lg font-semibold ps-2">Filter option</label>
                                <SelectField className={"!rounded-full !px-2 mt-2 w-64"} options={[
                                    { label: 'All Types', value: 'all' },
                                    { label: 'Hotel', value: 'hotel' },
                                    { label: 'Restaurant', value: 'restaurant' },
                                    { label: 'Attraction', value: 'attraction' },
                                ]} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between px-0 mt-16 w-full">
                        <DestinationCard
                            width={"lg:w-1/3"}
                            imgSrc="/images/common/Frame17.jpg"
                            location={"Tokyo, Japan"}
                            title="The Shibuya"
                            description="Discover the best travel destinations based on your interests."
                            link={"/destination/italy"}
                        />
                        <DestinationCard
                            width={"lg:w-1/3"}
                            imgSrc="/images/common/Frame9.jpg"
                            location={"Rome, Italy"}
                            title="The Colosseum"
                        />
                        <DestinationCard
                            width={"lg:w-1/3"}
                            imgSrc="/images/misc/dest2.jpg"
                            title="The Shibuya"
                            description="Discover the best travel destinations based on your interests."
                            link={"/destination/italy"}
                        /><DestinationCard
                            width={"lg:w-1/3"}
                            imgSrc="/images/common/Frame17.jpg"
                            location={"Tokyo, Japan"}
                            title="The Shibuya"
                            description="Discover the best travel destinations based on your interests."
                        />
                        <DestinationCard
                            width={"lg:w-1/3"}
                            imgSrc="/images/common/Frame9.jpg"
                            location={"Rome, Italy"}
                            title="The Colosseum"
                        />
                        <DestinationCard
                            width={"lg:w-1/3"}
                            imgSrc="/images/misc/dest2.jpg"
                            title="The Shibuya"
                            description="Discover the best travel destinations based on your interests."
                            link={"/destination/italy"}
                        />
                    </div>

                    <div className="flex justify-center mt-8">
                        <Link to="/destinations"
                            className="px-8 py-4 text-blue-500 rounded-full border-2 border-blue-500 text-xl hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">View All Top Attractions</Link>
                    </div>

                </div>
            </div>

            <Footer />

        </div>
    );
}
