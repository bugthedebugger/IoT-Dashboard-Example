import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hello from "./pages/hello";
import { ButtonPage } from "./pages/button";
import { SensorsPage } from "./pages/sensors";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Hello/>}/>
      <Route exact path="/button" element={<ButtonPage/>}/>
      <Route exact path="/sensors" element={<SensorsPage/>}/>
    </Routes>
  );
}

export default App;
