import React from 'react';

export default function ArticleCard ({ imgSrc, location, title, description, rating }) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<i key={i} className='fas fa-star text-yellow-500'></i>);
        } else {
            stars.push(<i key={i} className='far fa-star text-white-500'></i>);
        }
    }
    return (
        <div className='flex flex-col items-center mt-8'>
            <div className='w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden'>
                <div className='w-full flex lg:w-1/2 p-4 block text-black transition-transform duration-300 ease-in-out transform hover:translate-y-[-2px] hover:backface-visibility-visible relative'>
                    <div className='w-1/2'>
                        <img
                            className='w-full h-full object-cover rounded-xl'
                            src={imgSrc}
                            alt=''
                        />
                    </div>
                    <div className='w-1/2 p-4 ps-1'>
                        <div className='text-base text-gray-500 w-full flex justify-between items-center pb-2'>
                            <div className='w-1/2'>{location}</div>
                        </div>
                        <div className='2xl:text-3xl text-2xl font-bold pb-2'>{title}</div>
                        <div className='text-lg pb-2'>{description}</div>

                        <div className='flex mt-2'>{stars}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
