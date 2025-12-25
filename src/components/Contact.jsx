import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translationsContacts } from '../constants/constants';
import CustomSelect from './CustomSelect';

const Contact = () => {
	const { language, t } = useLanguage();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		organization: '',
		subject: '',
		message: ''
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		title,
		subtitle,
		contactInfo,
		email,
		emailFor,
		phone,
		phoneFor,
		address,
		addressFor,
		workHours,
		monThu,
		fri,
		appointment,
		required,
		formTitle,
		fullName,
		emailPlaceholder,
		yourEmail,
		emailInputPlaceholder,
		organization,
		orgPlaceholder,
		subject,
		selectSubject,
		cooperation,
		invitation,
		consultation,
		other,
		message,
		messagePlaceholder,
		send,
		requiredFields,
		info,
		successTitle,
		successText,
		close,
		sending
	} = t(translationsContacts);

	// const subjectOptions = [
	// 	{ value: '', label: selectSubject },
	// 	{ value: 'cooperation', label: cooperation },
	// 	{ value: 'invitation', label: invitation },
	// 	{ value: 'consultation', label: consultation },
	// 	{ value: 'other', label: other },
	// ];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Имитация отправки
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			setFormData({
				name: '',
				email: '',
				organization: '',
				subject: '',
				message: ''
			});
		}, 1500);
	};

	return (
		<section id="contact" className="py-12 md:py-16 lg:py-24 bg-navy">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">

					{/* Заголовок секции */}
					<div className="text-center mb-8 md:mb-12 lg:mb-16">
						<div className="flex justify-center mb-4 md:mb-6">
							<div className="w-16 md:w-20 lg:w-24 h-px bg-gold/70"></div>
						</div>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4 md:mb-6">{title}</h2>
						<p className="text-gray-300 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto px-4">
							{subtitle}
						</p>
					</div>

					<div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
						{/* Левая колонка - Контактная информация */}
						<div className="lg:col-span-1 space-y-6 md:space-y-8">
							{/* Блок контактов */}
							<div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 border border-gray-700/50 rounded-lg">
								<h3 className="text-xl sm:text-2xl font-medium text-white mb-6 md:mb-8">{contactInfo}</h3>

								<div className="space-y-6 md:space-y-8">
									{/* Email */}
									<div className="flex items-start group">
										<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0 group-hover:bg-gold/15 transition-all duration-300">
											<svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89-3.12a2 2 0 012.22 0L21 8m-18 0v9a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l6-3.5" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<h4 className="text-base sm:text-lg font-medium text-white mb-1 sm:mb-2">{email}</h4>
											<p className="text-gray-300 font-light text-sm sm:text-base break-words">a.petrov@govdiplomat.ru</p>
											<p className="text-gray-400 text-xs sm:text-sm font-light mt-1 sm:mt-2">{emailFor}</p>
										</div>
									</div>

									{/* Телефон */}
									<div className="flex items-start group">
										<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0 group-hover:bg-gold/15 transition-all duration-300">
											<svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<h4 className="text-base sm:text-lg font-medium text-white mb-1 sm:mb-2">{phone}</h4>
											<p className="text-gray-300 font-light text-sm sm:text-base">+7 (495) XXX-XX-XX</p>
											<p className="text-gray-400 text-xs sm:text-sm font-light mt-1 sm:mt-2">{phoneFor}</p>
										</div>
									</div>

									{/* Адрес */}
									<div className="flex items-start group">
										<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-full flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0 group-hover:bg-gold/15 transition-all duration-300">
											<svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
										</div>
										<div className="flex-1 min-w-0">
											<h4 className="text-base sm:text-lg font-medium text-white mb-1 sm:mb-2">{address}</h4>
											<p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
												{language === 'ru' ? 'Москва, Смоленская-Сенная пл., 32/34' :
													language === 'en' ? 'Moscow, Smolenskaya-Sennaya sq., 32/34' :
														'Moscou, Place Smolenskaya-Sennaya, 32/34'}
											</p>
											<p className="text-gray-400 text-xs sm:text-sm font-light mt-1 sm:mt-2">{addressFor}</p>
										</div>
									</div>
								</div>
							</div>

							{/* Часы работы */}
							<div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 border border-gray-700/50 rounded-lg">
								<h3 className="text-xl sm:text-2xl font-medium text-white mb-4 sm:mb-6">{workHours}</h3>
								<div className="space-y-3 sm:space-y-4">
									<div className="flex justify-between items-center pb-3 sm:pb-4 border-b border-gray-700/50">
										<span className="text-gray-300 font-light text-sm sm:text-base">{monThu}</span>
										<span className="text-gold/90 font-medium text-sm sm:text-base">10:00 — 18:00</span>
									</div>
									<div className="flex justify-between items-center pb-3 sm:pb-4 border-b border-gray-700/50">
										<span className="text-gray-300 font-light text-sm sm:text-base">{fri}</span>
										<span className="text-gold/90 font-medium text-sm sm:text-base">10:00 — 17:00</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-gray-300 font-light text-sm sm:text-base">{appointment}</span>
										<span className="text-gold/90 font-medium text-sm sm:text-base">{required}</span>
									</div>
								</div>
							</div>
						</div>

						{/* Правая колонка - Форма */}
						<div className="lg:col-span-2">
							<div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 border border-gray-700/50 rounded-lg">
								<h3 className="text-xl sm:text-2xl font-medium text-white mb-6 md:mb-8">{formTitle}</h3>

								<form
									onSubmit={handleSubmit}
									className="space-y-4 sm:space-y-6"
									noValidate
									autoComplete="off"
								>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
										{/* Имя */}
										<div>
											<label className="block text-gray-300 font-light mb-2 text-sm sm:text-base">{fullName}</label>
											<input
												type="text"
												name="name"
												value={formData.name}
												onChange={handleChange}
												className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-gold/70 focus:ring-1 focus:ring-gold/20 outline-none transition-all duration-300 rounded text-sm sm:text-base"
												placeholder={emailPlaceholder}
												required
											/>
										</div>

										{/* Email */}
										<div>
											<label className="block text-gray-300 font-light mb-2 text-sm sm:text-base">{yourEmail}</label>
											<input
												type="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-gold/70 focus:ring-1 focus:ring-gold/20 outline-none transition-all duration-300 rounded text-sm sm:text-base"
												placeholder={emailInputPlaceholder}
												required
											/>
										</div>
									</div>

									{/* Организация */}
									<div>
										<label className="block text-gray-300 font-light mb-2 text-sm sm:text-base">{organization}</label>
										<input
											type="text"
											name="organization"
											value={formData.organization}
											onChange={handleChange}
											className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-gold/70 focus:ring-1 focus:ring-gold/20 outline-none transition-all duration-300 rounded text-sm sm:text-base"
											placeholder={orgPlaceholder}
										/>
									</div>

									{/* Тема - улучшенный select с кастомной стрелкой */}
									<div className="relative">
										<label className="block text-gray-300 font-light mb-2 text-sm sm:text-base">{subject}</label>
										<CustomSelect
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											options={[
												{ value: '', label: selectSubject },
												{ value: 'cooperation', label: cooperation },
												{ value: 'invitation', label: invitation },
												{ value: 'consultation', label: consultation },
												{ value: 'other', label: other },
											]}
											placeholder={selectSubject}
											required
										/>
									</div>

									{/* Сообщение */}
									<div>
										<label className="block text-gray-300 font-light mb-2 text-sm sm:text-base">{message}</label>
										<textarea
											name="message"
											value={formData.message}
											onChange={handleChange}
											rows="4"
											className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-gold/70 focus:ring-1 focus:ring-gold/20 outline-none transition-all duration-300 rounded resize-none text-sm sm:text-base"
											placeholder={messagePlaceholder}
											required
										></textarea>
									</div>

									{/* Кнопка отправки */}
									<div className="pt-2 sm:pt-4">
										<button
											type="submit"
											disabled={isSubmitting}
											className={`w-full py-3 sm:py-4 bg-gold/90 text-navy font-medium tracking-wide transition-all duration-300 relative group overflow-hidden rounded text-sm sm:text-base ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gold'
												}`}
										>
											<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
											<span className="relative flex items-center justify-center space-x-2 sm:space-x-3">
												<span>{isSubmitting ? sending : send}</span>
												{!isSubmitting && (
													<svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
													</svg>
												)}
											</span>
										</button>
										<p className="text-gray-500 text-xs font-light mt-2 sm:mt-3 text-center">
											{requiredFields}
										</p>
									</div>
								</form>
							</div>

							{/* Информационное сообщение */}
							<div className="text-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700/50">
								<p className="text-gray-400 font-light text-xs sm:text-sm max-w-3xl mx-auto px-2">
									{info}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Модальное окно успешной отправки */}
			{isSubmitted && (
				<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
					<div className="bg-gray-800 border border-gold/20 rounded-lg max-w-md w-full p-6 sm:p-8 transform transition-all duration-300 scale-100 mx-4">
						<div className="text-center">
							{/* Иконка успеха */}
							<div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
								<svg className="w-8 h-8 sm:w-10 sm:h-10 text-gold/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
								</svg>
							</div>

							<h3 className="text-xl sm:text-2xl font-medium text-white mb-3 sm:mb-4">{successTitle}</h3>
							<p className="text-gray-300 font-light text-sm sm:text-base mb-6 sm:mb-8 px-2">
								{successText}
							</p>

							<button
								onClick={() => setIsSubmitted(false)}
								className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gold/90 text-navy font-medium rounded hover:bg-gold transition-all duration-300 text-sm sm:text-base"
							>
								{close}
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Contact;