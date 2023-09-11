import { Modal, Button } from 'flowbite-react';
import React from 'react';
import axiosInstance from '../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import { formToJSON } from 'axios';
import TextField from '../components/text-field';
import ImageUpload from '../components/image-upload';
import ChangePasswordForm from './edit-password';

export default function EditUserModal({ data = {}, onSuccess, onChangePassword }) {
    const [image, setImage] = React.useState('');
    const [changePassword, setChangePassword] = React.useState(false);
    const [isProcessing, setIsProcessing] = React.useState(false);

    React.useEffect(() => {
        if (data?.image) setImage(data.image);
    }, [data]);

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = formToJSON(e.target);

        setIsProcessing(true);
        axiosInstance
            .patch(`/${data?.role === 'ADMIN' ? 'admins' : 'users'}/update/${data._id}`, {
                ...formData,
                image
            })
            .then((result) => {
                if (result?.data?.status === 'success') {
                    NotificationManager.success('User details updated');
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

    const showPasswordChange = () => {
        setChangePassword(true);
    };

    return !changePassword ? (
        <form className="w-full" onSubmit={onSubmit}>
            <Modal.Body className="w-full flex items-center flex-col gap-4">
                <ImageUpload image={image} setImage={setImage} />

                <div className="w-full max-w-sm">
                    <TextField
                        name="name"
                        id="name"
                        placeholder="John"
                        required
                        type="text"
                        defaultValue={data.name}
                        label="Name"
                    />
                </div>
                <div className="w-full max-w-sm">
                    <TextField
                        name="email"
                        id="email"
                        placeholder="john@example.com"
                        required
                        type="email"
                        defaultValue={data.email}
                        label="Email"
                    />
                </div>
            </Modal.Body>
            <Modal.Footer className="flex justify-end gap-3">
                <Button onClick={showPasswordChange} outline disabled={isProcessing}>
                    Change Password
                </Button>

                <Button disabled={isProcessing} isProcessing={isProcessing} type="submit">
                    Update
                </Button>
            </Modal.Footer>
        </form>
    ) : (
        <ChangePasswordForm
            data={data}
            onSuccess={onSuccess}
            setChangePassword={setChangePassword}
        />
    );
}