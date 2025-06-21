
import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white shadow-lg rounded-xl p-6 md:p-8 ${className}`}>
      {title && <h3 className="text-xl font-semibold text-sky-700 mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
