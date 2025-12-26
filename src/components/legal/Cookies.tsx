import React from 'react';

export const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Cookies</h1>
        <p className="text-slate-600 mb-6">Última actualización: {new Date().getFullYear()}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. ¿Qué son las Cookies?</h2>
            <p className="text-slate-600 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Estas cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, por lo que no tiene que volver a configurarlas cada vez que regrese al sitio o navegue de una página a otra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Tipos de Cookies que Utilizamos</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Cookies Técnicas (Necesarias)</h3>
            <p className="text-slate-600 leading-relaxed">
              Estas cookies son esenciales para que el sitio web funcione correctamente. Permiten la navegación y el uso de las funciones básicas del sitio.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Cookies de Funcionalidad</h3>
            <p className="text-slate-600 leading-relaxed">
              Estas cookies permiten que el sitio web recuerde las opciones que usted hace (como su nombre de usuario, idioma o región) y proporcionan características mejoradas y más personales.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Cookies de Terceros</h3>
            <p className="text-slate-600 leading-relaxed">
              Utilizamos servicios de terceros que pueden establecer cookies en su dispositivo:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4 ml-4">
              <li><strong>EmailJS:</strong> Para el funcionamiento del formulario de contacto. Más información: <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">Política de Privacidad de EmailJS</a></li>
              <li><strong>Tailwind CSS (CDN):</strong> Para el diseño visual del sitio web</li>
              {/* Si usas Google Analytics, añádelo aquí */}
              {/* <li><strong>Google Analytics:</strong> Para analizar el tráfico web. Más información: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">Política de Privacidad de Google</a></li> */}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Finalidad de las Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Las cookies utilizadas en este sitio web tienen las siguientes finalidades:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4 ml-4">
              <li>Garantizar el correcto funcionamiento del sitio web</li>
              <li>Recordar sus preferencias y configuraciones</li>
              <li>Permitir el envío de formularios de contacto</li>
              <li>Mejorar la experiencia de usuario</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Gestión de Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su ordenador y puede configurar la mayoría de los navegadores para prevenir que se coloquen.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y algunos servicios y funcionalidades pueden no funcionar.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Puede encontrar más información sobre cómo gestionar las cookies en los siguientes enlaces:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4 ml-4">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">Internet Explorer</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Consentimiento</h2>
            <p className="text-slate-600 leading-relaxed">
              Al continuar navegando por nuestro sitio web después de ver el banner de cookies, usted consiente el uso de cookies de acuerdo con esta política. Si no está de acuerdo con el uso de cookies, puede configurar su navegador para rechazarlas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Modificaciones</h2>
            <p className="text-slate-600 leading-relaxed">
              Esta política de cookies puede ser actualizada periódicamente. Le recomendamos revisar esta página de vez en cuando para mantenerse informado sobre cómo utilizamos las cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

