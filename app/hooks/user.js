import { api } from '../api/index';
import { useState } from 'react';
import { alertComponent } from '../utils/libs/alertComponent';
import { TOAST_TYPE_CONSTANT } from '../utils/constants';
import { handleAction } from '../utils/libs/alertComponent';
import { useModal } from '../context/modalContext';
import EditUserForm from '../components/forms/userEditForm';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const useUserAction = () => {
    const [reloadTrigger, setReloadTrigger] = useState(0);
    const [loading, setLoading] = useState(true)
    const { openModal, closeModal } = useModal();

    const deleteUser = async (userId) => {
        await api.delete(`/api/v1/users/${userId}`);
        alertComponent(TOAST_TYPE_CONSTANT.SUCCESS, "You have successfully deleted the user!", userId);
        setReloadTrigger(pre => pre + 1)
    };

    const handleDeleteUser = (userId) => {
        handleAction({ userId, onDelete: deleteUser, onEdit: () => { } })
    };

    const onEditUser = async (values, userId) => {
        await api.put(`/api/v1/users/${userId}`, values);
        closeModal();
        setReloadTrigger(pre => pre + 1)
    }
    console.log("Loading in hook", loading)
    const handleEditeUser = async (userId) => {
        try {
            setLoading(true)
            const response = await api.get(`/api/v1/users/${userId}`);
            if (response.data) {
                openModal(<EditUserForm userData={response.data} onEditUser={onEditUser} userId={userId} loading={loading} />);
            }
        } catch (error) {
            console.error("Failed to fetch user data", error);
            alertComponent(TOAST_TYPE_CONSTANT.ERROR, "Failed to load user data for editing.");
        } finally {
            setLoading(false)
        }
    };
    return {
        handleDeleteUser,
        handleEditeUser,
        reloadTrigger
    }
}