'use client'
import { useMemo, useEffect, useState } from 'react';;
import { api } from '@/app/api';
import { Table } from '../index';
import { alertComponent } from '../../../utils/libs/alertComponent';
import { TOAST_TYPE_CONSTANT } from '../../../utils/constants';
import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const userTabel = () => {
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






            // {
            //     accessorKey: "status",
            //     header: "Status",
            //     cell: ({ getValue }) => (
            //         <span className="text-green-500">{getValue()}</span>
            //     ),
            // }
        ]
    }, []);

    const data = useMemo(() => userList, [userList]);

    useEffect(() => {
        api.get("/api/v1/users").then(({ data }) => {
            setUserList(data)
        }).catch(error => {
            alertComponent(TOAST_TYPE_CONSTANT.ERROR, error.response.message)
        }).finally(() => {
            setLoading(false)
        })
    }, []);
    console.log("loading===>", loading)

    return <>{
        loading ? (<ClipLoader
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />) : < Table columns={columns} data={data} />
    }</>
}

export default userTabel