import { useState } from "react";
const Input = ({
  className = "",
  placeholder = "",
  label = "",
  isRequired = false,
  name,
  inputClassName,
  formik = {},
  ...rest
}) => {
  const { handleChange = () => { }, handleBlur = () => { }, values, errors, touched } = formik;
  return (
    <>
      <div className={`w-full h-auto rounded-md ${className}`}>
        {isRequired && (
          <div>
            {label && (
              <label htmlFor={name} className="font-semibold">
                {label}
              </label>
            )}
            <span>*</span>
          </div>
        )}
        <input
          id={name}
          name={name}
          type="text"
          className={`w-full full h-10 focus:outline-solid focus:outline-4 focus:outline-[#a7f1c6] rounded-md p-2 ${inputClassName}`}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
        />
        {touched[name] && errors[name] && (
          <p className="text-red-500">{errors[name]}</p>
        )}
      </div>
    </>
  );
};

export default Input;
