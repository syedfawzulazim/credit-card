import { useState } from "react";
import CardContext from "./Card-Context";
import useInput from "../hooks/use-Input";

const CardProvider = (props) => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireMonth, setExpireMonth] = useState("");
  const [expireYear, setExpireYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [focus, setFocus] = useState("");

  const nameChangeHandler = (name) => {
    setCardName(name);
  };

  const numberChangeHandler = (number) => {
    setCardNumber(number);
  };
  const monthChangeHandler = (month) => {
    setExpireMonth(month);
  };
  const yearChangeHandler = (year) => {
    setExpireYear(year);
  };
  const cvvChangeHandler = (cvv) => {
    setCvv(cvv);
  };

  const focusHandler = (element) => {
    setFocus(element);
  };

  const cardContext = {
    cardNumber,
    cardName,
    expireMonth,
    expireYear,
    cvv,
    focus,
    setCardName: nameChangeHandler,
    setCardNumber: numberChangeHandler,
    setExpireMonth: monthChangeHandler,
    setExpireYear: yearChangeHandler,
    setCvv: cvvChangeHandler,
    setFocus: focusHandler,
  };

  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardProvider;
