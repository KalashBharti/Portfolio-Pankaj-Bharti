import Navbar from "./Components/Navbar"
import './App.css';
import HomeWal from "./Components/HomeWal";
import Skills from "./Components/Skills";
import Platform from "./Components/Platform";

function App() {
  return (
    <div className="App">
     <Navbar/>
    <HomeWal/>
    <Skills/>
    {/* <Platform/> */}
    </div>
  );
}

export default App;
