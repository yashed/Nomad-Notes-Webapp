import React from 'react';
import axiosInstance from '../../utils/axios-instance';
import { NotificationManager } from 'react-notifications';

export default function ImageUpload({ image, setImage }) {
    const onImage = (e) => {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);

        axiosInstance
            .put('/images/upload', formData)
            .then((result) => {
                if (result?.data?.status === 'success') {
                    setImage(result.data?.data?.url);
                }
            })
            .catch((error) => {
                console.log(error);
                NotificationManager.error(
                    error?.response?.data?.message || error.message || 'Error message'
                );
            });
    };

    return (
        <div class="flex flex-col justify-center w-full max-w-sm">
            <div className="mb-2 block">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">Image</span>
            </div>
            <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                {image ? (
                    <img
                        src={image}
                        alt="profile"
                        class="flex flex-col items-center justify-center pt-5 pb-6 max-h-full"
                    />
                ) : (
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span class="font-semibold">Click to upload</span>
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
                    </div>
                )}
                <input id="dropzone-file" type="file" class="hidden" onChange={onImage} />
            </label>
        </div>
    );
}
