import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  // Configuración de EmailJS
  // IMPORTANTE: Reemplaza estos valores con tus credenciales de EmailJS
  // Puedes obtenerlas en: https://www.emailjs.com/
  const EMAILJS_SERVICE_ID = 'service_pkbmfnm';    // Tu Service ID
  const EMAILJS_TEMPLATE_ID = 'template_ppas10g';  // Tu Template ID
  const EMAILJS_PUBLIC_KEY = '2hkTbWgbiBuLgCLUk';    // Tu Public Key

  useEffect(() => {
    // Inicializar EmailJS con tu Public Key
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar consentimiento de privacidad
    if (!privacyAccepted) {
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
      return;
    }

    setFormStatus('submitting');

    try {
      // Validar que las credenciales estén configuradas
      if (
        EMAILJS_SERVICE_ID.includes('YOUR_') ||
        EMAILJS_TEMPLATE_ID.includes('YOUR_') ||
        EMAILJS_PUBLIC_KEY.includes('YOUR_')
      ) {
        throw new Error('Por favor, configura tus credenciales de EmailJS en el código');
      }

      // Enviar email usando EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Formación Upgrade', // Nombre del destinatario
        },
        EMAILJS_PUBLIC_KEY
      );
      
      setFormStatus('success');
      
      // Limpiar el formulario después del éxito
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setPrivacyAccepted(false);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setFormStatus('error');
      
      // Resetear el estado de error después de 3 segundos
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-brand-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        >
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center relative"
          >
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
              ¿Listo para cambiar tu futuro?
            </h2>
            <p className="text-brand-100 text-lg mb-8 relative z-10">
              Únete a la academia online mejor valorada y accede a las mejores oportunidades del mercado. Solicita información hoy mismo.
            </p>
            <ul className="space-y-4 relative z-10">
              {['Asesoría personalizada', 'Acceso al plan de estudios completo', 'Becas disponibles'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center">
                    <CheckCircle size={14} />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-1/2 bg-white p-12 lg:p-20"
          >
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Mensaje Enviado!</h3>
                <p className="text-slate-600">Un asesor de Formación Upgrade te contactará lo antes posible.</p>
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none"
                    placeholder="Ej. juan@empresa.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Mensaje</label>
                  <textarea 
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none resize-none"
                    placeholder="Cuéntanos qué necesitas, en qué curso estás interesado o cualquier consulta que tengas..."
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    required
                    className="mt-1 w-4 h-4 text-brand-600 border-slate-300 rounded focus:ring-brand-500 focus:ring-2"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-600 cursor-pointer">
                    He leído y acepto la{' '}
                    <a href="#privacidad" className="text-brand-600 underline hover:text-brand-700">
                      política de privacidad
                    </a>
                    {' '}y el tratamiento de mis datos.
                  </label>
                </div>
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">
                      {!privacyAccepted 
                        ? 'Debes aceptar la política de privacidad para continuar.'
                        : 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'}
                    </p>
                  </div>
                )}
                <button 
                  type="submit"
                  disabled={formStatus === 'submitting' || !privacyAccepted}
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Enviando...' : (
                    <>Enviar Solicitud <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};