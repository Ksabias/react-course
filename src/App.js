import { Card } from "./components/Button/Card/Card";
import { data } from "./data/data";

function App() {
  return (
    <div className="App">
      <Card data={data}></Card>
    </div>
  );
}

export default App;
