import React from "react";

const MySelect = ({value, onChange, options, defaultvalue }) => {
  return (
    <select 
    style={{ margin: "5px 0" }}
    value={value}
    onChange={(e)=>{onChange(e.target.value)}}>
      <option value={''} disabled>{defaultvalue}</option>
      {options && options.map((option) => (
        <option key={option.value} value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};

export default MySelect;
