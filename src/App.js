import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./input.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CardView from "./components/Todo/CardView";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/card" element={<CardView/>}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
