import Input from "../input";
import Button from '../../components/button';
import { useEffect, useState } from 'react';
import { api } from '../../api/index';
import { alertComponent } from '../../utils/libs/alertComponent';
import { TOAST_TYPE_CONSTANT } from '../../utils/constants';
import { BeatLoader } from "react-spinners";

const editeUserForm = ({ formik, userId }) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        api.get(`/api/v1/users/${userId}`).then(({ data }) => {
            if (data) {
                formik.setValues({
                    firstName: data.firstName || "",
                    lastName: data.lastName || "",
                    email: data.email || "",
                    password: data.password || "",
                    age: data.age || "",
                    collegeName: data.collegeName || ""
                });
            }
        }).catch((error) => {
            console.log("Error", error)
            alertComponent(TOAST_TYPE_CONSTANT.ERROR, "Error while fetching the data")
        }).finally(() => {
            setLoading(false)
        })
    }, [userId]);

    return loading ? (<div className="flex justify-center items-center h-64">
        <BeatLoader size={18} />
    </div>) : (<div className="h-1/2">
        <div className="p-2">
            <h3 className="text-center text-xl font-bold">Update the User</h3>
        </div>
        <form action="" className="h-full" onSubmit={formik.handleSubmit}>
            <div className="border border-solid border-black p-2 grid grid-cols-2 gap-4 rounded-2xl">
                < Input isRequired label="First Name" name={"firstName"} inputClassName={`border border-solid border-black`} {...formik} />
                < Input isRequired label="Last Name" name={"lastName"} inputClassName={`border border-solid border-black`} {...formik} />
                < Input isRequired label="Email" name={"email"} inputClassName={`border border-solid border-black`} {...formik} />
                < Input isRequired label="Password" name={"password"} inputClassName={`border border-solid border-black`} {...formik} />
                < Input isRequired label="Age" name={"age"} inputClassName={`border border-solid border-black`} {...formik} />
                < Input isRequired label="College Name" name={"collegeName"} inputClassName={`border border-solid border-black`} {...formik} />
            </div>
            <div className="h-full flex justify-end items-center">
                < Button btnTxt="Update" className="p-2 bg-[#e7f18b] cursor-pointer" />
            </div>
        </form>
    </div>)
};

export default editeUserForm;