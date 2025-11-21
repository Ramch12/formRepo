"use client"
import { useState } from 'react'
import UserTabel from '../components/table/user/index';
import Link from '../components/link';
import { useDebouncedCallback } from 'use-debounce';
import { useModal } from "@/app/context/modalContext";
import UserModal from '../modal/userModal';
import { useUserAction } from '../hooks/user'


const userList = () => {
    const [search, setSearch] = useState("");
    const { openModal, closeModal } = useModal();
    const { handleDeleteUser, handleEditeUser, reloadTrigger } = useUserAction()

    const debounced = useDebouncedCallback(
        (value) => {
            setSearch(value);
        },
        1000
    );

    const handleChange = (e) => {
        debounced(e.target.value)
    };


    return <>
        <div className="w-full h-auto bg-[#eeb0af]">
            <div className="px-10">
                <div className="w-full h-20 border border-solid border-black rounded-2xl text-2xl font-bold flex justify-center items-center">
                    <p className="text-center text-2xl">Registered User List</p>
                </div>
                <div className='w-full h-20 border rounded-2xl border-black mt-2 flex justify-end items-center'>
                    <div className='mr-10'>
                        <label htmlFor="search_user" className='mr-2 text-xl font-semibold'>Search User</label>
                        <input type="text" id="search_user" className=' w-[400] rounded-md p-2 text-xl focus:outline-4 focus:outline-[#ebbebe] border border-solid border-black' placeholder='Search for User' onChange={(e) => { handleChange(e) }} />
                    </div>
                </div>
                <div className="w-full border-black mt-4">
                    < UserTabel search={search} onDelete={handleDeleteUser} onEdit={handleEditeUser} reloadTrigger={reloadTrigger} />
                </div>
                <div className='mt-2'>
                    <div>
                        <div className="flex justify-end">
                            <Link btnTxt="create New User" path="/form" className=" bg-[#f36f47] rounded-md border border-black" />
                        </div>
                    </div>
                    <div className='flex justify-end my-2'>
                        <button className='p-2 bg-amber-100 rounded-xl border border-black font-semibold cursor-pointer' onClick={() => openModal(<UserModal />)
                        }>Open Modal</button>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default userList;