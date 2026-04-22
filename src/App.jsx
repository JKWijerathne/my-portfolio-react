import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <section id="projects" style={{height: '100vh'}}>Projects Section</section>
      <Blogs />
      <Education />
      <Contact />
    </div>





  );
}

export default App;