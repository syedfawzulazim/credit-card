import React from "react";

const Input = (props) => {
  const InputStyle = {
    display: `${props.display}`,
    marginBottom: "20px",
    fontSize: "20px",
    width: `${props.width}`,
    padding: "5px",
  };
  return (
    <div style={{ display: "inline" }}>
      <label>{props.label}</label>
      <input style={InputStyle}></input>
    </div>
  );
};

export default Input;
