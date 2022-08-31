import React from "react";

const DropDown = ({ label, options, onChange }) => {
  console.log(options);
  return (
    <select onChange={onChange} defaultValue={label}>
      <option value={label} disabled>
        {label}
      </option>
      >
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
