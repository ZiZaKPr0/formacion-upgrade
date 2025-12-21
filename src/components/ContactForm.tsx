import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Content Side */}
          <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center relative">
             {/* Abstract pattern */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
             </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 relative z-10">
              ¿Listo para despegar?
            </h2>
            <p className="text-brand-100 text-lg mb-8 relative z-10">
              Únete a la academia valorada en $100M+ y accede a las mejores oportunidades del mercado. Solicita información hoy mismo.
            </p>
            <ul className="space-y-4 relative z-10">
              {['Asesoría personalizada gratuita', 'Acceso al plan de estudios completo', 'Becas disponibles para early adopters'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center">
                    <CheckCircle size={14} />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 bg-white p-12 lg:p-20">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Mensaje Enviado!</h3>
                <p className="text-slate-600">Un asesor de Formación Upgrade te contactará en menos de 24 horas.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-brand-600 font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none"
                    placeholder="Ej. juan@empresa.com"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-bold text-slate-700 mb-2">Área de Interés</label>
                  <select 
                    id="interest"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none text-slate-600"
                  >
                    <option>Desarrollo Web</option>
                    <option>Data Science</option>
                    <option>Marketing Digital</option>
                    <option>Diseño UX/UI</option>
                    <option>Empresas / Corporate</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Enviando...' : (
                    <>Enviar Solicitud <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};