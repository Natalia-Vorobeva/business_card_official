import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Expertise = () => {
  const { t } = useLanguage();

  const translations = {
    ru: {
      title: 'Области экспертизы',
      subtitle: 'Специализация в ключевых аспектах международных отношений и дипломатии',
      principlesTitle: 'Принципы работы',
      professionalismTitle: 'Профессионализм',
      professionalismText: 'Высокие стандарты в выполнении обязанностей и соблюдение дипломатического протокола',
      confidentialityTitle: 'Конфиденциальность',
      confidentialityText: 'Строгое соблюдение конфиденциальности и защита служебной информации',
      neutralityTitle: 'Нейтральность',
      neutralityText: 'Беспристрастный подход и объективность в международных вопросах',
      expertiseAreas: [
        {
          title: "Международные переговоры",
          description: "Опыт ведения сложных переговоров на различных уровнях, достижение взаимоприемлемых решений.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          )
        },
        {
          title: "Межкультурная коммуникация",
          description: "Понимание культурных особенностей и эффективное взаимодействие с представителями различных стран.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          title: "Стратегическое планирование",
          description: "Разработка долгосрочных стратегий международного сотрудничества и дипломатических инициатив.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          )
        },
        {
          title: "Анализ международной политики",
          description: "Глубокий анализ глобальных политических процессов и их влияния на международные отношения.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        }
      ]
    },
    en: {
      title: 'Areas of Expertise',
      subtitle: 'Specialization in key aspects of international relations and diplomacy',
      principlesTitle: 'Working Principles',
      professionalismTitle: 'Professionalism',
      professionalismText: 'High standards in performing duties and compliance with diplomatic protocol',
      confidentialityTitle: 'Confidentiality',
      confidentialityText: 'Strict observance of confidentiality and protection of official information',
      neutralityTitle: 'Neutrality',
      neutralityText: 'Impartial approach and objectivity in international matters',
      expertiseAreas: [
        {
          title: "International Negotiations",
          description: "Experience in conducting complex negotiations at various levels, achieving mutually acceptable solutions.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          )
        },
        {
          title: "Intercultural Communication",
          description: "Understanding cultural characteristics and effective interaction with representatives of different countries.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          title: "Strategic Planning",
          description: "Development of long-term strategies for international cooperation and diplomatic initiatives.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          )
        },
        {
          title: "International Political Analysis",
          description: "Deep analysis of global political processes and their impact on international relations.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        }
      ]
    },
    fr: {
      title: 'Domaines d\'Expertise',
      subtitle: 'Spécialisation dans les aspects clés des relations internationales et de la diplomatie',
      principlesTitle: 'Principes de Travail',
      professionalismTitle: 'Professionnalisme',
      professionalismText: 'Normes élevées dans l\'exécution des fonctions et respect du protocole diplomatique',
      confidentialityTitle: 'Confidentialité',
      confidentialityText: 'Respect strict de la confidentialité et protection des informations officielles',
      neutralityTitle: 'Neutralité',
      neutralityText: 'Approche impartiale et objectivité dans les questions internationales',
      expertiseAreas: [
        {
          title: "Négociations Internationales",
          description: "Expérience dans la conduite de négociations complexes à différents niveaux, atteignant des solutions mutuellement acceptables.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          )
        },
        {
          title: "Communication Interculturelle",
          description: "Compréhension des caractéristiques culturelles et interaction efficace avec les représentants de différents pays.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          title: "Planification Stratégique",
          description: "Développement de stratégies à long terme pour la coopération internationale et les initiatives diplomatiques.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          )
        },
        {
          title: "Analyse Politique Internationale",
          description: "Analyse approfondie des processus politiques mondiaux et de leur impact sur les relations internationales.",
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        }
      ]
    }
  };

  const {
    title,
    subtitle,
    principlesTitle,
    professionalismTitle,
    professionalismText,
    confidentialityTitle,
    confidentialityText,
    neutralityTitle,
    neutralityText,
    expertiseAreas
  } = t(translations);

  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          
          {/* Заголовок секции - стиль из Recognition */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-px bg-gold"></div>
            </div>
            <h2 className="text-4xl font-medium text-navy mb-6">{title}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg font-light">
              {subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:bg-navy/5 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-navy flex-shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-gray-200">
            <div className="max-w-4xl mx-auto text-center">
              {/* Заголовок принципов работы - стиль из Recognition */}
              <div className="mb-10">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-px bg-gold"></div>
                </div>
                <h3 className="text-2xl font-medium text-navy mb-6">{principlesTitle}</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="text-navy font-bold text-4xl">01</div>
                  <h4 className="font-medium text-gray-900">{professionalismTitle}</h4>
                  <p className="text-gray-600 text-sm">{professionalismText}</p>
                </div>
                <div className="space-y-4">
                  <div className="text-navy font-bold text-4xl">02</div>
                  <h4 className="font-medium text-gray-900">{confidentialityTitle}</h4>
                  <p className="text-gray-600 text-sm">{confidentialityText}</p>
                </div>
                <div className="space-y-4">
                  <div className="text-navy font-bold text-4xl">03</div>
                  <h4 className="font-medium text-gray-900">{neutralityTitle}</h4>
                  <p className="text-gray-600 text-sm">{neutralityText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;