import { useState } from "react";
import CardContext from "./Card-Context";
import useInput from "../hooks/use-Input";

const CardProvider = (props) => {
  let array = [];
  for (let i = 0; i < 16; i++) {
    array.push("#");
  }

  const [cardNumber, setCardNumber] = useState(array);
  const [cardName, setCardName] = useState("");
  const [expireMonth, setExpireMonth] = useState("");
  const [expireYear, setExpireYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [focus, setFocus] = useState("");

  const nameChangeHandler = (name) => {
    setCardName(name);
  };

  const numberChangeHandler = (number) => {
    setCardNumber((prevArray) => [number, ...prevArray]);
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
