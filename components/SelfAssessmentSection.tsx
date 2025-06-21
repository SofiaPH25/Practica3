
import React from 'react';
import Card from './common/Card';

const SelfAssessmentSection: React.FC = () => {
  return (
    <section id="autoevaluacion">
      <Card>
        <h2 className="text-3xl font-bold text-sky-700 mb-6 text-center">Test de Autoevaluación</h2>
        <div className="text-center text-slate-600 space-y-4">
          <img 
            src="https://picsum.photos/seed/assessment/500/300" 
            alt="Persona reflexionando" 
            className="rounded-lg shadow-md mx-auto mb-6 w-full max-w-md h-auto object-cover"
          />
          <p className="text-lg">
            ¡Estamos desarrollando una herramienta interactiva para ayudarte a comprender mejor tus necesidades académicas y personales!
          </p>
          <p>
            Este test de autoevaluación te permitirá identificar áreas de fortaleza y oportunidades de mejora, guiándote hacia los recursos más adecuados para ti.
          </p>
          <p className="font-semibold text-sky-600 text-xl mt-4">
            ¡Próximamente disponible!
          </p>
        </div>
      </Card>
    </section>
  );
};

export default SelfAssessmentSection;
