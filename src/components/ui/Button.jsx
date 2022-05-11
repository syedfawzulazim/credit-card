import React from "react";

const Button = (props) => {
  const buttonStyle = {
    ...props.style,
  };
  return <button style={buttonStyle}>{props.children}</button>;
};

export default Button;
