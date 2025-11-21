import { ClipLoader } from "react-spinners";   // <-- valid loader

const Button = ({ btnTxt = "Submit", className = "", icon = "", loading }) => {
  return (
    <button
      type="submit"
      className={`flex items-center justify-center cursor-pointer gap-2 border border-white text-white rounded-md bg-red-500 text-[18px] px-4 py-2 ${className}`}
      disabled={loading}
    >
      {loading ? <ClipLoader size={40} color="#fff" /> : btnTxt}
      {icon && icon}
    </button>
  );
};

export default Button;
