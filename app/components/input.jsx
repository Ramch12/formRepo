import { useState } from "react";
const Input = ({
  className = "",
  placeholder = "",
  label = "",
  isRequired = false,
  value,
  name,
  inputClassName,
  ...rest
}) => {
  console.log("inputClassName", inputClassName)
  const [search, setSearch] = useState();
  const { handleChange, handleBlur, values = {}, errors, touched = {} } = rest;
  console.log("Errors", errors);
  console.log("formik Values===>", values);
  return (
    <>
      <div className={`w-full h-auto rounded-md ${className}`}>
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
          className={`w-full full h-10 focus:outline-solid focus:outline-4 focus:outline-[#a7f1c6] rounded-md p-2 ${inputClassName}`}
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
