import "./App.css";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div>
        <Intro></Intro>
      </div>
      <div>
        <Skills></Skills>
      </div>
      <div></div>
    </div>
  );
}

export default App;
