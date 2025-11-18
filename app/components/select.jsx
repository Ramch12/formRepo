import React from "react";

const Select = ({ options = [], className = "" }) => {
  console.log("className--->", className);
  return (
    <>
      <select
        name="chooseLang"
        id="lang"
        className={`border border-solid px-4 py-2 rounded-md focus:outline-white focus:outline-2 ${className}`}
      >
        {options.map((opt) => {
          {console.log("Options====>", opt)}
          return (
            <option value={opt.value} className="text-black hover:text-white">
              {opt.title}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
