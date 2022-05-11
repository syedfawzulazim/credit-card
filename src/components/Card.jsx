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
  2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
];

const cardStyle = {
  border: "1px solid red",
  width: "min(400px, 99%)",

  padding: "20px",
  height: "30rem",
  backgroundColor: "white",
  position: "absolute",
  top: "4rem",
  left: "0",
  right: "0",
  marginLeft: "auto",
  marginRight: "auto",
  zIndex: "1",
};

const Card = () => {
  const ctx = React.useContext(CardContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(ctx.cardName);
    console.log("123");
  };
  return (
    <div style={cardStyle}>
      <div style={{ marginBottom: "70px" }}>1</div>
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
          />
          <Input
            label="Card Name"
            style={{
              width: "100%",
              marginBottom: "20px",
            }}
            input={{
              name: "cardnumber",
              type: "text",
              value: ctx.cardName,
            }}
            onChange={ctx.setCardName}
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
              />
              <Select label="Year" options={Years} width="48%" height="37px" />
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
                type: "text",
              }}
            ></Input>
          </div>
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "#0055d4",
              color: "white",
              width: "100%",
              padding: "10px",
              margin: "20px 0",
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
