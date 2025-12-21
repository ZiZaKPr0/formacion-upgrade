import React from 'react';
import { motion } from 'framer-motion'; // Asegúrate de tener framer-motion instalado
import { 
  TrendingUp, RefreshCw, FileCheck, 
  MousePointerClick, MessagesSquare, Clock 
} from 'lucide-react';

const features = [
  {
    icon: FileCheck,
    title: 'Cursos de calidad',
    description: 'Formación adaptada a estándares oficiales. Títulos con validez real para tu currículum.'
  },
  {
    icon: MousePointerClick,
    title: 'Formación práctica',
    description: 'Sin rodeos. Contenidos diseñados para que apliques lo aprendido desde el primer día.'
  },
  {
    icon: MessagesSquare,
    title: 'Soporte docente real',
    description: 'No estás solo frente a un PDF. Cuentas con tutores expertos para resolver tus dudas.'
  },
  {
    icon: Clock,
    title: 'Campus 24/7',
    description: 'Estudia a tu ritmo. Acceso total desde cualquier dispositivo para que tú decidas.'
  },
  {
    icon: RefreshCw,
    title: 'Temarios Actualizados',
    description: 'Formación al día. Revisamos cada curso constantemente para asegurar la actualidad.'
  },
  {
    icon: TrendingUp,
    title: 'Impulso Profesional',
    description: 'Mejora tu perfil laboral con las competencias más demandadas por las empresas.'
  }
];

// Configuración de la animación para el contenedor (cascada)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Tiempo entre la aparición de cada tarjeta
    },
  },
};

// Configuración de la animación para cada tarjeta individual
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const Features: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      {/* Adorno sutil de fondo para romper la monotonía del blanco */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Títulos con animación inicial */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-orange-600 font-bold tracking-wide uppercase text-sm mb-3">
            ¿Por qué elegir Formación Upgrade?
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Más que una academia, un ecosistema de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">crecimiento</span>
          </h3>
          <p className="text-slate-600 text-lg">
            Hemos rediseñado la educación online para centrarse en resultados tangibles y crecimiento profesional acelerado.
          </p>
        </motion.div>

        {/* Grid animado con Framer Motion */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Se activa 100px antes de entrar en vista
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-300 group relative"
            >
              {/* Decoración discreta al hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-500/10 transition-colors pointer-events-none" />

              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <feature.icon className="text-orange-600 group-hover:text-white transition-colors duration-300" size={24} />
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};