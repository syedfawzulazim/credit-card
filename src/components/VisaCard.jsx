import React from "react";
import CardContext from "../context/Card-Context";
import { styles } from "../Styles";
import image from "../Styles/Chip.png";

const VisaCard = () => {
  const ctx = React.useContext(CardContext);
  //console.log(ctx.cardName);
  const activeElement = ctx.focus;

  const visa = {
    flipCard: {
      backgroundColor: "transparent",
      width: "min(300px, 90%)",
      height: "200px",
      borderRadius: "10px",
      position: "absolute",
      left: "0",
      right: "0",
      marginLeft: "auto",
      marginRight: "auto",
      zIndex: "11",
      color: "white",
      perspective: "1000px",
    },
    flipCardInner: {
      position: "relative",
      width: " 100%",
      height: "100%",
      textAlign: "center",
      transition: "transform 0.8s",
      transformStyle: "preserve-3d",
      boxShadow: "0 30px 60px 0 rgba(90, 116, 148, 0.4)",
      transform: `${activeElement === "cvv" ? "rotateY(180deg)" : ""}`,
    },
    main: {
      width: " 100%",
      height: "100%",
      borderRadius: "10px",
      backgroundColor: "#9BA7B2",
      background: "linear-gradient(-125deg, #1D3349, #06121E 55%)",
      backfaceVisibility: "hidden",
      position: "absolute",
    },
    back: {
      width: " 100%",
      height: "100%",
      borderRadius: "10px",
      color: "white",
      position: "absolute",
      backgroundColor: "#9BA7B2",
      background: "linear-gradient(-125deg, #1D3349, #06121E 55%)",
      backfaceVisibility: "hidden",
      transform: "rotateY(180deg)",
    },
  };

  let array = [];
  for (let i = 0; i < 16; i++) {
    let x = ctx.cardNumber[i] ? ctx.cardNumber[i] : "#";
    array.push(x);
  }
  const cardNumberStyle = {
    border:
      activeElement === "cardnumber"
        ? "2px solid gray"
        : "2px solid transparent",
    padding: "5px",
    fontSize: "1.2em",
  };

  const cardNameStyle = {
    border:
      activeElement === "cardname" ? "2px solid gray" : "2px solid transparent",
    padding: "5px",
    marginLeft: "10px",
  };

  const cardExpiresStyle = {
    border:
      activeElement === "cvv" ? "2px solid gray" : "2px solid transparent",
  };

  return (
    <div style={visa.flipCard}>
      <div style={visa.flipCardInner}>
        <div style={visa.main}>
          <div style={{ ...styles.layout.flex, padding: "20px" }}>
            <div>
              <img
                style={{ borderRadius: "7px" }}
                src={image}
                height={30}
                width={40}
                alt="chip"
              />
            </div>
            <div>VISA</div>
          </div>
          <div style={{ padding: "5px 0 15px", margin: "0 20px" }}>
            <h2 style={cardNumberStyle}>
              {array.map((char, index) => {
                return (index + 1) % 4 === 0 ? `${char} ` : `${char}`;
              })}
            </h2>
          </div>
          <div style={styles.layout.flex}>
            <div
              style={{
                ...styles.layout.flexCol,
                ...cardNameStyle,
                width: "80%",
                textAlign: "left",
                marginTop: "15px",
              }}
            >
              <label
                htmlFor=""
                style={{ fontSize: "12px", color: "gray", marginBottom: "3px" }}
              >
                Card Holder
              </label>
              <p>
                {ctx.cardName ? ctx.cardName.toUpperCase() : "Syed Fawzul Azim"}
              </p>
            </div>
            <div style={cardExpiresStyle}>
              <div
                style={{
                  ...styles.layout.flexCol,
                  padding: "3px",
                  marginRight: "10px",
                  marginTop: "15px",
                  marginBottom: "3px",
                }}
              >
                <label
                  htmlFor=""
                  style={{
                    fontSize: "12px",
                    color: "gray",
                  }}
                >
                  Expires
                </label>
                <p>
                  {ctx.expireMonth ? ctx.expireMonth : "MM"}/
                  {ctx.expireYear ? ctx.expireYear.substring(2, 4) : "YY"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={visa.back}>
          <div>
            <div
              style={{
                backgroundColor: "black",
                padding: "15px",
                margin: "30px 0 10px",
              }}
            ></div>
            <div>
              <p
                style={{
                  textAlign: "right",
                  marginRight: "20px",
                  fontSize: "12px",
                }}
              >
                CVV
              </p>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "7px",
                  margin: "0 15px 30px",
                  color: "black",
                  textAlign: "right",
                  height: "30px",
                }}
              >
                <p style={{}}>{ctx.cvv}</p>
              </div>
              <div style={{ textAlign: "right", margin: "20px" }}>DISCOVER</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
