import UserTabel from '../components/table/user/index';
import Link from '../components/link';


const userList = () => {
    return <>
        <div className="w-full h-auto bg-[#eeb0af]">
            <div className="px-10 pt-2">
                <div className="w-full h-20 border border-solid border-black rounded-2xl text-2xl font-bold flex justify-center items-center">
                    <p className="text-center text-2xl">Registered User List</p>
                </div>
                <div className="w-full h-screen border-black mt-4">
                    < UserTabel />
                </div>
                <div>
                    <div className="flex justify-end">
                        <Link btnTxt="create New User" path="/form" className=" bg-[#f36f47] rounded-md border border-black" />
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default userList