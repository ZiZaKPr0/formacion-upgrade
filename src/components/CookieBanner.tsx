import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-slate-700 leading-relaxed">
            Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación y realizar tareas de análisis. 
            Al continuar navegando, entendemos que acepta nuestra{' '}
            <a href="#cookies" className="text-brand-600 underline hover:text-brand-700">
              Política de Cookies
            </a>.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 text-sm font-medium bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
          >
            Aceptar
          </button>
          <button
            onClick={handleAccept}
            className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

