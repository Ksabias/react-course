import Users from "./components/Users/Users";
import { NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/users">Users</NavLink>
      </nav>

      <Routes>
        <Route path="/users" element={<Users></Users>}></Route>
      </Routes>
    </div>
  );
}

export default App;
