import "./App.css";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <SideBar></SideBar>
      <div>
        <AboutMe></AboutMe>
      </div>
    </div>
  );
}

export default App;
