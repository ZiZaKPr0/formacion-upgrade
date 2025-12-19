import React from 'react';
import { Play, Star, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-100/50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Nueva generación educativa
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              Eleva tu carrera al <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-400">siguiente nivel</span>.
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Especialistas en formación online para personas empreadas y desempleadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-brand-500/30 hover:bg-brand-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Ver Catálogo 2024
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2">
                <Play size={20} className="text-brand-500 fill-brand-500" /> Demo Gratuita
              </button>
            </div>

            <div className="pt-6 flex items-center gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src={`https://picsum.photos/100/100?random=${i + 10}`}
                    alt="Student"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span>4.9/5 de 10k+ alumnos</span>
              </div>
            </div>
          </div>

          {/* Hero Image / Visual */}
          <div className="relative hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 animate-float">
              <img 
                src="https://picsum.photos/800/800?random=1" 
                alt="Students learning" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <ShieldCheck className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Certificación</p>
                    <p className="font-bold text-slate-900">Oficial Global</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 right-8 bg-slate-900/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/10 text-white max-w-[200px]">
                <p className="text-xs text-slate-300 mb-1">Mentoría en vivo</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <p className="font-bold text-sm">Sesión iniciada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};