
import React from 'react';
import Card from './common/Card';
import { Service } from '../types';

const servicesData: Service[] = [
  { 
    id: 'tutoring', 
    title: 'Tutorías Personalizadas', 
    description: 'Sesiones individuales o en grupos pequeños adaptadas a las necesidades específicas de cada estudiante para reforzar conocimientos y mejorar el rendimiento académico.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m0 0a8.485 8.485 0 0011.921 0M12 17.747a8.485 8.485 0 01-11.921 0M12 17.747L12 6.253" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  { 
    id: 'counseling', 
    title: 'Consejería Psicológica', 
    description: 'Apoyo emocional y estrategias para manejar el estrés, la ansiedad y otros factores que puedan afectar el desempeño escolar y el bienestar general del estudiante.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.874 5.126A2.25 2.25 0 017.5 4.5h9a2.25 2.25 0 012.626.626l3.874 6.874a2.25 2.25 0 010 2.748l-3.874 6.874a2.25 2.25 0 01-2.626.626h-9a2.25 2.25 0 01-2.626-.626L1 14.748a2.25 2.25 0 010-2.748L4.874 5.126zM7.5 9.75h9M7.5 12.75h5.25" />
      </svg>
    )
  },
  { 
    id: 'vocational', 
    title: 'Orientación Vocacional', 
    description: 'Ayuda para identificar intereses, habilidades y metas profesionales, facilitando la toma de decisiones sobre el futuro académico y laboral.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    )
  },
  { 
    id: 'tracking', 
    title: 'Seguimiento Académico', 
    description: 'Monitoreo continuo del progreso del estudiante, trabajando en conjunto con profesores y padres para asegurar un apoyo efectivo y oportuno.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="servicios">
      <h2 className="text-3xl font-bold text-sky-700 mb-8 text-center">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {servicesData.map((service) => (
          <Card key={service.id} className="flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            {service.icon && <div className="mb-4">{service.icon}</div>}
            <h3 className="text-xl font-semibold text-sky-600 mb-2">{service.title}</h3>
            <p className="text-slate-600 text-sm">{service.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
