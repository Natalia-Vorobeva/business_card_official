import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
	const { t } = useLanguage();

	const translations = {
		ru: {
			subtitle: 'Международный дипломат • Советник',
			firstName: 'Александр',
			lastName: 'Петров',
			description: 'Государственный служащий международного уровня с экспертизой в дипломатии, стратегических переговорах и международных отношениях',
			experience: 'Более 20 лет опыта',
			countries: 'Работа в 15+ странах',
			awards: 'Международные награды',
			contactBtn: 'Связаться для консультации',
			experienceBtn: 'Ознакомиться с опытом'
		},
		en: {
			subtitle: 'International Diplomat • Advisor',
			firstName: 'Alexander',
			lastName: 'Petrov',
			description: 'International civil servant with expertise in diplomacy, strategic negotiations, and international relations',
			experience: 'Over 20 years of experience',
			countries: 'Worked in 15+ countries',
			awards: 'International awards',
			contactBtn: 'Contact for consultation',
			experienceBtn: 'View experience'
		},
		fr: {
			subtitle: 'Diplomate international • Conseiller',
			firstName: 'Alexandre',
			lastName: 'Petrov',
			description: 'Fonctionnaire international spécialisé en diplomatie, négociations stratégiques et relations internationales',
			experience: 'Plus de 20 ans d\'expérience',
			countries: 'Travail dans 15+ pays',
			awards: 'Récompenses internationales',
			contactBtn: 'Contact pour consultation',
			experienceBtn: 'Voir l\'expérience'
		}
	};

	const {
		subtitle,
		firstName,
		lastName,
		description,
		experience,
		countries,
		awards,
		contactBtn,
		experienceBtn
	} = t(translations);

	return (
		<section id="home" className="pt-36 pb-28 md:pt-44 md:pb-36 bg-white relative overflow-hidden bg-pattern">
			{/* Декоративные элементы */}
			<div className="absolute top-24 right-12 w-64 h-64 border border-gold/10 rounded-full"></div>
			<div className="absolute bottom-24 left-12 w-40 h-40 border border-gold/10 rounded-full"></div>

			<div className="section-padding relative z-10">
				<div className="max-w-5xl mx-auto">
					<div className="mb-12">
						<div className="flex items-center mb-10">
							<div className="w-16 h-px bg-gold mr-4"></div>
							<span className="text-sm tracking-widest text-gold uppercase font-light">{subtitle}</span>
						</div>

						<h1 className="text-5xl md:text-6xl lg:text-7xl text-navy mb-8 leading-tight text-balance font-medium">
							{firstName}
							<br />
							<span className="text-gold">{lastName}</span>
						</h1>

						<h2 className="text-2xl md:text-3xl text-gray-700 font-light mb-12 max-w-3xl leading-relaxed">
							{description}
						</h2>

						<div className="space-y-4 mt-8 sm:mt-12 md:mt-16 sm:flex sm:space-y-0 sm:space-x-6">
							<div className="flex items-center space-x-3 pb-4 border-b border-gray-200 sm:border-0 sm:pb-0">
								<div className="w-3 h-3 bg-gold/70 rounded-full flex-shrink-0"></div>
								<span className="text-sm font-medium text-gray-700">{experience}</span>
							</div>

							<div className="flex items-center space-x-3 pb-4 border-b border-gray-200 sm:border-0 sm:pb-0">
								<div className="w-3 h-3 bg-gold/70 rounded-full flex-shrink-0"></div>
								<span className="text-sm font-medium text-gray-700">{countries}</span>
							</div>

							<div className="flex items-center space-x-3">
								<div className="w-3 h-3 bg-gold/70 rounded-full flex-shrink-0"></div>
								<span className="text-sm font-medium text-gray-700">{awards}</span>
							</div>
						</div>


					</div>

					<div className="flex flex-col sm:flex-row gap-6 mt-12">
						<a
							href="#contact"
							className="relative px-10 py-5 bg-navy text-white font-light tracking-wide transition-all duration-300 text-center group overflow-hidden"
							style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
							onClick={(e) => {
								e.preventDefault();
								const target = document.querySelector('#contact');
								if (target) {
									target.scrollIntoView({ behavior: 'smooth' });
								}
							}}
						>
							<div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
							<div className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold to-transparent transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700"></div>
							<span className="relative flex items-center justify-center space-x-3">
								<span>{contactBtn}</span>
								<svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:text-gold transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</span>
						</a>

						<a
							href="#experience"
							className="relative px-10 py-5 border border-navy text-navy font-light tracking-wide hover:bg-navy hover:text-white transition-all duration-300 text-center group overflow-hidden"
							style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0% 100%)' }}
							onClick={(e) => {
								e.preventDefault();
								const target = document.querySelector('#experience');
								if (target) {
									target.scrollIntoView({ behavior: 'smooth' });
								}
							}}
						>
							<div className="absolute left-0 top-0 w-12 h-full bg-navy transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
							<span className="relative flex items-center justify-center space-x-3">
								<span>{experienceBtn}</span>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
								</svg>
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;