import React from 'react';
import DisplayCards from './ui/display-cards';
import { Sparkles, BookOpen, Award } from 'lucide-react';

const defaultCards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Featured",
    description: "Discover amazing content",
    date: "Just now",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <BookOpen className="size-4 text-orange-300" />,
    title: "Popular",
    description: "En tentencia",
    date: "Hace 2 dias",
    iconClassName: "text-orange-500",
    titleClassName: "text-orange-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Award className="size-4 text-purple-300" />,
    title: "New",
    description: "Latest updates and features",
    date: "Today",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export const Pruebas: React.FC = () => {
  return (
    <section id="pruebas" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-brand-100/30 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">
            Pruebas
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Componentes Interactivos
          </h3>
          <p className="text-slate-600 text-lg">
            Explora nuestros componentes de demostración con efectos visuales avanzados.
          </p>
        </div>

        <div className="flex min-h-[400px] w-full items-center justify-center py-20">
          <div className="w-full max-w-3xl">
            <DisplayCards cards={defaultCards} />
          </div>
        </div>
      </div>
    </section>
  );
};

