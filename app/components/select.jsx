import React from "react";

const Select = ({ options = [] }) => {
  return (
    <>
      <select
        name="chooseLang"
        id="lang"
        className="border border-solid border-white text-white px-4 py-2 rounded-md focus:outline-white focus:outline-2"
      >
        {options.map((opt) => {
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
