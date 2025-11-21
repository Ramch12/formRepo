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

    const updateUserSchema = Yup.object({
        firstName: Yup.string().required("firstName is required!"),
        lastName: Yup.string().required("lastName is required!"),
        email: Yup.string().required("email is required!"),
        age: Yup.string().required("age is required!"),
        password: Yup.string().required("password is required!"),
        collegeName: Yup.string().required("collegeName is required!")
    });

    const formik = useFormik({
        validationSchema: updateUserSchema,
        initialValues: { firstName: "", lastName: "", email: "", age: "", collegeName: "" },
        onSubmit,
        enableReinitialize: true,
    });

    function onSubmit(Values) {
        console.log("Values", Values)
    }

    const deleteUser = async (userId) => {
        await api.delete(`/api/v1/users/${userId}`);
        alertComponent(TOAST_TYPE_CONSTANT.SUCCESS, "You have successfully deleted the user!", userId);
        setReloadTrigger(pre => pre + 1)
    };

    const handleDeleteUser = (userId) => {
        handleAction({ userId, onDelete: deleteUser, onEdit: () => { } })
    };

    const handleEditeUser = async (userId) => {
        console.log("clickked", userId)
        openModal(<EditUserForm formik={formik} userId={userId} />);
    }
    return {
        handleDeleteUser,
        handleEditeUser,
        reloadTrigger
    }
}