import React from "react";
import styled from "styled-components";

const DropDown = ({ label, options, onChange }) => {
  return (
    <Select onChange={onChange} defaultValue={label}>
      <option value={label} disabled hidden>
        {label}
      </option>
      >
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.value}
        </option>
      ))}
    </Select>
  );
};

export default DropDown;

const Select = styled.select``;
