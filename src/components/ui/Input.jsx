import React from "react";

const Input = (props) => {
  const { onChange, onFocus, focused } = props;
  const { name } = props.input;

  const active = focused === name;

  const InputStyle = {
    fontSize: "20px",
    padding: "5px",
    border: active ? "1px solid #7ec5db" : "1px solid #c7dfe6",
    borderRadius: "5px",
    ...props.style,
  };

  const handleOnChange = (event) => {
    onChange(event.target.value);
  };

  const handleOnFocus = (event) => {
    onFocus(event.target.name);
    // console.log(event.target.name);
  };
  const handleOnBlur = (event) => {
    onFocus("");
  };

  return (
    <div style={{ display: "inline" }}>
      <label style={{ fontSize: "10px" }}>{props.label}</label>
      <input
        style={InputStyle}
        {...props.input}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      ></input>
    </div>
  );
};

export default Input;
