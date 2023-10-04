import Navbar from "./Components/Navbar"
import './App.css';
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContackUs from "./Components/ContactUs";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <Home />
          } />
          <Route exact path="/contactUs" element={
            <ContackUs />
          } />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
