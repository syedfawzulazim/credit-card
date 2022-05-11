import React from "react";

const Input = (props) => {
  const InputStyle = {
    fontSize: "20px",
    padding: "5px",
    ...props.style,
  };

  const { onChange } = props;

  const handleOnChange = (event) => {
    onChange(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div style={{ display: "inline" }}>
      <label>{props.label}</label>
      <input
        style={InputStyle}
        {...props.input}
        onChange={handleOnChange}
      ></input>
    </div>
  );
};

export default Input;
