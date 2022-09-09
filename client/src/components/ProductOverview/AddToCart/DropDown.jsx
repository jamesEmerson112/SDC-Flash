import React from "react";
import styled from "styled-components";

const DropDown = ({ label, options, onChange }) => {
  return (
    <Select onChange={onChange} defaultValue={label}>
      <option value={label} hidden>
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

const Select = styled.select`
  borer-raius: 10px;
  margin-bottom: 10px;
  padding: 5px 0px;
  &:hover {
    cursor: pointer;
  }
`;
