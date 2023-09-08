import React from "react";

import DestinationCard from "../../components/common/DestinationCard";
import SelectField from "../../components/select-field";
import Footer from "../../layout/footer";

export default function Home() {

    return (
        <div id="home" className="">
            <div className="hero-section flex bg-black relative">

                <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl font-bold">Discovering the wonders of our planet, one adventure at a time</h1>
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
                    <form className="w-1/2 px-4">
                        <div className="mb-6">
                            <div class="relative">
                                <input type="search" id="default-search" class="block w-full px-6 pr-12 py-4 text-lg text-gray-900 rounded-full border-2 border-blue-500 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Search for places, hotels or restaurants" />
                                <button type="submit" class="block absolute inset-y-0 right-0 flex items-center pr-6">
                                    <svg class="w-4 h-4 text-blue-500 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="me-8">
                                <label htmlFor="" className="text-lg font-semibold ps-2">Filter by type of place</label>
                                <SelectField className={"!rounded-full !px-2 mt-2"} options={[
                                    { label: 'All Types', value: 'all' },
                                    { label: 'Hotel', value: 'hotel' },
                                    { label: 'Restaurant', value: 'restaurant' },
                                    { label: 'Attraction', value: 'attraction' },
                                ]} />
                            </div>
                            <div className="">
                                <label htmlFor="" className="text-lg font-semibold ps-2">Sort By</label>
                                <SelectField className={"!rounded-full !px-2 mt-2"} options={[
                                    { label: 'Most Popular', value: 'popular' },
                                    { label: 'Highest Rated', value: 'highest' },
                                    { label: 'Lowest Rated', value: 'lowest' },
                                ]} />
                            </div>

                        </div>

                    </form>

                    <div className="flex flex-wrap justify-between px-0 mt-16 w-full">
                        <DestinationCard
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

                </div>
            </div>

            <Footer />

        </div>
    );
};