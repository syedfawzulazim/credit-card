import { styles } from "../Styles";

const VisaCard = () => {
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
          Your Name
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
