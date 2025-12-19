import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Courses } from './components/Courses';
import { ContactForm } from './components/ContactForm';
import { Pruebas } from './components/Pruebas';
import { PruebasHero } from './components/PruebasHero';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Courses />
        <Pruebas />
        <PruebasHero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;