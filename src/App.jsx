import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <section id="projects" style={{height: '100vh'}}>Projects Section</section>
      <Blogs />
      <Education />
      <section id="contact" style={{height: '100vh'}}>Contact Section</section>
    </div>




  );
}

export default App;