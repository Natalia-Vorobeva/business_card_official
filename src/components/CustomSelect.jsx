// CustomSelect.jsx
import React, { useState, useRef, useEffect } from 'react';

const CustomSelect = ({ 
  value, 
  onChange, 
  options, 
  placeholder, 
  className = '',
  required = false,
  name = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const selectRef = useRef(null);
  const buttonRef = useRef(null);

	  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleSelect = (optionValue) => {
    setSelectedValue(optionValue);
    
    // Создаем искусственное событие для совместимости с handleChange
    const fakeEvent = {
      target: {
        name: name,
        value: optionValue,
        type: 'select-one'
      }
    };
    
    onChange(fakeEvent);
    setIsOpen(false);
    
    // Фокус на кнопке для доступности
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(opt => opt.value === selectedValue);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  return (
    <div ref={selectRef} className="relative">
     
      <button
        ref={buttonRef}
        type="button"
        onClick={handleButtonClick}
        onKeyDown={handleKeyDown}
        className={`w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 text-left text-white rounded focus:border-gold/70 focus:ring-1 focus:ring-gold/20 outline-none transition-all duration-300 flex justify-between items-center ${className} ${
          isOpen ? 'border-gold/70 ring-1 ring-gold/20' : ''
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={`${name}-label`}
        required={required}
      >
        <span className={`truncate ${!selectedValue ? 'text-gray-500' : ''}`}>
          {displayText}
        </span>
        <svg 
          className={`w-5 h-5 text-gold/70 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
           {isOpen && (
        <div 
          className="absolute z-50 w-full mt-1 bg-gray-800 border border-gray-700/50 rounded-lg shadow-lg max-h-60 overflow-auto"
          role="listbox"
          aria-labelledby={`${name}-label`}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value, option.label)}
              className={`w-full px-4 py-3 text-left hover:bg-gray-700/50 transition-colors duration-150 focus:outline-none focus:bg-gray-700/50 ${
                selectedValue === option.value 
                  ? 'bg-gold/10 text-gold' 
                  : 'text-white'
              }`}
              role="option"
              aria-selected={selectedValue === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}      
     
      <select
        name={name}
        value={selectedValue}
        onChange={() => {}} 
        className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
        required={required}
        tabIndex={-1}
      >
        <option value="">{placeholder}</option>
        {options.filter(opt => opt.value !== '').map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;