import React from 'react';

export const Privacidad: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Privacidad</h1>
        <p className="text-slate-600 mb-6">Última actualización: {new Date().getFullYear()}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Responsable del Tratamiento</h2>
            <p className="text-slate-600 leading-relaxed">
              Formación Upgrade es el responsable del tratamiento de los datos personales que nos facilites a través de este sitio web.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              <strong>Datos de contacto:</strong><br />
              Nombre: Formación Upgrade<br />
              Email: info@formacionupgrade.com<br />
              {/* Añade aquí tu dirección física si la tienes */}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Finalidad del Tratamiento</h2>
            <p className="text-slate-600 leading-relaxed">
              Los datos personales que nos facilitas a través del formulario de contacto serán utilizados con la siguiente finalidad:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4 ml-4">
              <li>Responder a tus consultas y solicitudes de información</li>
              <li>Gestionar tu solicitud de información sobre nuestros servicios formativos</li>
              <li>Enviarte comunicaciones relacionadas con tu consulta (si aplica)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Legitimación</h2>
            <p className="text-slate-600 leading-relaxed">
              La base legal para el tratamiento de tus datos personales es el <strong>consentimiento</strong> que nos otorgas al marcar la casilla de aceptación de esta política de privacidad y enviar el formulario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Conservación de los Datos</h2>
            <p className="text-slate-600 leading-relaxed">
              Conservaremos tus datos personales durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y, en cualquier caso, durante los plazos legalmente establecidos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Destinatarios</h2>
            <p className="text-slate-600 leading-relaxed">
              Tus datos personales no serán comunicados a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio solicitado. Utilizamos EmailJS para el envío de correos electrónicos, que actúa como encargado del tratamiento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Derechos del Usuario</h2>
            <p className="text-slate-600 leading-relaxed">
              Tienes derecho a:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4 ml-4">
              <li>Acceder a tus datos personales</li>
              <li>Rectificar datos inexactos o incompletos</li>
              <li>Solicitar la supresión de tus datos cuando ya no sean necesarios</li>
              <li>Oponerte al tratamiento de tus datos</li>
              <li>Solicitar la limitación del tratamiento</li>
              <li>Portabilidad de datos</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Para ejercer estos derechos, puedes contactarnos en: <a href="mailto:info@formacionupgrade.com" className="text-brand-600 underline">info@formacionupgrade.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Seguridad</h2>
            <p className="text-slate-600 leading-relaxed">
              Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Modificaciones</h2>
            <p className="text-slate-600 leading-relaxed">
              Nos reservamos el derecho de modificar esta política de privacidad. Te recomendamos revisarla periódicamente.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

