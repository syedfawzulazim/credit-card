import React from "react";

let defaultValues = {
  cardNumber: "",
  cardName: "",
  expireMonth: "",
  expireYear: "",
  cvv: "",
  focus: "",
};

const CardContext = React.createContext({
  ...defaultValues,
  setCardNumber: (number) => {},
  setCardName: (name) => {},
  setExpireMonth: (month) => {},
  setExpireYear: (year) => {},
  setCvv: (cvv) => {},
  setFocus: (element) => {},
});

export default CardContext;
