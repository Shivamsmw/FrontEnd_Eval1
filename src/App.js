import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Rejistration_1 from "./Components/Rejistration_1";
import { Link } from "react-router-dom";
import Users from "./Components/Users";
import Rejistration_2 from "./Components/Rejistration_2";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/registration/one" element={<Rejistration_1 />} />
        <Route path="/registration/two" element={<Rejistration_2 />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default App;
