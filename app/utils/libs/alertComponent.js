import { toast } from "react-toastify";
import { TOAST_TYPE_CONSTANT } from '../constants/index'

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
