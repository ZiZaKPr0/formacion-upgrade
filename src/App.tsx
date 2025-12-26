import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Courses } from './components/Courses';
import { ContactForm } from './components/ContactForm';
import { Herramientas } from './components/Herramientas';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { SEO } from './components/SEO';
import { Privacidad } from './components/legal/Privacidad';
import { AvisoLegal } from './components/legal/AvisoLegal';
import { Cookies as CookiesPage } from './components/legal/Cookies';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('');

  useEffect(() => {
    // Lista de páginas legales que requieren routing
    const legalPages = ['privacidad', 'aviso-legal', 'cookies'];
    
    // Detectar cambio en el hash de la URL
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Eliminar el #
      
      // Solo manejar páginas legales, ignorar enlaces internos (#cursos, #contacto, etc.)
      if (legalPages.includes(hash)) {
        setCurrentPage(hash);
        // Scroll al inicio solo para páginas legales
        window.scrollTo(0, 0);
      } else {
        // Si no es una página legal, mantener la página actual (principal)
        setCurrentPage('');
      }
    };

    // Verificar hash inicial
    handleHashChange();

    // Escuchar cambios en el hash
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Renderizar páginas legales si hay hash
  if (currentPage === 'privacidad') {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
        <SEO />
        <Header />
        <Privacidad />
        <Footer />
        <CookieBanner />
      </div>
    );
  }

  if (currentPage === 'aviso-legal') {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
        <SEO />
        <Header />
        <AvisoLegal />
        <Footer />
        <CookieBanner />
      </div>
    );
  }

  if (currentPage === 'cookies') {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
        <SEO />
        <Header />
        <CookiesPage />
        <Footer />
        <CookieBanner />
      </div>
    );
  }

  // Página principal
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <SEO />
      <Header />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Herramientas />
        <ContactForm />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default App;