import { Modal, Button } from 'flowbite-react';
import React from 'react';
import axiosInstance from '../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import { formToJSON } from 'axios';
import TextField from '../components/text-field';
import TextArea from '../components/text-area';
import moment from 'moment/moment';
import ImageUpload from '../components/image-upload';

export default function EditStoryModal({ data = {}, onSuccess }) {
    const [image, setImage] = React.useState('');
    const [isProcessing, setIsProcessing] = React.useState(false);

    React.useEffect(() => {
        if (data?.image) setImage(data.image);
    }, [data]);

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = formToJSON(e.target);

        if (!image) {
            return NotificationManager.warning('Image is required');
        }

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
                <ImageUpload image={image} setImage={setImage} />

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
