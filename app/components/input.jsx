import { useState } from "react";
const Input = ({
  className = "",
  placeholder = "",
  label = "",
  isRequired = true,
  ...rest
}) => {
  const [search, setSearch] = useState();
  return (
    <>
      <div className={`h-auto w-[500px] rounded-md ${className}`}>
        {isRequired && (
          <div className="my-2">
            {label && (
              <label htmlFor="" className="font-semibold">
                {label}
              </label>
            )}
            <span>*</span>
          </div>
        )}
        <input
          {...rest}
          type="text"
          className="w-full h-10 focus:outline-solid focus:outline-3 focus:outline-white rounded-md border border-black p-2"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
