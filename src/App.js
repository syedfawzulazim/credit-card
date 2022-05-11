import { VisaCard, Card } from "./components";
import CardProvider from "./context/CardProvider";
import { styles } from "./Styles";

function App() {
  return (
    <div className="App" style={styles.app}>
      <div style={styles.main}>
        <CardProvider>
          <VisaCard />
          <Card />
        </CardProvider>
      </div>
    </div>
  );
}

export default App;
