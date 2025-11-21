'use client';

import { useState } from "react";
import * as Yup from 'yup';
import { hobbies } from "../utils/constants";
import { useFormik } from "formik";
import { TOAST_TYPE_CONSTANT } from '../utils/constants/index';
import { alertComponent } from '../utils/libs/alertComponent';
import { api } from '../api/index';
import { useRouter } from 'next/navigation';

export const useSubmitForm = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const router = useRouter();

    const formSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("last name is required"),
        email: Yup.string().required("email is required"),
        age: Yup.string().required("age is required"),
        password: Yup.string().required("password is required"),
        collegeName: Yup.string().required("collegeName is required"),
        country: Yup.string().required("Please select your country"),
        gender: Yup.string().oneOf(["MALE", "FEMALE", "OTHER"]).required("Please select your gender"),
        termsAndCondition: Yup.boolean(),
        hobbies: Yup.array().of(Yup.string()).min(1, "Please select at least one hobby"),
        dateOfBirth: Yup.date().nullable().required("Please choose you date of birth"),
        aboutYourSelf: Yup.string().required("Please fill about yourself.")
        // file: Yup.string().required("Please upload a file"),
    });

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        password: "",
        collegeName: "",
        country: "",
        gender: "",
        termsAndCondition: false,
        hobbies: [],
        dateOfBirth: "",
        // file: "",
        aboutYourSelf: ""
    }

    const onFormSubmit = async (values, actions) => {
        const { data } = await api.post("/api/v1/users", values);
        if (data) {
            alertComponent(TOAST_TYPE_CONSTANT.SUCCESS, "Your form is submitted successfully");
            actions.resetForm();
            router.push("/user");
            return
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