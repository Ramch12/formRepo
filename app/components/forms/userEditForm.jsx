import Input from "../input";
import Button from '../../components/button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditUserForm = ({ userData, onEditUser, userId, loading }) => {
    console.log("loading===>", loading)
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
        initialValues: {
            firstName: userData?.firstName || "",
            lastName: userData?.lastName || "",
            email: userData?.email || "",
            age: userData?.age || "",
            collegeName: userData?.collegeName || "",
            password: userData?.password || ""
        },
        onSubmit: (values) => {
            console.log("Values submitted", values);
            onEditUser(values, userId)
        },
        enableReinitialize: true,
    });

    return (
        <div className="h-1/2">
            <div className="p-2">
                <h3 className="text-center text-xl font-bold">Update the User</h3>
            </div>
            <form className="h-full" onSubmit={formik.handleSubmit}>
                <div className="border border-solid border-black p-2 grid grid-cols-2 gap-4 rounded-2xl">
                    <Input isRequired label="First Name" name="firstName" inputClassName="border border-solid border-black" formik={formik} />
                    <Input isRequired label="Last Name" name="lastName" inputClassName="border border-solid border-black" formik={formik} />
                    <Input isRequired label="Email" name="email" inputClassName="border border-solid border-black" formik={formik} />
                    <Input isRequired label="Password" name="password" inputClassName="border border-solid border-black" formik={formik} />
                    <Input isRequired label="Age" name="age" inputClassName="border border-solid border-black" formik={formik} />
                    <Input isRequired label="College Name" name="collegeName" inputClassName="border border-solid border-black" formik={formik} />
                </div>
                <div className="h-full flex justify-end items-center">
                    <Button btnTxt="Update" className="p-2 bg-[#e7f18b] cursor-pointer" loading={loading} />
                </div>
            </form>
        </div>
    );
};

export default EditUserForm;