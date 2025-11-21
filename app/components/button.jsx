const Button = ({ btnTxt = "Submit", className = "", icon = "" }) => {
  return (
    <button
      type="submit"
      className={`flex items-center justify-center cursor-pointer gap-2 border border-white text-white rounded-md bg-red-500 text-[18px] px-4 py-2 ${className}`}
    >
      {btnTxt}
      {icon && icon}
    </button>
  );
};

export default Button;
