
import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-sky-600 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-1 text-lg sm:text-xl text-sky-100">{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
