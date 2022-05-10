import { Input, Select } from "./ui";
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

const Card = () => {
  const cardStyle = {
    border: "1px solid red",
    width: "min(400px, 99%)",

    padding: "20px",
    height: "30rem",
    backgroundColor: "gray",
    position: "absolute",
    top: "4rem",
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: "1",
  };
  return (
    <div style={cardStyle}>
      <div style={{ marginBottom: "70px" }}>1</div>
      <div>
        <Input label="Card Number" width="100%" />
        <Input label="Card Name" width="100%" />
      </div>
      <div
        style={{
          ...styles.layout.flex,
        }}
      >
        <div style={{ flexBasis: "66%" }}>
          <label htmlFor="Expiration Date">Expiration Date</label>
          <div style={styles.layout.flex}>
            <Select label="Month" options={Months} width="50%" height="40px" />
            <Select label="Year" options={Years} width="50%" height="40px" />
          </div>
        </div>
        <div style={{ flexBasis: "33%", justifySelf: "end" }}>
          <Input label="CVV" width="90%" display="block"></Input>
        </div>
      </div>
    </div>
  );
};

export default Card;
