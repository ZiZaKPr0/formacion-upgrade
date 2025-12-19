import React from 'react';

const stats = [
  { value: '+50k', label: 'Estudiantes Graduados' },
  { value: '$100M', label: 'Valoración de Mercado' },
  { value: '98%', label: 'Tasa de Empleabilidad' },
  { value: '120+', label: 'Empresas Partners' },
];

export const Stats: React.FC = () => {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2 group cursor-default">
              <p className="text-4xl lg:text-5xl font-bold text-white group-hover:text-brand-500 transition-colors duration-300">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 overflow-hidden">
          <div className="flex animate-scroll">
            {/* Primera copia */}
            {['Google', 'Microsoft', 'Amazon', 'Spotify', 'Tesla'].map((company, index) => (
              <div key={`first-${company}-${index}`} className="flex-shrink-0 px-8 lg:px-16">
                <span className="text-xl lg:text-2xl font-bold text-white font-sans opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
            {/* Segunda copia para el efecto infinito */}
            {['Google', 'Microsoft', 'Amazon', 'Spotify', 'Tesla'].map((company, index) => (
              <div key={`second-${company}-${index}`} className="flex-shrink-0 px-8 lg:px-16">
                <span className="text-xl lg:text-2xl font-bold text-white font-sans opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};