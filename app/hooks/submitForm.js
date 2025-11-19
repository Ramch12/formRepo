'use client';

import { useState } from "react";
import * as Yup from 'yup';
import { hobbies } from "../utils/constants";
import { useFormik } from "formik";
import { TOAST_TYPE_CONSTANT } from '../utils/constants/index';
import { alertComponent } from '../utils/libs/alertComponent';
import { api } from '../api/index'

export const useSubmitForm = () => {
    const [currentDate, setCurrentDate] = useState();

    const formSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("last name is required"),
        email: Yup.string().required("email is required"),
        age: Yup.string().required("age is required"),
        password: Yup.string().required("password is required"),
        collegeName: Yup.string().required("collegeName is required"),
        // country: Yup.string().required("First name is required"),
        // gender: Yup.string().required("First name is required"),
        // termsAndCondition: Yup.string().required("First name is required"),
        // hobbies: Yup.string().required("First name is required"),
        // dateOfBirth: Yup.string().datetime().required("First name is required"),
        // file: Yup.string().required("Please upload a file"),
        aboutYourSelf: Yup.string().required("Please fill about yourself.")
    });

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        password: "",
        collegeName: "",
        // country: "",
        // gender: "",
        // termsAndCondition: "",
        // hobbies: "",
        // dateOfBirth: "",
        // file: "",
        aboutYourSelf: ""
    }

    const onFormSubmit = async (values) => {
        const { data } = await api.post("/api/v1/users", values);
        if (data) {
            return alertComponent(TOAST_TYPE_CONSTANT.SUCCESS, "Your form is submitted successfully");
        }
        alertComponent(TOAST_TYPE_CONSTANT.SUCCESS, "Some issue occure during form submission!");
    };

    const formik = useFormik({
        initialValues,
        validationSchema: formSchema,
        onSubmit: onFormSubmit
    });


    return {
        formik,
        currentDate,
        setCurrentDate
    }
};