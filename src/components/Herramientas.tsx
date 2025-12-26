import React from 'react';
import { motion } from 'framer-motion';
import DisplayCards from './ui/display-cards';
import { Monitor, Globe, ShieldCheck } from 'lucide-react';

// 1. LISTA DE SLUGS GARANTIZADOS (Probados y funcionando)
const slugs = [
  "openai",           // Inteligencia Artificial
  "microsoftteams",   // Comunicación / Microsoft
  "google",           // Ecosistema Google
  "googlesheets",     // Ofimática / Excel
  "zoom",             // Clases online
  "skype",            // Idiomas / Videollamadas
  "trello",           // Organización
  "notion",           // Productividad
  "googlechrome",     // Navegación
  "canva",            // Diseño sencillo
  "coursera",         // Educación
  "udemy",            // Formación
  "whatsapp",         // Comunicación
  "visualstudiocode", // Tecnología
  "spotify"           // Multimedia
];

// Usamos el CDN de Simple Icons con un fallback por si acaso
const iconImages = slugs.map(slug => `https://cdn.simpleicons.org/${slug}`);

const IconCloudCustom = ({ images, slugs }: { images: string[], slugs: string[] }) => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div className="flex flex-wrap justify-center gap-4 max-w-[400px]">
      {images.map((img, index) => {
        const slug = slugs[index] || 'herramienta';
        return (
          <motion.div
            key={index}
            animate={{ 
              y: [0, -10, 0], 
              rotate: [0, index % 2 === 0 ? 5 : -5, 0],
              opacity: [0.9, 1, 0.9] 
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            className="bg-white p-3 rounded-xl shadow-md border border-slate-100 flex items-center justify-center"
          >
            <img 
              src={img} 
              alt={`Logo ${slug}`}
              className="size-8 object-contain" 
              loading="lazy"
              // Si la imagen falla, no mostramos el cuadro roto
              onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }} 
            />
          </motion.div>
        );
      })}
    </div>
  </div>
);

export const Herramientas: React.FC = () => {
  const defaultCards = [
    {
      icon: <Monitor className="size-4 text-blue-500" />,
      title: "Ofimática Profesional",
      description: "Excel, Word y herramientas Microsoft.",
      date: "Ofimática",
      className: "[grid-area:stack] hover:-translate-y-10 transition-all duration-500 bg-white border border-slate-100 shadow-sm",
    },
    {
      icon: <Globe className="size-4 text-orange-500" />,
      title: "Idiomas Online",
      description: "Inglés profesional nivel A2-C1.",
      date: "Idiomas",
      className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 transition-all duration-500 bg-white border border-slate-100 shadow-sm",
    },
    {
      icon: <ShieldCheck className="size-4 text-emerald-500" />,
      title: "Inteligencia Artificial",
      description: "Domina las mejores herramientas",
      date: "Tecnología",
      className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 transition-all duration-500 bg-white border border-slate-100 shadow-sm",
    },
  ];

  return (
    <section id="herramientas" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TÍTULO CENTRADO */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-orange-600 font-bold uppercase text-xs tracking-[0.2em] mb-4">
            Metodología Interactiva
          </h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Aprende con las mejores <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">herramientas</span>
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Integramos las tecnologías más punteras en nuestros programas para asegurar que tu formación esté a la vanguardia del mercado laboral.
          </p>
        </motion.div>

        {/* GRID: Cards (Izq) y Nube (Der) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Izquierdo: Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] w-full flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm">
              <DisplayCards cards={defaultCards} />
            </div>
          </motion.div>

          {/* Lado Derecho: Nube */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[450px] w-full flex items-center justify-center lg:justify-start"
          >
             <div className="w-full max-w-md bg-slate-50/80 rounded-3xl p-10 border border-slate-100 shadow-inner">
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8 text-center lg:text-left">
                  Ecosistema de Software
                </h4>
                <IconCloudCustom images={iconImages} slugs={slugs} />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Herramientas;

