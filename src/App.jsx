import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Blogs />
      <Education />
      <Contact />
    </div>





  );
}

export default App;