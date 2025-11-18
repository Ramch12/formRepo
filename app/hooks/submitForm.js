'use client';


import { useState } from "react";
import * as Yup from 'yup';
import { hobbies } from "../utils/constants";
import { useFormik } from "formik";

export const useSubmitForm = () => {
    const [currentDate, setCurrentDate] = useState();
    const formSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("First name is required"),
        email: Yup.string().required("First name is required"),
        age: Yup.string().required("First name is required"),
        password: Yup.string().required("First name is required"),
        collegeName: Yup.string().required("First name is required"),
        country: Yup.string().required("First name is required"),
        gender: Yup.string().required("First name is required"),
        termsAndCondition: Yup.string().required("First name is required"),
        hobbies: Yup.string().required("First name is required"),
        dateOfBirth: Yup.string().datetime().required("First name is required"),
        file: Yup.string().required("Please upload a file"),
        aboutYourSelf: Yup.string().required("Please upload a file")
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
        termsAndCondition: "",
        hobbies: "",
        dateOfBirth: "",
        file: "",
        aboutYourSelf: ""
    }

    const onFormSubmit = (value) => {
        console.log("submitted form value is")
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