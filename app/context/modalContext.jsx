'use client';

import Modal from "react-modal";
import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalState, setModalState] = useState({
        isOpen: false,
        content: null
    });

    const openModal = (content) => {
        setModalState({ isOpen: true, content });
    };

    const closeModal = () => {
        setModalState({ isOpen: false, content: null });
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}

            <Modal
                isOpen={modalState.isOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        transform: "translate(-50%, -50%)",
                        width: "1000px",
                        padding: "20px",
                        borderRadius: "12px",
                        height: "500px"
                    },
                }}
            >
                {modalState.content}
            </Modal>
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
