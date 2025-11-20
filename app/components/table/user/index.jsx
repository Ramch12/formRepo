'use client'
import { useMemo, useEffect, useState } from 'react';;
import { api } from '@/app/api';
import { Table } from '../index';
import { alertComponent } from '../../../utils/libs/alertComponent';
import { TOAST_TYPE_CONSTANT } from '../../../utils/constants';
import { DotLoader } from "react-spinners";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";


const userTabel = ({ search }) => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const columns = useMemo(() => {
        return [
            {
                accessorKey: "firstName", header: "First Name", cell: ({ getValue }) => (
                    <span className="text-black text-center block">{getValue()}</span>
                )
            },
            {
                accessorKey: "lastName", header: "Last Name", cell: ({ getValue }) => (
                    <span className="text-black text-center block">{getValue()}</span>
                )
            },
            {
                accessorKey: "email", header: "Email", cell: ({ getValue }) => (
                    <span className="text-black text-center block">{getValue()}</span>
                )
            },
            {
                accessorKey: "age", header: "Age", cell: ({ getValue }) => (
                    <span className="text-black text-center block">{getValue()}</span>
                )
            },
            {
                accessorKey: "password", header: "Password", cell: ({ getValue }) => (
                    <span className="text-black text-center block">{getValue()}</span>
                )
            },
            {
                accessorKey: "aboutYourSelf", header: "About Yourself", cell: ({ getValue }) => (
                    <span className="text-black text-center block">{getValue()}</span>
                )
            },
            {
                accessorKey: "country", header: "Coutry", cell: ({ getValue }) => (
                    <span className="text-black text-center block">{getValue()}</span>
                )
            },
            {
                accessorKey: "gender", header: "Gender", cell: ({ getValue }) => (
                    <span className="text-black text-center block">{getValue()}</span>
                )
            },
            {
                accessorKey: "termsAndCondition", header: "Accepted Terms and condition", cell: ({ getValue }) => (
                    <span>{getValue() ? <AiOutlineCheckCircle size={30} style={{ margin: "0px auto" }} color='green' /> : <AiOutlineCloseCircle size={30} style={{ margin: "0px auto", color: "red" }} />}</span>
                )
            },
            {
                accessorKey: "hobbies", header: "Hobbies", cell: ({ getValue }) => (
                    (<div className='flex flex-col gap-y-2'>
                        {(getValue() || []).map((item, index) => {
                            return <p key={index} className='border border-solid border-black rounded-md bg-[#ecbc62] p-1 font-semibold'>{item}</p>
                        })}
                    </div>)

                )
            },
            {
                accessorKey: "dateOfBirth", header: "Date Of Birth", cell: ({ getValue }) => (
                    <span className="text-black text-center block">{new Date(getValue()).toDateString()}</span>
                )
            }
        ]
    }, []);

    const data = useMemo(() => userList, [userList]);

    useEffect(() => {
        api.get(`/api/v1/users?email=${search}`).then(({ data }) => {
            console.log("data====>", data);
            setUserList(data);
        }).catch(error => {
            setUserList([]);
            alertComponent(TOAST_TYPE_CONSTANT.ERROR, "No Users found")
        }).finally(() => {
            setLoading(false)
        })
    }, [search]);

    return <>{
        loading ? (<div className='w-full flex justify-center items-center h-[300px]'><DotLoader
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        /></div>) : < Table columns={columns} data={data} />
    }</>
}

export default userTabel