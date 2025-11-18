const Button = ({ btnTxt = "Submit", className = "", icon = "" }) => {
  return (
    <>
      <div
        className={`flex justify-between items-center border-white border-solid text-white rounded-md px-4 py-1 bg-red-500 text-[18px] ${className}`}
      >
        <button className="cursor-pointer">{btnTxt}</button>
        {icon && icon}
      </div>
    </>
  );
};

export default Button;
