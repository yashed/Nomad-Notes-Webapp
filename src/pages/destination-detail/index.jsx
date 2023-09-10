import React from "react";
import { Link, useParams } from "react-router-dom";

import "./styles.scss";

import DestinationCard from "../../components/common/DestinationCard";
import ArticleCard from "../../components/common/ArticleCard";
import SelectField from "../../components/select-field";
import Footer from "../../layout/footer";

import 'react-multi-carousel/lib/styles.css';


export default function Home() {
    let { destinationId } = useParams();
    if (destinationId) 
        destinationId = destinationId.charAt(0).toUpperCase() + destinationId.slice(1).toLowerCase();
      

    return (
        <div id="home" className="">
            <div className="hero-section flex bg-black relative">

                <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h1 className="text-stroke text-[15vw] -webkit-text-fill-color- text-stroke-1 text-stroke-black font-bold uppercase">{destinationId}</h1>
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
                            <div className="pb-3 xl:text-7xl text-6xl font-bold text-blue-500">{destinationId}</div>
                            <div className="pb-3 xl:text-4xl text-3xl font-semibold text-gray-400">Europe</div>
                            <p className="pb-3 w-1/2 m-auto font-semibold">{destinationId} is a fun destination with a wide range of attractions, including beautiful coastal cities, stunning national parks, charming seaside towns, and picturesque islands. The country offers a rich history and culture, with ancient ruins, impressive architecture, and a vibrant cultural scene. </p>
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

            <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-16 pb-8">
                <div className="container 2xl:w-3/4">
                    <div className=" px-4">
                        <div className="text-blue-500 font-semibold tracking-[.25em] pb-4">02 / LATEST FEATURED STORIES</div>
                        <div className="flex flex-wrap justify-between items-center">
                            <div>
                                <div className="text-6xl font-medium leading-tight">Latest Stories from<br /> {destinationId}</div>
                            </div>
                            <div>
                                <Link to="/"
                                    className="px-8 py-4 text-blue-500 rounded-full border-2
              border-blue-500 text-xl hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">View All Stories</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between px-0 mt-16 w-full">
                        <ArticleCard
                            to="/"
                            imgSrc="/images/common/Frame 17.jpg"
                            location="Mumbai, India"
                            date="Feb 27, 2023"
                            readTime="5 min read"
                            title="A Wonderful Journey to India"
                            description="I had always been interested in spirituality, so I decided to take a year-long journey to India to explore various religious practices and traditions."
                        />

                        <ArticleCard
                            to="/"
                            imgSrc="/images/common/Frame 17-1.jpg"
                            location="Barcelona, Spain"
                            date="Feb 27, 2023"
                            readTime="5 min read"
                            title="A Solo Trip Across Europe"
                            description="I had just graduated from college and decided to take a six-month solo trip across Europe before starting my career. I backpacked through 15 different countries, staying in hostels and meeting people."
                        />
                    </div>

                </div>
            </div>

            <div className="xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-16 pb-8">
                <div className="container 2xl:w-3/4">
                    <div className=" px-4">
                        <div className="text-blue-500 font-semibold tracking-[.25em] pb-4 uppercase">03 / OTHER FUN PLACES IN {destinationId}</div>
                        <div className="flex flex-wrap justify-between items-center">
                            <div>
                                <div className="text-6xl font-medium leading-tight">Other Fun Places<br /> in {destinationId}</div>
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
