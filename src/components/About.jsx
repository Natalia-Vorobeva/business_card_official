import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const translations = {
    ru: {
      title: 'Обо мне',
      text1: 'Как госслужащий международного уровня, я посвятил свою карьеру укреплению международных отношений и продвижению дипломатического диалога. Моя работа охватывает широкий спектр областей, от политических консультаций до экономического сотрудничества.',
      text2: 'Верю в силу конструктивного диалога и взаимопонимания между народами и государствами. В своей деятельности стремлюсь к созданию долгосрочных партнерств, которые способствуют стабильности и процветанию на глобальном уровне.',
      educationTitle: 'Образование',
      mgimo: 'МГИМО (Университет)',
      mgimoSpecialty: 'Международные отношения, доктор наук',
      harvard: 'Гарвардский университет',
      harvardSpecialty: 'Программа для руководителей в сфере государственного управления',
      languagesTitle: 'Языки',
      russian: 'Русский',
      russianLevel: 'Родной',
      english: 'Английский',
      englishLevel: 'Свободно',
      french: 'Французский',
      frenchLevel: 'Свободно',
      german: 'Немецкий',
      germanLevel: 'Профессионально',
      additionalLanguages: 'Дополнительные языковые компетенции: Базовое владение испанским и китайским языками'
    },
    en: {
      title: 'About Me',
      text1: 'As an international civil servant, I have dedicated my career to strengthening international relations and promoting diplomatic dialogue. My work covers a wide range of areas, from political consultations to economic cooperation.',
      text2: 'I believe in the power of constructive dialogue and mutual understanding between peoples and states. In my activities, I strive to create long-term partnerships that contribute to stability and prosperity at the global level.',
      educationTitle: 'Education',
      mgimo: 'MGIMO (University)',
      mgimoSpecialty: 'International Relations, Doctor of Sciences',
      harvard: 'Harvard University',
      harvardSpecialty: 'Executive Program in Public Administration',
      languagesTitle: 'Languages',
      russian: 'Russian',
      russianLevel: 'Native',
      english: 'English',
      englishLevel: 'Fluent',
      french: 'French',
      frenchLevel: 'Fluent',
      german: 'German',
      germanLevel: 'Professional',
      additionalLanguages: 'Additional language competencies: Basic proficiency in Spanish and Chinese'
    },
    fr: {
      title: 'À propos',
      text1: 'En tant que fonctionnaire international, j\'ai consacré ma carrière au renforcement des relations internationales et à la promotion du dialogue diplomatique. Mon travail couvre un large éventail de domaines, des consultations politiques à la coopération économique.',
      text2: 'Je crois en la puissance du dialogue constructif et de la compréhension mutuelle entre les peuples et les États. Dans mes activités, je m\'efforce de créer des partenariats à long terme qui contribuent à la stabilité et à la prospérité au niveau mondial.',
      educationTitle: 'Éducation',
      mgimo: 'MGIMO (Université)',
      mgimoSpecialty: 'Relations internationales, docteur en sciences',
      harvard: 'Université Harvard',
      harvardSpecialty: 'Programme pour cadres dans l\'administration publique',
      languagesTitle: 'Langues',
      russian: 'Russe',
      russianLevel: 'Langue maternelle',
      english: 'Anglais',
      englishLevel: 'Courant',
      french: 'Français',
      frenchLevel: 'Courant',
      german: 'Allemand',
      germanLevel: 'Professionnel',
      additionalLanguages: 'Compétences linguistiques supplémentaires: Maîtrise basique de l\'espagnol et du chinois'
    }
  };

  const {
    title,
    text1,
    text2,
    educationTitle,
    mgimo,
    mgimoSpecialty,
    harvard,
    harvardSpecialty,
    languagesTitle,
    russian,
    russianLevel,
    english,
    englishLevel,
    french,
    frenchLevel,
    german,
    germanLevel,
    additionalLanguages
  } = t(translations);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Левая колонка - Заголовок */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-px bg-gold mr-6"></div>
                <h2 className="text-4xl font-medium text-navy">{title}</h2>
              </div>
            </div>

            {/* Правая колонка - Контент */}
            <div className="md:col-span-2">
              <div className="space-y-10">
                <div>
                  <p className="text-lg text-gray-700 font-light leading-relaxed mb-10 pb-10 border-b border-gray-100">
                    {text1}
                  </p>
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                    {text2}
                  </p>
                </div>

                {/* Образование */}
                <div className="pt-10 border-t border-gray-100">
                  <div className="flex items-center mb-8">
                    <svg className="w-6 h-6 text-gold mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-2xl font-medium text-navy">{educationTitle}</h3>
                  </div>

                  <div className="space-y-8">
                    <div className="relative pl-10 pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="absolute left-0 top-0 w-6 h-px bg-gold"></div>
                      <h4 className="text-xl text-navy font-medium mb-2">{mgimo}</h4>
                      <p className="text-gold font-serif text-lg mb-2">{mgimoSpecialty}</p>
                      <div className="flex items-center">
                        <div className="w-2 h-px bg-gold/40 mr-2"></div>
                        <span className="text-navy text-xs font-light tracking-wider px-2 py-1">
                          1998-2003
                        </span>
                        <div className="w-2 h-px bg-gold/40 ml-2"></div>
                      </div>
                    </div>

                    <div className="relative pl-10">
                      <div className="absolute left-0 top-0 w-6 h-px bg-gold"></div>
                      <h4 className="text-xl text-navy font-medium mb-2">{harvard}</h4>
                      <p className="text-gold font-serif text-lg mb-2">{harvardSpecialty}</p>
                      <div className="flex items-center">
                        <div className="w-2 h-px bg-gold/40 mr-2"></div>
                        <span className="text-navy text-xs font-light tracking-wider px-2 py-1">
                          2010
                        </span>
                        <div className="w-2 h-px bg-gold/40 ml-2"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Языки */}
                <div className="pt-10 border-t border-gray-100">
                  <div className="flex items-center mb-8">
                    <svg className="w-6 h-6 text-gold mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-2xl font-medium text-navy">{languagesTitle}</h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50/50 p-6 border border-gray-100 rounded-sm group hover:border-gold/30 transition-all duration-300">
                      <div className="text-center">
                        <p className="text-xl font-medium text-navy mb-2 group-hover:text-gold transition-colors duration-300">{russian}</p>
                        <div className="w-12 h-px bg-gold/40 mx-auto mb-3"></div>
                        <p className="text-gold text-sm font-serif tracking-wider">{russianLevel}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50/50 p-6 border border-gray-100 rounded-sm group hover:border-gold/30 transition-all duration-300">
                      <div className="text-center">
                        <p className="text-xl font-medium text-navy mb-2 group-hover:text-gold transition-colors duration-300">{english}</p>
                        <div className="w-12 h-px bg-gold/40 mx-auto mb-3"></div>
                        <p className="text-gold text-sm font-serif tracking-wider">{englishLevel}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50/50 p-6 border border-gray-100 rounded-sm group hover:border-gold/30 transition-all duration-300">
                      <div className="text-center">
                        <p className="text-xl font-medium text-navy mb-2 group-hover:text-gold transition-colors duration-300">{french}</p>
                        <div className="w-12 h-px bg-gold/40 mx-auto mb-3"></div>
                        <p className="text-gold text-sm font-serif tracking-wider">{frenchLevel}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50/50 p-6 border border-gray-100 rounded-sm group hover:border-gold/30 transition-all duration-300">
                      <div className="text-center">
                        <p className="text-xl font-medium text-navy mb-2 group-hover:text-gold transition-colors duration-300">{german}</p>
                        <div className="w-12 h-px bg-gold/40 mx-auto mb-3"></div>
                        <p className="text-gold text-sm font-serif tracking-wider">{germanLevel}</p>
                      </div>
                    </div>
                  </div>

                  {/* Дополнительная информация о языках */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-gray-600 font-light text-sm text-center">
                      {additionalLanguages}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;