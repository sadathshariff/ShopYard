import "./App.css";
import { RouterPath } from "./routes/RouterPath";
import { Navbar, Footer } from "./components/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Navbar />
      <RouterPath />
      <Footer />
    </div>
  );
}

export default App;
