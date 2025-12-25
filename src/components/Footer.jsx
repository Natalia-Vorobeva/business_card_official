import React from 'react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';
import { translationsFooter } from '../constants/constants';

const Footer = () => {
  const { language, t } = useLanguage();

	  const {
    name,
    title,
    description,
    sectionsTitle,
    about,
    experience,
    expertise,
    recognition,
    contactsTitle,
    email,
    phone,
    address,
    representationTitle,
    languages,
    copyright,
    legalInfo
  } = t(translationsFooter);

  const sections = [
    { label: about, href: '#about' },
    { label: experience, href: '#experience' },
    { label: expertise, href: '#expertise' },
    { label: recognition, href: '#recognition' }
  ];

  const languageFlags = [
    { code: 'ru', label: languages.ru },
    { code: 'en', label: languages.en },
    { code: 'fr', label: languages.fr }
  ];

  return (
    <footer className="bg-navy py-16 border-t border-light">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Колонка 1: Логотип и описание */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-4">
                  <Logo />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">{name}</h3>
                  <p className="text-gray-400 text-xs font-light">{title}</p>
                </div>
              </div>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                {description}
              </p>
            </div>

            {/* Колонка 2: Разделы */}
            <div>
              <h4 className="text-white font-medium mb-6">{sectionsTitle}</h4>
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section.href}>
                    <a
                      href={section.href}
                      className="text-gray-400 hover:text-gold font-light text-sm transition-colors flex items-center group"
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.querySelector(section.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <div className="w-1 h-px bg-gold/0 group-hover:w-3 group-hover:bg-gold mr-2 transition-all duration-300"></div>
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Колонка 3: Контакты */}
            <div>
              <h4 className="text-white font-medium mb-6">{contactsTitle}</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 font-light text-sm flex items-start">
                  <svg className="w-4 h-4 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89-3.12a2 2 0 012.22 0L21 8m-18 0v9a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l6-3.5" />
                  </svg>
                  {email}
                </li>
                <li className="text-gray-400 font-light text-sm flex items-start">
                  <svg className="w-4 h-4 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {phone}
                </li>
                <li className="text-gray-400 font-light text-sm flex items-start">
                  <svg className="w-4 h-4 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {address}
                </li>
              </ul>
            </div>

            {/* Колонка 4: Международное представительство */}
            <div>
              <h4 className="text-white font-medium mb-6">{representationTitle}</h4>
              <div className="flex space-x-4">
                {languageFlags.map((flag) => (
                  <div
                    key={flag.code}
                    className={`w-10 h-6 rounded-sm flex items-center justify-center transition-all duration-300 ${
                      language === flag.code 
                        ? 'bg-gold/20 border border-gold/40' 
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    <span className={`text-xs ${
                      language === flag.code ? 'text-gold' : 'text-gray-400'
                    }`}>
                      {flag.label}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Дополнительная информация о языках */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <p className="text-gray-500 text-xs font-light">
                  {language === 'ru' && 'Рабочие языки: русский, английский, французский, немецкий'}
                  {language === 'en' && 'Working languages: Russian, English, French, German'}
                  {language === 'fr' && 'Langues de travail: russe, anglais, français, allemand'}
                </p>
              </div>
            </div>
          </div>

          {/* Нижняя часть футера */}
          <div className="pt-8 border-t border-light">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm font-light mb-4 md:mb-0">
                {copyright}
              </p>
              <p className="text-gray-500 text-xs font-light text-center max-w-md">
                {legalInfo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;