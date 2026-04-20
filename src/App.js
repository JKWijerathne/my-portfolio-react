import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Sections will go here */}
      <section id="home" style={{height: '100vh'}}>Home Section</section>
      <section id="skills" style={{height: '100vh'}}>Skills Section</section>
      <section id="projects" style={{height: '100vh'}}>Projects Section</section>
      <section id="blogs" style={{height: '100vh'}}>Blogs Section</section>
      <section id="education" style={{height: '100vh'}}>Education Section</section>
      <section id="contact" style={{height: '100vh'}}>Contact Section</section>
    </div>
  );
}

export default App;