import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cursos', href: '#cursos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Solo manejar enlaces hash (enlaces internos)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Calcular posición considerando el header fijo
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // Para enlaces externos, dejar el comportamiento por defecto
  };

  const scrollToTop = () => {
    // Si hay un hash en la URL (páginas legales), redirigir a la página principal
    if (window.location.hash) {
      window.location.hash = '';
      // Pequeño delay para asegurar que el hash se limpie antes del scroll
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={scrollToTop}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToTop();
              }
            }}
          >
            <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-2 group-hover:rotate-12 transition-transform duration-300">
              UP
            </div>
            <span className={`font-bold text-2xl tracking-tight 
              ${isScrolled 
                ? 'text-slate-900' 
                : 'text-white'
                }`}>
              Formación
              <span className="text-brand-500">Upgrade</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-slate-900 hover:text-brand-600' 
                    : 'text-white hover:text-brand-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://moodle.formacionupgrade.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-600 transition-colors duration-300 flex items-center gap-2"
            >
              Aula virtual <ArrowRight size={16} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-200 ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col space-y-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                handleNavClick(e, link.href);
                setIsMobileMenuOpen(false);
              }}
              className="text-lg font-medium text-slate-800 py-2 border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://moodle.formacionupgrade.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-brand-500 text-white py-3 rounded-lg font-bold mt-4 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Aula virtual
          </a>
        </div>
      )}
    </header>
  );
};