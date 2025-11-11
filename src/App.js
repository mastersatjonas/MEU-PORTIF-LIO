import './App.css';           // Variáveis e estilos globais
// Componentes importam seus próprios CSS
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Componentes
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import ContactQuick from './components/Contact/ContactQuick';
import Projects from './components/Projects/Projects';
import ContactForm from './components/Contact/ContactForm';
import ContactOptions from './components/Contact/ContactOptions';
import Footer from './components/Footer/Footer';
import BackToTop from './components/common/BackToTop';
import DarkModeToggle from './components/common/DarkModeToggle';

// Estilos
import './App.css';

function App() {
  useEffect(() => {
    // Inicializa AOS
    AOS.init({
      once: true,
      duration: 1000,
      offset: 100
    });

    // Refresh AOS ao carregar
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <BackToTop />
      <DarkModeToggle />
      
      <Header />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <ContactQuick />
        <Projects />
        <ContactForm />
        <ContactOptions />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;