import { Button, Modal } from 'flowbite-react';

export default function PopUp({ title, openModal, setOpenModal, children }) {
    return (
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>{title}</Modal.Header>
            {children}
        </Modal>
    );
}
