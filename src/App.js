import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import { About } from "./Components/About";
import { Register } from "./Components/Register";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
