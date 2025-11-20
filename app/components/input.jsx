import { useState } from "react";
const Input = ({
  className = "",
  placeholder = "",
  label = "",
  isRequired = false,
  value,
  name,
  ...rest
}) => {
  const [search, setSearch] = useState();
  const { handleChange, handleBlur, values = {}, errors, touched = {} } = rest;
  return (
    <>
      <div className={`h-auto w-[500px] rounded-md ${className}`}>
        {isRequired && (
          <div>
            {label && (
              <label htmlFor="" className="font-semibold">
                {label}
              </label>
            )}
            <span>*</span>
          </div>
        )}
        <input
          value={values[name]}
          type="text"
          className="w-full h-10 focus:outline-solid focus:outline-3 focus:outline-white rounded-md border border-white p-2"
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched[name] && errors[name] && <p className="text-red-500">{errors[name]}</p>}
      </div>
    </>
  );
};

export default Input;
