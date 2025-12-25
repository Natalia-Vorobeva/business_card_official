import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translationsContacts } from '../constants/constants';

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
    <section id="contact" className="py-24 bg-navy">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-px bg-gold/70"></div>
            </div>
            <h2 className="text-4xl font-medium text-white mb-6">{title}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
              {subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Левая колонка - Контактная информация */}
            <div className="lg:col-span-1 space-y-8">
              {/* Блок контактов */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700/50 rounded-lg">
                <h3 className="text-2xl font-medium text-white mb-8">{contactInfo}</h3>
                
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-gold/15 transition-all duration-300">
                      <svg className="w-6 h-6 text-gold/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89-3.12a2 2 0 012.22 0L21 8m-18 0v9a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l6-3.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">{email}</h4>
                      <p className="text-gray-300 font-light">a.petrov@govdiplomat.ru</p>
                      <p className="text-gray-400 text-sm font-light mt-2">{emailFor}</p>
                    </div>
                  </div>

                  {/* Телефон */}
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-gold/15 transition-all duration-300">
                      <svg className="w-6 h-6 text-gold/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">{phone}</h4>
                      <p className="text-gray-300 font-light">+7 (495) XXX-XX-XX</p>
                      <p className="text-gray-400 text-sm font-light mt-2">{phoneFor}</p>
                    </div>
                  </div>

                  {/* Адрес */}
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-gold/15 transition-all duration-300">
                      <svg className="w-6 h-6 text-gold/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">{address}</h4>
                      <p className="text-gray-300 font-light">
                        {language === 'ru' ? 'Москва, Смоленская-Сенная пл., 32/34' : 
                         language === 'en' ? 'Moscow, Smolenskaya-Sennaya sq., 32/34' : 
                         'Moscou, Place Smolenskaya-Sennaya, 32/34'}
                      </p>
                      <p className="text-gray-400 text-sm font-light mt-2">{addressFor}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Часы работы */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700/50 rounded-lg">
                <h3 className="text-2xl font-medium text-white mb-6">{workHours}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700/50">
                    <span className="text-gray-300 font-light">{monThu}</span>
                    <span className="text-gold/90 font-medium">10:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700/50">
                    <span className="text-gray-300 font-light">{fri}</span>
                    <span className="text-gold/90 font-medium">10:00 — 17:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-light">{appointment}</span>
                    <span className="text-gold/90 font-medium">{required}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка - Форма */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700/50 rounded-lg">
                <h3 className="text-2xl font-medium text-white mb-8">{formTitle}</h3>
                
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  noValidate // Убираем браузерную валидацию
                  autoComplete="off" // Отключаем автозаполнение
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Имя */}
                    <div>
                      <label className="block text-gray-300 font-light mb-2">{fullName}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-gold/70 focus:ring-1 focus:ring-gold/20 outline-none transition-all duration-300 rounded"
                        placeholder={emailPlaceholder}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-300 font-light mb-2">{yourEmail}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-gold/70 focus:ring-1 focus:ring-gold/20 outline-none transition-all duration-300 rounded"
                        placeholder={emailInputPlaceholder}
                        required
                      />
                    </div>
                  </div>

                  {/* Организация */}
                  <div>
                    <label className="block text-gray-300 font-light mb-2">{organization}</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-gold/70 focus:ring-1 focus:ring-gold/20 outline-none transition-all duration-300 rounded"
                      placeholder={orgPlaceholder}
                    />
                  </div>

                  {/* Тема */}
                  <div>
                    <label className="block text-gray-300 font-light mb-2">{subject}</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 text-white focus:border-gold/70 focus:ring-1 focus:ring-gold/20 outline-none transition-all duration-300 rounded appearance-none"
                      required
                    >
                      <option value="">{selectSubject}</option>
                      <option value="cooperation">{cooperation}</option>
                      <option value="invitation">{invitation}</option>
                      <option value="consultation">{consultation}</option>
                      <option value="other">{other}</option>
                    </select>
                  </div>

                  {/* Сообщение */}
                  <div>
                    <label className="block text-gray-300 font-light mb-2">{message}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:border-gold/70 focus:ring-1 focus:ring-gold/20 outline-none transition-all duration-300 rounded resize-none"
                      placeholder={messagePlaceholder}
                      required
                    ></textarea>
                  </div>

                  {/* Кнопка отправки */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 bg-gold/90 text-navy font-medium tracking-wide transition-all duration-300 relative group overflow-hidden rounded ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gold'
                      }`}
                    >
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative flex items-center justify-center space-x-3">
                        <span>{isSubmitting ? sending : send}</span>
                        {!isSubmitting && (
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        )}
                      </span>
                    </button>
                    <p className="text-gray-500 text-xs font-light mt-3 text-center">
                      {requiredFields}
                    </p>
                  </div>
                </form>
              </div>

              {/* Информационное сообщение */}
              <div className="text-center mt-8 pt-8 border-t border-gray-700/50">
                <p className="text-gray-400 font-light text-sm max-w-3xl mx-auto">
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
          <div className="bg-gray-800 border border-gold/20 rounded-lg max-w-md w-full p-8 transform transition-all duration-300 scale-100">
            <div className="text-center">
              {/* Иконка успеха */}
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gold/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-medium text-white mb-4">{successTitle}</h3>
              <p className="text-gray-300 font-light mb-8">{successText}</p>
              
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 bg-gold/90 text-navy font-medium rounded hover:bg-gold transition-all duration-300"
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

export default Contact