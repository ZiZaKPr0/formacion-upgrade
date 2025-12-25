import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart, ArrowRight, Users, Star } from 'lucide-react';

const courses = [
  {
    title: 'Full Stack Development',
    category: 'Tecnología',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    duration: '24 Semanas',
    level: 'Avanzado',
    students: '1.2k',
    rating: 4.9
  },
  {
    title: 'Data Science & AI',
    category: 'Datos',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '18 Semanas',
    level: 'Intermedio',
    students: '850',
    rating: 4.8
  },
  {
    title: 'Digital Marketing Pro',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    duration: '12 Semanas',
    level: 'Principiante',
    students: '2.1k',
    rating: 4.7
  },
];

export const Courses: React.FC = () => {
  return (
    <section id="cursos" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-100/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera de Sección */}
        <div className="flex flex-col md:flex-row justify-start items-center mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-orange-600 font-bold uppercase text-sm tracking-widest mb-4">Catálogo de Expertos</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Programas diseñados para el <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">éxito real</span>
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Formación técnica de alto impacto con proyectos reales y mentoría personalizada.
            </p>
          </motion.div>
          {/*
          <motion.button 
            whileHover={{ x: 5 }}
            className="group flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 text-slate-900 font-bold hover:shadow-md transition-all"
          >
            Ver todo el catálogo 
            <ArrowRight size={20} className="text-orange-600 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          */}
        </div>
        
        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Imagen con Badge de Rating */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                
                <div className="absolute top-5 left-5 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-slate-900 uppercase tracking-widest">
                    {course.category}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 flex items-center gap-1.5 bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                  <Star size={14} fill="white" />
                  {course.rating}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {course.title}
                </h4>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <div className="p-2 bg-slate-100 rounded-lg"><Clock size={16} /></div>
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <div className="p-2 bg-slate-100 rounded-lg"><BarChart size={16} /></div>
                    {course.level}
                  </div>
                </div>

                {/* Footer de la card con CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users size={18} className="text-orange-500" />
                    <span className="text-sm font-medium">{course.students} alumnos</span>
                  </div>
                  
                  <a 
                    href="#contacto"
                    className="relative overflow-hidden group/btn px-6 py-2 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-orange-600 transition-colors duration-300 inline-block"
                  >
                    <span className="relative z-10">Explorar</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};