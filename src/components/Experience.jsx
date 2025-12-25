import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const translations = {
    ru: {
      title: 'Профессиональный опыт',
      subtitle: '20 лет работы на международной арене, участие в ключевых дипломатических миссиях и переговорах высшего уровня.',
      statsTitle: 'Международная деятельность в цифрах',
      competenciesTitle: 'Международные компетенции',
      competenciesText: 'Экспертиза в области международного права, дипломатического протокола, межкультурной коммуникации и стратегического планирования.',
      discussCooperation: 'Обсудить сотрудничество',
      achievementsTitle: 'Ключевые достижения',
      experiences: [
        {
          period: "2018 — Настоящее время",
          position: "Советник по международным отношениям",
          organization: "Министерство иностранных дел Российской Федерации",
          location: "Москва, Россия",
          description: "Координация международных проектов высшего уровня, участие в дипломатических миссиях, разработка стратегий международного сотрудничества.",
          achievements: [
            "Руководство 10+ международными инициативами",
            "Участие в саммитах G20 и ООН",
            "Разработка стратегических документов по международным отношениям",
            "Координация межправительственных переговоров"
          ],
          category: "Международная дипломатия"
        },
        {
          period: "2014 — 2018",
          position: "Первый секретарь",
          organization: "Постоянное представительство при международных организациях",
          location: "Женева, Швейцария",
          description: "Представление национальных интересов на международной арене, участие в многосторонних переговорах и дипломатических миссиях.",
          achievements: [
            "Участие в 50+ международных конференциях",
            "Подготовка аналитических материалов для правительства",
            "Координация с международными партнерами",
            "Организация дипломатических встреч высокого уровня"
          ],
          category: "Международные организации"
        },
        {
          period: "2010 — 2014",
          position: "Советник-посланник",
          organization: "Посольство Российской Федерации",
          location: "Берлин, Германия",
          description: "Развитие двусторонних отношений, координация визитов высокого уровня, анализ политической и экономической ситуации.",
          achievements: [
            "Организация 20+ официальных визитов",
            "Укрепление экономического сотрудничества",
            "Анализ политических процессов",
            "Развитие культурных связей"
          ],
          category: "Дипломатическая служба"
        },
        {
          period: "2005 — 2010",
          position: "Третий секретарь",
          organization: "Департамент международных организаций",
          location: "Москва, Россия",
          description: "Подготовка аналитических материалов, участие в международных конференциях, сопровождение дипломатических делегаций.",
          achievements: [
            "Подготовка 100+ аналитических записок",
            "Участие в 30+ международных конференциях",
            "Сопровождение дипломатических миссий",
            "Координация работы с международными партнерами"
          ],
          category: "Международное сотрудничество"
        }
      ],
      stats: [
        { 
          number: "20", 
          hasPlus: true,
          label: "Лет международной деятельности", 
          rotation: "-rotate-1" 
        },
        { 
          number: "50", 
          hasPlus: true,
          label: "Дипломатических миссий", 
          rotation: "rotate-1" 
        },
        { 
          number: "15", 
          hasPlus: true,
          label: "Международных наград", 
          rotation: "-rotate-1" 
        },
        { 
          number: "4", 
          hasPlus: false,
          label: "Рабочих языка", 
          rotation: "rotate-1" 
        }
      ]
    },
    en: {
      title: 'Professional Experience',
      subtitle: '20 years of work on the international stage, participation in key diplomatic missions and high-level negotiations.',
      statsTitle: 'International Activity in Numbers',
      competenciesTitle: 'International Competencies',
      competenciesText: 'Expertise in international law, diplomatic protocol, intercultural communication and strategic planning.',
      discussCooperation: 'Discuss Cooperation',
      achievementsTitle: 'Key Achievements',
      experiences: [
        {
          period: "2018 — Present",
          position: "Advisor on International Relations",
          organization: "Ministry of Foreign Affairs of the Russian Federation",
          location: "Moscow, Russia",
          description: "Coordination of high-level international projects, participation in diplomatic missions, development of international cooperation strategies.",
          achievements: [
            "Management of 10+ international initiatives",
            "Participation in G20 and UN summits",
            "Development of strategic documents on international relations",
            "Coordination of intergovernmental negotiations"
          ],
          category: "International Diplomacy"
        },
        {
          period: "2014 — 2018",
          position: "First Secretary",
          organization: "Permanent Mission to International Organizations",
          location: "Geneva, Switzerland",
          description: "Representation of national interests on the international stage, participation in multilateral negotiations and diplomatic missions.",
          achievements: [
            "Participation in 50+ international conferences",
            "Preparation of analytical materials for the government",
            "Coordination with international partners",
            "Organization of high-level diplomatic meetings"
          ],
          category: "International Organizations"
        },
        {
          period: "2010 — 2014",
          position: "Minister-Counselor",
          organization: "Embassy of the Russian Federation",
          location: "Berlin, Germany",
          description: "Development of bilateral relations, coordination of high-level visits, analysis of political and economic situation.",
          achievements: [
            "Organization of 20+ official visits",
            "Strengthening of economic cooperation",
            "Analysis of political processes",
            "Development of cultural ties"
          ],
          category: "Diplomatic Service"
        },
        {
          period: "2005 — 2010",
          position: "Third Secretary",
          organization: "Department of International Organizations",
          location: "Moscow, Russia",
          description: "Preparation of analytical materials, participation in international conferences, accompaniment of diplomatic delegations.",
          achievements: [
            "Preparation of 100+ analytical notes",
            "Participation in 30+ international conferences",
            "Accompaniment of diplomatic missions",
            "Coordination of work with international partners"
          ],
          category: "International Cooperation"
        }
      ],
      stats: [
        { 
          number: "20", 
          hasPlus: true,
          label: "Years of international activity", 
          rotation: "-rotate-1" 
        },
        { 
          number: "50", 
          hasPlus: true,
          label: "Diplomatic missions", 
          rotation: "rotate-1" 
        },
        { 
          number: "15", 
          hasPlus: true,
          label: "International awards", 
          rotation: "-rotate-1" 
        },
        { 
          number: "4", 
          hasPlus: false,
          label: "Working languages", 
          rotation: "rotate-1" 
        }
      ]
    },
    fr: {
      title: 'Expérience Professionnelle',
      subtitle: '20 ans de travail sur la scène internationale, participation à des missions diplomatiques clés et à des négociations de haut niveau.',
      statsTitle: 'Activité Internationale en Chiffres',
      competenciesTitle: 'Compétences Internationales',
      competenciesText: 'Expertise en droit international, protocole diplomatique, communication interculturelle et planification stratégique.',
      discussCooperation: 'Discuter de la coopération',
      achievementsTitle: 'Réalisations Clés',
      experiences: [
        {
          period: "2018 — Présent",
          position: "Conseiller en relations internationales",
          organization: "Ministère des Affaires étrangères de la Fédération de Russie",
          location: "Moscou, Russie",
          description: "Coordination de projets internationaux de haut niveau, participation à des missions diplomatiques, élaboration de stratégies de coopération internationale.",
          achievements: [
            "Gestion de 10+ initiatives internationales",
            "Participation aux sommets du G20 et de l'ONU",
            "Élaboration de documents stratégiques sur les relations internationales",
            "Coordination des négociations intergouvernementales"
          ],
          category: "Diplomatie Internationale"
        },
        {
          period: "2014 — 2018",
          position: "Premier Secrétaire",
          organization: "Mission permanente auprès des organisations internationales",
          location: "Genève, Suisse",
          description: "Représentation des intérêts nationaux sur la scène internationale, participation à des négociations multilatérales et à des missions diplomatiques.",
          achievements: [
            "Participation à 50+ conférences internationales",
            "Préparation de documents analytiques pour le gouvernement",
            "Coordination avec les partenaires internationaux",
            "Organisation de réunions diplomatiques de haut niveau"
          ],
          category: "Organisations Internationales"
        },
        {
          period: "2010 — 2014",
          position: "Conseiller-Ministre",
          organization: "Ambassade de la Fédération de Russie",
          location: "Berlin, Allemagne",
          description: "Développement des relations bilatérales, coordination des visites de haut niveau, analyse de la situation politique et économique.",
          achievements: [
            "Organisation de 20+ visites officielles",
            "Renforcement de la coopération économique",
            "Analyse des processus politiques",
            "Développement des liens culturels"
          ],
          category: "Service Diplomatique"
        },
        {
          period: "2005 — 2010",
          position: "Troisième Secrétaire",
          organization: "Département des organisations internationales",
          location: "Moscou, Russie",
          description: "Préparation de documents analytiques, participation à des conférences internationales, accompagnement de délégations diplomatiques.",
          achievements: [
            "Préparation de 100+ notes analytiques",
            "Participation à 30+ conférences internationales",
            "Accompagnement de missions diplomatiques",
            "Coordination du travail avec les partenaires internationaux"
          ],
          category: "Coopération Internationale"
        }
      ],
      stats: [
        { 
          number: "20", 
          hasPlus: true,
          label: "Années d'activité internationale", 
          rotation: "-rotate-1" 
        },
        { 
          number: "50", 
          hasPlus: true,
          label: "Missions diplomatiques", 
          rotation: "rotate-1" 
        },
        { 
          number: "15", 
          hasPlus: true,
          label: "Récompenses internationales", 
          rotation: "-rotate-1" 
        },
        { 
          number: "4", 
          hasPlus: false,
          label: "Langues de travail", 
          rotation: "rotate-1" 
        }
      ]
    }
  };

  const {
    title,
    subtitle,
    statsTitle,
    competenciesTitle,
    competenciesText,
    discussCooperation,
    achievementsTitle,
    experiences,
    stats
  } = t(translations);

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          
          {/* Заголовок секции */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-16 h-px bg-gold mr-6"></div>
              <h2 className="text-4xl font-medium text-navy">{title}</h2>
            </div>
            <p className="text-gray-600 text-lg font-light max-w-3xl">
              {subtitle}
            </p>
          </div>

          {/* Список опыта работы */}
          <div className="mb-20">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className="mb-12 pb-12 border-b border-gray-100 last:border-0 last:pb-0 last:mb-0"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-6 lg:mb-0 lg:w-1/4">
                    <div className="relative inline-block mb-4 group">
                      <div className="absolute inset-0 transform -skew-x-3 group-hover:bg-gold/10 transition-all duration-300"></div>
                      <span className="relative px-5 py-2.5 text-navy text-sm font-serif font-medium tracking-wider">
                        {experience.period}
                      </span>
                      <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-gold/30 via-gold to-gold/30"></div>
                    </div>
                    
                    <div className="flex items-center mt-4">
                      <div className="w-8 h-px bg-gold/50 mr-3"></div>
                      <span className="text-gold/80 text-xs tracking-widest uppercase font-light">{experience.category}</span>
                    </div>
                  </div>
                  
                  <div className="lg:w-3/4">
                    <h3 className="text-2xl font-medium text-navy mb-3">{experience.position}</h3>
                    <h4 className="text-xl text-gold mb-2 font-serif">{experience.organization}</h4>
                    <div className="flex items-center text-gray-600 mb-6">
                      <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-light">{experience.location}</span>
                    </div>
                    
                    <p className="text-gray-700 font-light leading-relaxed mb-8">
                      {experience.description}
                    </p>
                    
                    {/* Ключевые достижения */}
                    {experience.achievements && experience.achievements.length > 0 && (
                      <div className="bg-gray-50/50 p-6 border border-gray-100 rounded-sm">
                        <h5 className="text-lg font-medium text-navy mb-4 flex items-center">
                          <svg className="w-5 h-5 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {achievementsTitle}
                        </h5>
                        <ul className="space-y-3">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                              <span className="text-gray-700 font-light">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Статистика - Международная деятельность в цифрах */}


          <div className="bg-gray-50/30 p-4 sm:p-6 md:p-10 border border-gray-100 rounded-sm">
  <div className="flex items-center mb-6 md:mb-10">
    <div className="w-8 sm:w-10 md:w-12 h-px bg-gold mr-3 sm:mr-4"></div>
    <h3 className="text-xl sm:text-2xl md:text-2xl font-medium text-navy">
      {statsTitle}
    </h3>
  </div>
  
  {/* Адаптивный блок статистики - мобильный вариант с вертикальным расположением */}
  <div className="flex flex-col sm:hidden space-y-4">
    {stats.map((stat, index) => (
      <div key={index} className="relative p-4 bg-white/50 rounded border border-gray-200/50">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <p className="text-3xl font-serif font-light text-navy">
              {stat.number}
              {stat.hasPlus && <span className="text-gold text-lg">+</span>}
            </p>
            <div className="w-12 h-px bg-gold/50 my-2"></div>
          </div>
          <p className="text-gray-700 font-serif text-sm tracking-wide text-right max-w-[140px]">
            {stat.label}
          </p>
        </div>
      </div>
    ))}
  </div>
  
  {/* Десктопный вариант */}
  <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
    {stats.map((stat, index) => (
      <div key={index} className="relative p-4 md:p-6 text-center group">
        <div className={`absolute inset-0 border border-gold/10 rounded-sm transform ${stat.rotation} group-hover:rotate-0 transition-transform duration-300`}></div>
        <p className="text-4xl md:text-5xl font-serif font-light text-navy mb-3 relative">
          {stat.number}
          {stat.hasPlus && <span className="text-gold">+</span>}
        </p>
        <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-3"></div>
        <p className="text-gray-700 font-serif text-sm tracking-wide">{stat.label}</p>
      </div>
    ))}
  </div>
</div>

          {/* Дополнительная информация */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-8 lg:mb-0">
                <h3 className="text-2xl font-medium text-navy mb-4">{competenciesTitle}</h3>
                <p className="text-gray-600 font-light max-w-xl">
                  {competenciesText}
                </p>
              </div>

              <a 
                href="#contact" 
                className="relative px-10 py-4 bg-navy text-white font-light tracking-wide transition-all duration-300 text-center group overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 40px) 100%, 0% 100%)' }}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#contact');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 right-0 w-40 h-2 bg-gold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700" style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0% 100%)' }}></div>
                <span className="relative flex items-center justify-center space-x-3">
                  <span>{discussCooperation}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;