import React from "react";
import CardContext from "../context/Card-Context";
import { Button, Input, Select } from "./ui";
import { styles } from "../Styles";

const Months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const Years = [
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
];

const cardStyle = {
  width: "min(400px, 99%)",
  borderRadius: "5px",
  padding: "20px",
  height: "25rem",
  backgroundColor: "white",
  position: "absolute",
  top: "10rem",
  left: "0",
  right: "0",
  marginLeft: "auto",
  marginRight: "auto",
  zIndex: "1",
  boxShadow: "0 30px 60px 0 rgba(90, 116, 148, 0.4)",
};

const Card = () => {
  const ctx = React.useContext(CardContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("---Submit---");
    console.log(ctx.cardName);
    console.log(ctx.cardNumber);
    console.log(ctx.expireMonth);
    console.log(ctx.expireYear);
  };
  return (
    <div style={cardStyle}>
      <div style={{ marginBottom: "90px" }}></div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <Input
            label="Card Number"
            style={{
              width: "100%",
              marginBottom: "20px",
            }}
            input={{
              name: "cardnumber",
              type: "number",
              value: ctx.cardNumber,
            }}
            onChange={ctx.setCardNumber}
            onFocus={ctx.setFocus}
            focused={ctx.focus}
          />
          <Input
            label="Card Name"
            style={{
              width: "100%",
              marginBottom: "20px",
            }}
            input={{
              name: "cardname",
              type: "text",
              value: ctx.cardName,
            }}
            onChange={ctx.setCardName}
            onFocus={ctx.setFocus}
            focused={ctx.focus}
          />
        </div>
        <div
          style={{
            ...styles.layout.flex,
            justifyContent: "space-between",
          }}
        >
          <div style={{ flexBasis: "66%" }}>
            <label htmlFor="Expiration Date">Expiration Date</label>
            <div style={styles.layout.flex}>
              <Select
                label="Month"
                options={Months}
                width="48%"
                height="37px"
                value={ctx.expireMonth}
                onChange={ctx.setExpireMonth}
              />
              <Select
                label="Year"
                options={Years}
                width="48%"
                height="37px"
                value={ctx.expireYear}
                onChange={ctx.setExpireYear}
              />
            </div>
          </div>
          <div style={{ flexBasis: "33%", marginLeft: "20px" }}>
            <Input
              label="CVV"
              style={{
                width: "100%",
                display: "block",
              }}
              input={{
                name: "cvv",
                type: "number",
                value: ctx.cvv,
              }}
              onChange={ctx.setCvv}
              onFocus={ctx.setFocus}
              focused={ctx.focus}
            ></Input>
          </div>
        </div>
        <div>
          <Button
            style={{
              width: "100%",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Card;
