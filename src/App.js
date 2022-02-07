import "./App.css";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div>
        <AboutMe></AboutMe>
      </div>
    </div>
  );
}

export default App;
