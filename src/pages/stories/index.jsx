import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import SearchBar from '../../components/searchbar';
import ReviewCard from '../../components/common/ReviewCard';

import Footer from '../../layout/footer';

import 'react-multi-carousel/lib/styles.css';

export default function Stories () {
    return (
        <div id='stories' className=''>
            <div className='hero-section flex bg-white'>
                <div className='absolute z-20 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                    <h1 className='2xl:text-5xl xl:text-3xl text-xl font-bold text-black'>
                        Share you Travel Experience in form of a story
                    </h1>
                </div>
                <SearchBar />
            </div>
            <div className='xl:px-10 2xl:px-0 flex justify-center items-center bg-gray-100 py-16'>
                <div className='container 2xl:w-3/4'>
                    <div className='flex flex-wrap justify-between items-center px-4'>
                        <div>
                            <div className='text-4xl font-bold'>My Travel Stories</div>
                        </div>
                        <div>
                            <Link
                                to='/review'
                                className='px-8 py-4 text-blue-500 rounded-full border-2
              border-blue-500 text-xl hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out'>
                                Write New Review
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between px-0 mt-8'>
                        <ReviewCard
                            imgSrc='/images/common/Frame 17.jpg'
                            location='Mumbai, India'
                            title='A Wonderful Journey to India'
                            description='I had always been interested in spirituality, so I decided to take a year-long journey to India to explore various religious practices and traditions.'
                            rating={4}
                        />

                        <ReviewCard
                            imgSrc='/images/common/Frame 17-1.jpg'
                            location='Barcelona, Spain'
                            title='A Solo Trip Across Europe'
                            description='I had just graduated from college and decided to take a six-month solo trip across Europe before starting my career. I backpacked through 15 different countries, staying in hostels and meeting people.'
                            rating={5}
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
