import { Card } from "./components/Card/Card";
import { data } from "./data/data";

function App() {
  return (
    <div className="App">
      <Card data={data}></Card>
    </div>
  );
}

export default App;
