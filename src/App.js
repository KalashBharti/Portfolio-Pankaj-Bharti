import Navbar from "./Components/Navbar"
import './App.css';
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContackUs from "./Components/ContactUs";

import AboutUs from "./Components/AboutUs";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/Portfolio-Pankaj-Bharti" element={
            <Home />
          } />
          <Route exact path="/Portfolio-Pankaj-Bharti/aboutUs" element={
            <AboutUs />
          } />
          <Route exact path="/Portfolio-Pankaj-Bharti/contactUs" element={
            <ContackUs />
          } />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
