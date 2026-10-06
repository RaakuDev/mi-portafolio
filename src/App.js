import Navbar from './components/organisms/Navbar';
import AboutSection from './components/organisms/AboutSection';
import ContactSection from './components/organisms/ContactSection';
import ProjectsSection from './components/organisms/ProjectsSection';
import NewsSection from './components/organisms/NewsSection';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <main className="container" id='inicio'>
        <h1 className="mt-5">Mi Portafolio</h1>

        <AboutSection />

        <ProjectsSection />

        <NewsSection />

        <ContactSection />
        
      </main>
    </>
  );
}

export default App;