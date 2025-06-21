
import React, { useState } from 'react';
import Button from './common/Button';
import Card from './common/Card';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Por favor, introduce un correo electrónico válido.');
      return;
    }

    // Simulate form submission
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Hide success message after a few seconds
    setTimeout(() => {
        setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contacto">
      <Card>
        <h2 className="text-3xl font-bold text-sky-700 mb-8 text-center">Contáctanos</h2>
        <div className="max-w-xl mx-auto">
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
              ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
            </div>
          )}
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-center">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                placeholder="Tu Nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                placeholder="tu@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                placeholder="Escribe tu consulta aquí..."
              />
            </div>
            <div className="text-center">
              <Button type="submit">
                Enviar Mensaje
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default ContactSection;
