import { toast } from "react-toastify";
import { confirmAlert } from 'react-confirm-alert'

import { TOAST_TYPE_CONSTANT } from '../constants/index';

export const alertComponent = (type = TOAST_TYPE_CONSTANT.SUCCESS, message = "success", toastId = Date.now()) => {
    switch (type) {
        case TOAST_TYPE_CONSTANT.SUCCESS:
            toast.success(message, { autoClose: 5000, toastId });
            break;
        case TOAST_TYPE_CONSTANT.ERROR:
            toast.error(message, { autoClose: 5000, toastId });
            break;
        case TOAST_TYPE_CONSTANT.WARNING:
            toast.warning(message, { autoClose: 5000, toastId });
        default:
            toast.info(message, { autoClose: 5000, toastId });
    }
};

export const handleAction = ({ userId, onDelete }) => {
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className="p-6 bg-white rounded-xl shadow-lg border w-[350px]">
                    <h1 className="text-xl font-bold text-red-600">Delete User</h1>
                    <p className="mt-3 text-gray-700">Are you sure to delete the user?</p>

                    <div className="flex justify-between mt-5">
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            onClick={() => {
                                onDelete(userId);
                                onClose();
                            }}>
                            Yes
                        </button>

                        <button
                            className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                            onClick={onClose}>
                            No
                        </button>
                    </div>
                </div>
            );
        },
    });

}
