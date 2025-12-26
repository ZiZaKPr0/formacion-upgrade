import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-brand-500 rounded-md flex items-center justify-center text-white font-bold mr-2">
                UP
              </div>
              <span className="font-bold text-xl text-slate-900">
                Formación<span className="text-brand-500">Upgrade</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              La academia online líder en formación tecnológica. Impulsamos tu carrera con la metodología más innovadora del mercado.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#cursos" className="hover:text-brand-600 transition-colors">Cursos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Compañía</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#nosotros" className="hover:text-brand-600 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-brand-600 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© 2025 Formación Upgrade Inc. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#aviso-legal" className="hover:text-brand-600 transition-colors underline">
                Aviso Legal
              </a>
              <a href="#privacidad" className="hover:text-brand-600 transition-colors underline">
                Privacidad
              </a>
              <a href="#cookies" className="hover:text-brand-600 transition-colors underline">
                Cookies
              </a>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span>Hecho con</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>para el futuro.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};