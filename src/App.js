import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { RouterPath } from "./routes/RouterPath";
import { Navbar, Footer } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterPath />
      <Footer />
    </div>
  );
}

export default App;
