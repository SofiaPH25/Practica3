
import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import ServicesSection from './components/ServicesSection';
import SelfAssessmentSection from './components/SelfAssessmentSection';
import ContactSection from './components/ContactSection';
import { SectionId } from './types';
import { APP_TITLE, APP_SUBTITLE } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Home);

  const renderSection = () => {
    switch (activeSection) {
      case SectionId.Home:
        return <HomeSection />;
      case SectionId.Services:
        return <ServicesSection />;
      case SectionId.SelfAssessment:
        return <SelfAssessmentSection />;
      case SectionId.Contact:
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-sky-50 text-slate-700 font-sans">
      <Header title={APP_TITLE} subtitle={APP_SUBTITLE} />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
