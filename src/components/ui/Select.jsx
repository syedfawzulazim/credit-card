import React from "react";

const Select = (props) => {
  const selectStyles = {
    width: `${props.width}`,
    height: `${props.height}`,
    padding: "5px",
    border: "1px solid #e0eef2",
    borderRadius: "5px",
  };

  const optionStyles = {
    backgroundColor: "#d7e1e3",
    padding: "0px",
    margin: "0px",
    border: "0",
    pointer: "cursor",
  };

  const { onChange, value } = props;
  const handleOnChange = (event) => {
    onChange(event.target.value);
    console.log(event.target.value);
  };

  return (
    <select style={selectStyles} onChange={handleOnChange} value={value}>
      <option style={{ ...optionStyles, color: "gray" }}>{props.label}</option>
      {props.options.map((item, index) => (
        <option style={optionStyles} key={`${index}`} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
