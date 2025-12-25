import React, { useState } from 'react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const translations = {
    ru: {
      navItems: [
        { label: 'Главная', href: '#home' },
        { label: 'Обо мне', href: '#about' },
        { label: 'Опыт', href: '#experience' },
        { label: 'Экспертиза', href: '#expertise' },
        { label: 'Международное признание', href: '#recognition' },
        { label: 'Контакты', href: '#contact' },
      ],
      name: 'Александр Петров',
      title: 'Госслужащий международного уровня',
      languages: {
        ru: 'РУС',
        en: 'АНГ',
        fr: 'ФРА'
      }
    },
    en: {
      navItems: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Expertise', href: '#expertise' },
        { label: 'Recognition', href: '#recognition' },
        { label: 'Contact', href: '#contact' },
      ],
      name: 'Alexander Petrov',
      title: 'International Civil Servant',
      languages: {
        ru: 'RUS',
        en: 'ENG',
        fr: 'FRA'
      }
    },
    fr: {
      navItems: [
        { label: 'Accueil', href: '#home' },
        { label: 'À propos', href: '#about' },
        { label: 'Expérience', href: '#experience' },
        { label: 'Expertise', href: '#expertise' },
        { label: 'Reconnaissance internationale', href: '#recognition' },
        { label: 'Contact', href: '#contact' },
      ],
      name: 'Alexandre Petrov',
      title: 'Fonctionnaire international',
      languages: {
        ru: 'RUS',
        en: 'ANG',
        fr: 'FRA'
      }
    }
  };

  const { navItems, name, title, languages } = t(translations);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsMenuOpen(false);
  };

  const languageItems = [
    { code: 'ru', label: languages.ru },
    { code: 'en', label: languages.en },
    { code: 'fr', label: languages.fr }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-elegant">
      <div className="section-padding">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center space-x-4">
            <Logo />
            <div>
              <h1 className="text-lg font-medium text-navy">{name}</h1>
              <div className="flex items-center">
                <div className="w-12 h-px bg-gold mr-2"></div>
                <p className="text-xs text-gray-500">{title}</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-gold transition-colors text-sm font-light tracking-wide relative group"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            {languageItems.map((item) => (
              <button
                key={item.code}
                onClick={() => handleLanguageChange(item.code)}
                className={`text-xs font-light tracking-wider transition-colors duration-200 ${
                  language === item.code ? 'text-gold' : 'text-gray-500 hover:text-navy'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={language === 'ru' ? 'Меню' : language === 'en' ? 'Menu' : 'Menu'}
          >
            <div className="flex flex-col space-y-1">
              <div className={`w-6 h-px bg-navy transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-px bg-navy ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-px bg-navy transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-gold transition-colors text-sm font-light py-1"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 flex space-x-6">
                {languageItems.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => handleLanguageChange(item.code)}
                    className={`text-xs font-light tracking-wider transition-colors duration-200 ${
                      language === item.code ? 'text-gold' : 'text-gray-500 hover:text-navy'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;