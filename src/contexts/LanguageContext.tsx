
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ro';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navbar
    'navbar.services': 'Services',
    'navbar.projects': 'Projects',
    'navbar.about': 'About',
    'navbar.testimonials': 'Testimonials',
    'navbar.contact': 'Contact',
    'navbar.contactMe': 'Contact Me',
    
    // Hero
    'hero.title': 'I build web solutions for your business and help increase its visibility online.',
    'hero.subtitle': 'Ionuț Cornea – Full-Stack PHP & Vue Developer',
    'hero.viewPortfolio': 'View Portfolio',
    'hero.bookCall': 'Book a Call',
    'hero.contactMe': 'Contact Me',
    'hero.hireNow': 'Hire Ionut now',
    
    // Testimonials
    'testimonials.badge': 'Testimonials',
    'testimonials.title': 'What Clients Say',
    'testimonials.subtitle': "Don't just take my word for it - hear from some of my happy clients"
  },
  ro: {
    // Navbar
    'navbar.services': 'Servicii',
    'navbar.projects': 'Proiecte',
    'navbar.about': 'Despre',
    'navbar.testimonials': 'Testimoniale',
    'navbar.contact': 'Contact',
    'navbar.contactMe': 'Contactează-mă',
    
    // Hero
    'hero.title': 'Construiesc soluții web pentru afacerea ta și ajut la creșterea vizibilității online.',
    'hero.subtitle': 'Ionuț Cornea – Dezvoltator Full-Stack PHP & Vue',
    'hero.viewPortfolio': 'Vezi Portofoliul',
    'hero.bookCall': 'Programează o Discuție',
    'hero.contactMe': 'Contactează-mă',
    'hero.hireNow': 'Angajează-l pe Ionuț acum',
    
    // Testimonials
    'testimonials.badge': 'Testimoniale',
    'testimonials.title': 'Ce Spun Clienții',
    'testimonials.subtitle': 'Nu lua doar cuvântul meu - ascultă câțiva dintre clienții mei mulțumiți'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
