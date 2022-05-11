import React from "react";
import CardContext from "../context/Card-Context";
import { styles } from "../Styles";

const visa = {
  main: {
    border: "2px solid black",
    width: "min(300px, 90%)",
    padding: "20px",
    borderRadius: "10px",
    position: "absolute",
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: "11",
    backgroundColor: "black",
    color: "white",
    boxShadow: "0 30px 60px 0 rgba(90, 116, 148, 0.4)",
  },
};

const VisaCard = () => {
  const ctx = React.useContext(CardContext);
  //console.log(ctx.cardName);
  const activeElement = ctx.focus;

  const cardNumberStyle = {
    border:
      activeElement === "cardnumber"
        ? "2px solid gray"
        : "2px solid transparent",
    padding: "5px",
  };

  const cardNameStyle = {
    border:
      activeElement === "cardname" ? "2px solid gray" : "2px solid transparent",
  };

  const cardExpiresStyle = {
    border:
      activeElement === "cvv" ? "2px solid gray" : "2px solid transparent",
  };

  return (
    <div style={visa.main}>
      <div style={{ ...styles.layout.flex }}>
        <div>Chip</div>
        <div>VISA</div>
      </div>
      <div style={{ padding: "35px 0" }}>
        <h2 style={cardNumberStyle}>
          {ctx.cardNumber ? ctx.cardNumber : "#### #### #### ####"}
        </h2>
      </div>
      <div style={styles.layout.flex}>
        <div
          style={{ ...styles.layout.flexCol, ...cardNameStyle, width: "100%" }}
        >
          <label htmlFor="">Card Holder</label>
          {ctx.cardName ? ctx.cardName.toUpperCase() : "AD SOYAD"}
        </div>
        <div style={cardExpiresStyle}>
          <div style={{ ...styles.layout.flexCol, padding: "3px" }}>
            <label htmlFor="">Expires</label>
            {ctx.expireMonth ? ctx.expireMonth : "MM"}/
            {ctx.expireYear ? ctx.expireYear.substring(2, 4) : "YY"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
