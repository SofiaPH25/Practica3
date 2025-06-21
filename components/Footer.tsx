
import React from 'react';
import { FOOTER_CONTACT_INFO, FOOTER_COPYRIGHT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-700 text-sky-100 py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">{FOOTER_CONTACT_INFO}</p>
        <p className="text-sm mt-1">{FOOTER_COPYRIGHT}</p>
      </div>
    </footer>
  );
};

export default Footer;
