import { Card } from "./components/Card/Card";
import { courses } from "./data/data";

function App() {
  return (
    <div className="App">
      <Card courses={courses}></Card>
    </div>
  );
}

export default App;
