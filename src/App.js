import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hello from "./pages/hello";
import { ButtonPage } from "./pages/button";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Hello/>}/>
      <Route exact path="/button" element={<ButtonPage/>}/>
    </Routes>
  );
}

export default App;
