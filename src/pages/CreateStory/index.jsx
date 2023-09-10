import React from 'react';
import ImageUpload from '../../components/image-upload';
import CountrySelect from '../../components/countryDropDown';
import Footer from '../../layout/footer';
import axiosInstance from '../../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import { formToJSON } from 'axios';
import { Button } from 'flowbite-react';

export default function CreateStory() {
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [image, setImage] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const user = sessionStorage.getItem('logged-user');

        if (!user) {
            return NotificationManager.warning('Please login to create a new story');
        }
        if (!image) {
            return NotificationManager.warning('Image is required');
        }

        setIsProcessing(true);
        const formData = formToJSON(e.target);

        delete formData.approved;

        axiosInstance
            .post(`/stories/create`, { ...formData, image, user_id: user })
            .then((result) => {
                if (result?.data?.status === 'success') {
                    NotificationManager.success(
                        'Thank you for the story review, your story will be published soon after inspection.'
                    );
                }
            })
            .catch((error) => {
                console.log(error);
                NotificationManager.error(
                    error?.response?.data?.message || error.message || 'Error message'
                );
            })
            .finally(() => {
                setIsProcessing(false);
            });
    };

    return (
        <>
            <div className="flex flex-col min-h-screen font-Urbanist px-4 md:px-12 lg:px-24 mb-20">
                <div className="flex items-center justify-center h-32">
                    <h1
                        style={{ fontSize: '3rem' }}
                        className="font-semibold text-black sm:text-4xl">
                        Share your Travel Experience in form of a story
                    </h1>
                </div>
                <div className="mt-8 text-center">
                    <h1 className="text-2xl font-semibold text-black sm:text-4xl mt-20">
                        Create a new Travel Story
                    </h1>
                </div>
                <div className="mt-16">
                    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
                        <div className="bg-gray-700 p-5 rounded-lg overflow-hidden h-80 w-full max-w-80 md:h-96 md:max-w-96 lg:h-96 lg:max-w-96 mx-auto">
                            <div className="flex items-center justify-center h-full">
                                <ImageUpload noLabel image={image} setImage={setImage} />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="mx-2">
                                <form onSubmit={onSubmit}>
                                    <div className="mb-8">
                                        <label className="text-lg sm:text-xl">
                                            Title of your review
                                        </label>
                                        <input
                                            name="title"
                                            required
                                            type="text"
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="Summarize your Travel Journey"
                                        />
                                    </div>
                                    <div className="mb-8">
                                        <label className="text-lg sm:text-xl">Your review</label>
                                        <textarea
                                            name="review"
                                            rows="5"
                                            required
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="A detailed review of your Travel Journey. Travelers will love to know your experience"
                                        />
                                    </div>
                                    <div className="mb-8">
                                        <label className="text-lg sm:text-xl">Country</label>
                                        <CountrySelect name="country" required />
                                    </div>
                                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                                        <div className="mb-8">
                                            <label className="text-lg sm:text-xl">Location</label>
                                            <input
                                                name="location"
                                                required
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
                                                name="when"
                                                required
                                                type="date"
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex mb-8">
                                        <input
                                            name="approved"
                                            required
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
                                        <Button isProcessing={isProcessing} type="submit">
                                            Submit Story
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
