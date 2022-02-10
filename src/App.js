import "./App.css";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
