import { Modal, Button } from 'flowbite-react';
import React from 'react';
import axiosInstance from '../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import { formToJSON } from 'axios';
import TextField from '../components/text-field';
import TextArea from '../components/text-area';
import ImageUpload from '../components/image-upload';

export default function EditCountryModal({ data = {}, onSuccess }) {
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
            .patch(`/countries/update/${data._id}`, { ...formData, image })
            .then((result) => {
                if (result?.data?.status === 'success') {
                    NotificationManager.success('Country details updated');
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
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                        type="text"
                        defaultValue={data.name}
                        label="Name"
                    />
                </div>
                <div className="w-full max-w-sm">
                    <TextArea
                        name="description"
                        id="description"
                        placeholder="Description"
                        required
                        defaultValue={data.description}
                        label="Description"
                        rows={10}
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
