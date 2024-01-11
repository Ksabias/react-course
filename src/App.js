import { createContext } from "react";
import Home from "./components/Home/Home";

export const UserInfoContext = createContext(null);

function App() {
  const userInfo = {
    name: "Username",
    permissions: ["admin", "user", "other"],
  };

  return (
    <div className="App">
      <UserInfoContext.Provider value={userInfo}>
        <Home></Home>
      </UserInfoContext.Provider>

      {/* <Card courses={courses}></Card> */}

      {/* <Counter></Counter> */}

      {/* <nav value={userInfo}>
          <NavLink to="/users">Users</NavLink>
        </nav> */}

      {/* <Routes>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="/users/:id" element={<UserDetails></UserDetails>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
