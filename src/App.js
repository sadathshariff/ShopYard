import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { RouterPath } from "./routes/RouterPath";
import { Navbar } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterPath />
    </div>
  );
}

export default App;
