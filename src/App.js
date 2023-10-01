import Navbar from "./Components/Navbar"
import './App.css';
import HomeWal from "./Components/HomeWal";
import Skills from "./Components/Skills";
import Services from "./Components/Services";


function App() {
  return (
    <div className="App">
     <Navbar/>
    <HomeWal/>
    <Skills/>
    <Services/>
    </div>
  );
}

export default App;
