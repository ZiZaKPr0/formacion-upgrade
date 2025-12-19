import React from 'react';
import { Clock, BarChart, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Full Stack Development',
    category: 'Tecnología',
    image: 'https://picsum.photos/600/400?random=1',
    duration: '24 Semanas',
    level: 'Intermedio - Avanzado',
    students: 1240
  },
  {
    title: 'Data Science & AI',
    category: 'Datos',
    image: 'https://picsum.photos/600/400?random=2',
    duration: '18 Semanas',
    level: 'Avanzado',
    students: 850
  },
  {
    title: 'Digital Marketing Pro',
    category: 'Marketing',
    image: 'https://picsum.photos/600/400?random=3',
    duration: '12 Semanas',
    level: 'Principiante',
    students: 2100
  },
];

export const Courses: React.FC = () => {
  return (
    <section id="cursos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Programas diseñados para el éxito
            </h2>
            <p className="text-slate-600 text-lg">
              Explora nuestros bootcamps y cursos especializados actualizados mensualmente.
            </p>
          </div>
          <button className="text-brand-600 font-bold flex items-center gap-2 hover:text-brand-700 hover:underline decoration-2 underline-offset-4">
            Ver todo el catálogo <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wide">
                  {course.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart size={16} />
                    {course.level}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                            <img key={i} src={`https://picsum.photos/30/30?random=${index * 10 + i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="student" />
                        ))}
                    </div>
                    <button className="text-sm font-bold text-brand-600 hover:text-brand-700">
                        Inscribirse
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};