import { Modal, Button } from 'flowbite-react';
import React from 'react';
import axiosInstance from '../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import { formToJSON } from 'axios';
import TextField from '../components/text-field';
import TextArea from '../components/text-area';
import moment from 'moment/moment';

export default function EditStoryModal({ data = {}, onSuccess }) {
    const [image, setImage] = React.useState('');
    const [isProcessing, setIsProcessing] = React.useState(false);

    React.useEffect(() => {
        if (data?.image) setImage(data.image);
    }, [data]);

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

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = formToJSON(e.target);

        setIsProcessing(true);
        axiosInstance
            .patch(`/stories/update/${data._id}`, { ...formData, image })
            .then((result) => {
                if (result?.data?.status === 'success') {
                    NotificationManager.success('Story details updated');
                    onSuccess(true);
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
        <form className="w-full" onSubmit={onSubmit}>
            <Modal.Body className="max-form-h overflow-y-auto w-full flex items-center flex-col gap-4">
                <div class="flex flex-col justify-center w-full max-w-sm">
                    <div className="mb-2 block">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                            Image
                        </span>
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

                <div className="w-full max-w-sm">
                    <TextField
                        name="title"
                        id="title"
                        placeholder="Title"
                        required
                        type="text"
                        defaultValue={data.title}
                        label="Title"
                    />
                </div>
                <div className="w-full max-w-sm">
                    <TextField
                        name="country"
                        id="country"
                        placeholder="Country"
                        required
                        type="text"
                        defaultValue={data.country}
                        label="Country"
                    />
                </div>
                <div className="w-full max-w-sm">
                    <TextField
                        name="location"
                        id="location"
                        placeholder="Location"
                        required
                        type="text"
                        defaultValue={data.location}
                        label="Location"
                    />
                </div>
                <div className="w-full max-w-sm">
                    <TextField
                        name="when"
                        id="when"
                        placeholder="Date"
                        required
                        type="date"
                        defaultValue={moment(data.when).format('YYYY-MM-DD')}
                        label="Date"
                    />
                </div>
                <div className="w-full max-w-sm">
                    <TextArea
                        name="review"
                        id="review"
                        placeholder="Review"
                        required
                        defaultValue={data.review}
                        label="Review"
                        minRows={10}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer className="flex justify-end gap-3">
                <Button disabled={isProcessing} isProcessing={isProcessing} type="submit">
                    Update
                </Button>
            </Modal.Footer>
        </form>
    );
}
