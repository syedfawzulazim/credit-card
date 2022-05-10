import React from "react";

const Select = (props) => {
  const selectStyles = {
    width: `${props.width}`,
    height: `${props.height}`,
  };

  return (
    <select style={selectStyles}>
      <option>{props.label}</option>
      {props.options.map((item) => (
        <option key={`item-${item}`} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
