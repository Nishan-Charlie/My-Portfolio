
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import {Education} from "./components/Education"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
