import React from "react";

const Select = ({ options = [], className = "" }) => {
  return (
    <>
      <select
        name="chooseLang"
        id="lang"
        className={`border border-solid px-4 py-2 rounded-md focus:outline-white focus:outline-2 ${className}`}
      >
        {options.map((opt, index) => {
          return (
            <option value={opt.value} className="text-black hover:text-white" key={index}>
              {opt.title}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
