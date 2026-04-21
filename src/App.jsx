import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <section id="projects" style={{height: '100vh'}}>Projects Section</section>
      <section id="blogs" style={{height: '100vh'}}>Blogs Section</section>
      <section id="education" style={{height: '100vh'}}>Education Section</section>
      <section id="contact" style={{height: '100vh'}}>Contact Section</section>
    </div>


  );
}

export default App;