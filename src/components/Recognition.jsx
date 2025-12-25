import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Recognition = () => {
	const { t } = useLanguage();

	const translations = {
		ru: {
			title: 'Международное признание',
			subtitle: 'Награды, премии и признание за вклад в развитие международных отношений и дипломатии',
			awardLabel: 'Официальная награда',
			organizationsTitle: 'Международные организации',
			publicationsTitle: 'Международные публикации',
			publicationsText: 'Автор более 20 научных работ и аналитических статей по вопросам международных отношений и дипломатии',
			viewPublications: 'Смотреть публикации',
			requestList: 'Запросить список',
			recognitions: [
				{
					title: "Орден Дружбы",
					organization: "Российская Федерация",
					year: "2020",
					description: "За значительный вклад в укрепление международных связей"
				},
				{
					title: "Медаль за дипломатические заслуги",
					organization: "ООН",
					year: "2018",
					description: "За вклад в мирное разрешение международных конфликтов"
				},
				{
					title: "Премия за выдающиеся достижения",
					organization: "Европейский дипломатический корпус",
					year: "2016",
					description: "За развитие межкультурного диалога и сотрудничества"
				},
				{
					title: "Почетный знак",
					organization: "Министерство иностранных дел",
					year: "2014",
					description: "За многолетнюю безупречную службу"
				}
			],
			organizations: [
				{ name: "ООН", logo: "UN" },
				{ name: "ЕС", logo: "EU" },
				{ name: "Совет Европы", logo: "CE" },
				{ name: "ОБСЕ", logo: "OSCE" },
				{ name: "ШОС", logo: "SCO" },
				{ name: "БРИКС", logo: "BRICS" },
			]
		},
		en: {
			title: 'International Recognition',
			subtitle: 'Awards, prizes and recognition for contributions to the development of international relations and diplomacy',
			awardLabel: 'Official award',
			organizationsTitle: 'International Organizations',
			publicationsTitle: 'International Publications',
			publicationsText: 'Author of more than 20 scientific works and analytical articles on international relations and diplomacy',
			viewPublications: 'View publications',
			requestList: 'Request list',
			recognitions: [
				{
					title: "Order of Friendship",
					organization: "Russian Federation",
					year: "2020",
					description: "For significant contribution to strengthening international ties"
				},
				{
					title: "Medal for Diplomatic Merit",
					organization: "UN",
					year: "2018",
					description: "For contribution to peaceful resolution of international conflicts"
				},
				{
					title: "Outstanding Achievement Award",
					organization: "European Diplomatic Corps",
					year: "2016",
					description: "For development of intercultural dialogue and cooperation"
				},
				{
					title: "Honorary Badge",
					organization: "Ministry of Foreign Affairs",
					year: "2014",
					description: "For many years of impeccable service"
				}
			],
			organizations: [
				{ name: "UN", logo: "UN" },
				{ name: "EU", logo: "EU" },
				{ name: "Council of Europe", logo: "CE" },
				{ name: "OSCE", logo: "OSCE" },
				{ name: "SCO", logo: "SCO" },
				{ name: "BRICS", logo: "BRICS" },
			]
		},
		fr: {
			title: 'Reconnaissance Internationale',
			subtitle: 'Prix, récompenses et reconnaissance pour les contributions au développement des relations internationales et de la diplomatie',
			awardLabel: 'Récompense officielle',
			organizationsTitle: 'Organisations Internationales',
			publicationsTitle: 'Publications Internationales',
			publicationsText: 'Auteur de plus de 20 travaux scientifiques et articles analytiques sur les relations internationales et la diplomatie',
			viewPublications: 'Voir les publications',
			requestList: 'Demander la liste',
			recognitions: [
				{
					title: "Ordre de l'Amitié",
					organization: "Fédération de Russie",
					year: "2020",
					description: "Pour contribution significative au renforcement des liens internationaux"
				},
				{
					title: "Médaille du Mérite Diplomatique",
					organization: "ONU",
					year: "2018",
					description: "Pour contribution à la résolution pacifique des conflits internationaux"
				},
				{
					title: "Prix des Réalisations Exceptionnelles",
					organization: "Corps Diplomatique Européen",
					year: "2016",
					description: "Pour le développement du dialogue interculturel et de la coopération"
				},
				{
					title: "Insigne d'Honneur",
					organization: "Ministère des Affaires Étrangères",
					year: "2014",
					description: "Pour de nombreuses années de service impeccable"
				}
			],
			organizations: [
				{ name: "ONU", logo: "UN" },
				{ name: "UE", logo: "EU" },
				{ name: "Conseil de l'Europe", logo: "CE" },
				{ name: "OSCE", logo: "OSCE" },
				{ name: "OCS", logo: "SCO" },
				{ name: "BRICS", logo: "BRICS" },
			]
		}
	};

	const {
		title,
		subtitle,
		awardLabel,
		publicationsTitle,
		publicationsText,
		viewPublications,
		requestList,
		recognitions,
		organizations
	} = t(translations);

	return (
		<section id="recognition" className="py-24 bg-gray-50">
			<div className="section-padding">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-20">
						<div className="flex justify-center mb-6">
							<div className="w-24 h-px bg-gold"></div>
						</div>
						<h2 className="text-4xl font-medium text-navy mb-6">{title}</h2>
						<p className="text-gray-600 max-w-3xl mx-auto text-lg font-light">
							{subtitle}
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 mb-20">
						{recognitions.map((recognition, index) => (
							<div key={index} className="bg-white p-8 shadow-elegant border border-gray-100">
								<div className="flex justify-between items-start mb-6">
									<div>
										<h3 className="text-2xl font-medium text-navy mb-2">{recognition.title}</h3>
										<p className="text-gold font-light">{recognition.organization}</p>
									</div>
									<span className="text-3xl font-light text-gray-300">{recognition.year}</span>
								</div>
								<p className="text-gray-700 font-light leading-relaxed">{recognition.description}</p>
								<div className="mt-8 pt-6 border-t border-gray-100">
									<div className="flex items-center">
										<div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center mr-4">
											<svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
											</svg>
										</div>
										<p className="text-sm text-gray-600 font-light">{awardLabel}</p>
									</div>
								</div>
							</div>
						))}
					</div>




				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
  {organizations.map((org, index) => (
    <div 
      key={index} 
      className="relative p-5 flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50/50 border border-gray-100 rounded-sm shadow-sm hover:shadow-elegant transition-all duration-300 group"
    >
      {/* Золотая линия сверху */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Логотип в медальоне */}
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-gold/10 rounded-full transform -rotate-6 group-hover:rotate-6 transition-transform duration-300"></div>
        <div className="relative w-14 h-14 rounded-full bg-white border border-gold/20 flex items-center justify-center shadow-sm">
          <span className="text-navy font-bold text-base">{org.logo}</span>
        </div>
      </div>
      
      {/* Название с подчеркиванием */}
      <div className="text-center">
        <p className="text-gray-800 text-sm font-light mb-1 group-hover:text-navy transition-colors duration-300">
          {org.name}
        </p>
        <div className="w-4 h-px bg-gold/50 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Декоративные уголки */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  ))}
</div>


					

					<div className="mt-20 pt-12 border-t border-gray-200">
						<div className="max-w-4xl mx-auto">
							<div className="flex flex-col md:flex-row items-center justify-between">
								<div className="mb-8 md:mb-0">
									<h3 className="text-2xl font-medium text-navy mb-4">{publicationsTitle}</h3>
									<p className="text-gray-600 font-light max-w-md">
										{publicationsText}
									</p>
								</div>

								<div className="flex flex-col sm:flex-row gap-6">
									<div
										className="relative px-10 py-4 border border-navy text-navy font-light tracking-wide text-center overflow-hidden transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:text-gold"
										style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
									>
										<div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
										<span className="relative transition-colors duration-300">{viewPublications}</span>
									</div>

									<div
										className="relative px-10 py-4 bg-navy border border-transparent text-white font-light tracking-wide text-center overflow-hidden transition-all duration-500 hover:bg-transparent hover:border-gold hover:text-gold"
										style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
									>
										<div className="absolute inset-0 bg-gold/10 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
										<span className="relative transition-colors duration-300">{requestList}</span>
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

export default Recognition;