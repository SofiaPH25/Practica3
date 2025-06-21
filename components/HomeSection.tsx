
import React from 'react';
import Card from './common/Card';

const HomeSection: React.FC = () => {
  return (
    <section id="inicio" className="space-y-8">
      <Card>
        <h2 className="text-3xl font-bold text-sky-700 mb-6 text-center">Bienvenido a Asesoría Escolar</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/schoolsupport/600/400" 
              alt="Estudiantes colaborando" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-lg text-slate-600 space-y-4">
            <p>
              Nuestro programa está diseñado para <strong className="text-sky-600">brindar apoyo integral</strong> a estudiantes que enfrentan desafíos académicos. 
              Creemos firmemente en el potencial de cada estudiante y estamos aquí para ayudarles a alcanzar sus metas.
            </p>
            <p>
              El objetivo principal es proporcionar <strong className="text-sky-600">apoyo académico, emocional y orientación</strong> a estudiantes con bajo rendimiento o en riesgo de deserción escolar. 
              Ofrecemos un entorno seguro y motivador para que puedan redescubrir su amor por el aprendizaje y construir un futuro exitoso.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default HomeSection;
