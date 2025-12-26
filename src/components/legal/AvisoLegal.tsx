import React from 'react';

export const AvisoLegal: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Aviso Legal</h1>
        <p className="text-slate-600 mb-6">Última actualización: {new Date().getFullYear()}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Datos Identificativos</h2>
            <p className="text-slate-600 leading-relaxed">
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg mt-4">
              <p className="text-slate-700">
                <strong>Denominación social:</strong> Formación Upgrade<br />
                {/* Añade aquí tu CIF/NIF si eres empresa o autónomo */}
                {/* <strong>CIF/NIF:</strong> X12345678<br /> */}
                <strong>Email:</strong> info@formacionupgrade.com<br />
                {/* Añade aquí tu dirección si la tienes */}
                {/* <strong>Dirección:</strong> Calle Ejemplo, 123, 28001 Madrid<br /> */}
                {/* <strong>Teléfono:</strong> +34 123 456 789<br /> */}
              </p>
              <p className="text-sm text-slate-500 mt-4">
                <em>Nota: Por favor, completa estos datos con tu información real (CIF, dirección, teléfono) antes de publicar el sitio web.</em>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Objeto</h2>
            <p className="text-slate-600 leading-relaxed">
              El presente aviso legal regula el uso del sitio web <strong>formacionupgrade.com</strong> (en adelante, el "Sitio Web"), del que es titular Formación Upgrade.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              La navegación por el sitio web de Formación Upgrade atribuye la condición de usuario del mismo e implica la aceptación plena de todas las cláusulas incluidas en este Aviso Legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Condiciones de Uso</h2>
            <p className="text-slate-600 leading-relaxed">
              El acceso y uso del Sitio Web tiene por objeto la información sobre los servicios formativos ofrecidos por Formación Upgrade, así como permitir el contacto general con la entidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Propiedad Intelectual e Industrial</h2>
            <p className="text-slate-600 leading-relaxed">
              Todos los contenidos del Sitio Web, entendiendo por estos a modo meramente enunciativo los textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a Formación Upgrade, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del Sitio Web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Responsabilidades</h2>
            <p className="text-slate-600 leading-relaxed">
              Formación Upgrade no se hace responsable de la información y contenidos almacenados en foros, chats, generadores de blogs, comentarios, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web. Sin embargo, y en cumplimiento de lo dispuesto en los artículos 11 y 16 de la LSSI-CE, se compromete a retirar o en su caso bloquear aquellos contenidos que puedan afectar o contravenir la legislación nacional o internacional, derechos de terceros o la moral y el orden público.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Modificaciones</h2>
            <p className="text-slate-600 leading-relaxed">
              Formación Upgrade se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Ley Aplicable y Jurisdicción</h2>
            <p className="text-slate-600 leading-relaxed">
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de [Ciudad donde esté tu empresa].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

