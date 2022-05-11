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
  },
};

const VisaCard = () => {
  const ctx = React.useContext(CardContext);
  //console.log(ctx.cardName);

  return (
    <div style={visa.main}>
      <div style={{ ...styles.layout.flex }}>
        <div>Chip</div>
        <div>VISA</div>
      </div>
      <div>
        <h2>#### #### #### ####</h2>
      </div>
      <div style={styles.layout.flex}>
        <div style={{ ...styles.layout.flexCol }}>
          <label htmlFor="">Card Holder</label>
          {ctx.cardName ? ctx.cardName.toUpperCase() : "AD SOYAD"}
        </div>
        <div style={{ ...styles.layout.flexCol }}>
          <label htmlFor="">Expires</label>
          MM/YY
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
