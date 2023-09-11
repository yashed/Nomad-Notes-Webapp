import React from 'react';
import ImageUpload from '../../components/imageUpload/imageUp';
import CountrySelect from '../../components/countryDropDown';
import Footer from '../../layout/footer';
import Navbar from '../../layout/navbar';

export default function CreateStory() {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className="flex flex-col min-h-screen px-4 font-Urbanist md:px-12 mt-33">
                <div className="flex items-center justify-center h-32">
                    <h1
                        style={{ fontSize: '3rem' }}
                        className="font-semibold text-black sm:text-4xl mt-96">
                        Share your Travel Experience in form of a story
                    </h1>
                </div>
                <div className="mt-8 text-center">
                    <h1 className="text-2xl font-semibold text-black mt-96 sm:text-4xl">
                        Create a new Travel Story
                    </h1>
                </div>
                <div className="mt-16">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="mx-auto overflow-hidden bg-gray-300 rounded-lg h-80 w-80 md:h-96 md:w-96 lg:h-96 lg:w-96">
                            <div className="flex items-center justify-center h-full">
                                <ImageUpload />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="mx-2">
                                <form>
                                    <div className="mb-8">
                                        <label className="text-lg sm:text-xl">
                                            Title of your review
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="Summarize your Travel Journey"
                                        />
                                    </div>
                                    <div className="mb-8">
                                        <label className="text-lg sm:text-xl">Your review</label>
                                        <textarea
                                            rows="5"
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="A detailed review of your Travel Journey. Travelers will love to know your experience"
                                        />
                                    </div>
                                    <div className="mb-8">
                                        <label className="text-lg sm:text-xl">Country</label>
                                        <CountrySelect />
                                    </div>
                                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                                        <div className="mb-8">
                                            <label className="text-lg sm:text-xl">Location</label>
                                            <input
                                                type="text"
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                                placeholder="Enter Travel Location"
                                            />
                                        </div>
                                        <div className="mb-8">
                                            <label className="text-lg sm:text-xl">
                                                When did you travel?
                                            </label>
                                            <input
                                                type="date"
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex mb-8">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 mr-2 text-indigo-600 form-checkbox"
                                        />
                                        <p className="text-sm font-medium leading-normal text-black sm:text-base">
                                            I certify that the information in this review is based
                                            solely on my own experiences with the product or service
                                            in question. I also attest that I have no personal or
                                            professional affiliation with the business in question
                                            and have not been given any incentives or payment from
                                            the business to write this review. I am aware that fake
                                            reviews are strictly prohibited on Tripadvisor.
                                        </p>
                                    </div>
                                    <div className="text-left ">
                                        <button className="text-white px-8 py-2 rounded-full bg-[#4169E1]">
                                            Submit Story
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-96">
                <Footer />
            </div>
        </div>
    );
}
