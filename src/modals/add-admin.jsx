import { Modal, Button } from 'flowbite-react';
import React from 'react';
import axiosInstance from '../utils/axios-instance';
import { NotificationManager } from 'react-notifications';
import { formToJSON } from 'axios';
import TextField from '../components/text-field';

export default function AddAdminModal({ onSuccess }) {
    const [isProcessing, setIsProcessing] = React.useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        const data = formToJSON(e.target);

        setIsProcessing(true);
        axiosInstance
            .post('/admins/create', data)
            .then((result) => {
                if (result?.data?.status === 'success') {
                    NotificationManager.success('New admin created');
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
            <Modal.Body className="w-full flex items-center flex-col gap-4">
                <div className="w-full max-w-sm">
                    <TextField
                        name="name"
                        id="name"
                        placeholder="John"
                        required
                        type="text"
                        label="Name"
                    />
                </div>
                <div className="w-full max-w-sm">
                    <TextField
                        name="email"
                        className="w-full"
                        id="email"
                        placeholder="john@example.com"
                        required
                        type="email"
                        label="Email"
                    />
                </div>
                <div className="w-full max-w-sm">
                    <TextField
                        name="password"
                        id="password"
                        required
                        type="password"
                        defaultValue="admin@nomad365"
                        label="Password"
                    />
                    <p className="text-gray-100 text-xs mt-3">
                        Default password will be <b>admin@nomad365</b>
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer className="flex justify-end">
                <Button isProcessing={isProcessing} type="submit">
                    Submit
                </Button>
            </Modal.Footer>
        </form>
    );
}
