import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import Contact from "./components/contact";


export default function App() {
  return (
    
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
  {/* ... */}

        
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
   
  );
}
