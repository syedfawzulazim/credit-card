import { VisaCard, Card } from "./components";
import { styles } from "./Styles";

function App() {
  return (
    <div className="App" style={styles.app}>
      <div style={styles.main}>
        <VisaCard />
        <Card />
      </div>
    </div>
  );
}

export default App;
