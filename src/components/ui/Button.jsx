import React from "react";

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: "#0055d4",
    color: "white",
    boxShadow: "0 30px 60px 0 rgba(90, 116, 148, 0.3)",
    border: "none",
    borderRadius: "5px",
    padding: "12px",
    margin: "20px 0",
    ...props.style,
  };
  return <button style={buttonStyle}>{props.children}</button>;
};

export default Button;
