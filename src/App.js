import "./App.css";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Intro />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
}

export default App;
