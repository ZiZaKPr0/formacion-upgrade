import React from 'react';
import { Hero as AnimatedHero } from './ui/animated-hero';
import heroImage from '@/assets/images/hero.jpg';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay oscuro para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-slate-900/70 z-0"></div>
      
      {/* Background decoration adicional (opcional) */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl opacity-30 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl opacity-30 z-0 pointer-events-none"></div>

      <div className="relative z-10">
        <AnimatedHero />
      </div>
    </section>
  );
};