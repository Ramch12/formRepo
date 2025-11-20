'use client'
import React from "react";

const Select = ({ options = [], className = "", formik = {}, name, placeHolder = "" }) => {
  const { handleChange = () => { }, values = {}, errors = {}, touched = {} } = formik;

  // const handleChange = (e) => {
  //   console.log("country Value", e.target.value);
  //   console.log("country Value----", e);
  // };

  return (
    <>
      <select
        name={name}
        id="lang"
        className={`border border-solid px-4 py-2 rounded-md focus:outline-white focus:outline-2 ${className}`}
        onChange={handleChange}
        value={values[name]}
      >
        <option value="" defaultValue={""} selected disabled hidden>{placeHolder}</option>
        {options.map((opt, index) => {
          return (
            <option value={opt.value} className="text-black hover:text-white" key={index}>
              {opt.title}
            </option>
          );
        })}
      </select>
      {touched[name] && errors[name] && (<p className="text-red-400">{errors[name]}</p>)}
    </>
  );
};

export default Select;
