// import { Card } from "./components/Card/Card";
// import { courses } from "./data/data";
import { NavLink, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  return (
    <div className="App">
      {/* <Card courses={courses}></Card> */}
      {/* <Counter></Counter> */}

      <nav>
        <NavLink to="/users">Users</NavLink>
      </nav>

      <Routes>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="/users/:id" element={<UserDetails></UserDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
