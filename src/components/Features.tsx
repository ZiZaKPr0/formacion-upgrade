import React from 'react';
import { Monitor, Users, Award, Zap, Globe, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Monitor,
    title: 'Plataforma Inteligente',
    description: 'Aprende a tu ritmo con nuestra IA adaptativa que personaliza tu ruta de aprendizaje.'
  },
  {
    icon: Users,
    title: 'Comunidad Global',
    description: 'Conecta con profesionales de más de 40 países y expande tu red de contactos.'
  },
  {
    icon: Award,
    title: 'Certificación Premium',
    description: 'Títulos reconocidos por las empresas Fortune 500 y validados por la blockchain de Bitcoin.'
  },
  {
    icon: Zap,
    title: 'Bootcamps Intensivos',
    description: 'Programas de alto impacto diseñados para transformar tu carrera en 12 semanas.'
  },
  {
    icon: Globe,
    title: 'Acceso Remoto 24/7',
    description: 'Estudia desde cualquier lugar del mundo con nuestra infraestructura en la nube.'
  },
  {
    icon: Briefcase,
    title: 'Bolsa de Talento',
    description: 'Acceso exclusivo a ofertas laborales de nuestros partners corporativos.'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">
            ¿Por qué elegir Upgrade?
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Más que una academia, un ecosistema de crecimiento
          </h3>
          <p className="text-slate-600 text-lg">
            Hemos rediseñado la educación online para centrarse en resultados tangibles y crecimiento profesional acelerado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors duration-300">
                <feature.icon className="text-brand-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};