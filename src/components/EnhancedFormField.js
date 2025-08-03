// Fisier: src/components/EnhancedFormField.js
// Form field component cu animatii si validare

import React, { useState, useRef } from 'react';

const EnhancedFormField = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  success,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasContent, setHasContent] = useState(!!value);
  const inputRef = useRef();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setHasContent(!!value);
  };

  const handleChange = (e) => {
    setHasContent(!!e.target.value);
    onChange && onChange(e);
  };

  const labelClasses = `
    absolute left-3 transition-all duration-200 pointer-events-none
    ${isFocused || hasContent 
      ? 'top-0 text-xs bg-white px-1 text-terracotta transform -translate-y-1/2' 
      : 'top-1/2 text-base text-gray-500 transform -translate-y-1/2'
    }
    ${error ? 'text-red-500' : ''}
    ${success ? 'text-green-500' : ''}
  `;

  const inputClasses = `
    w-full px-4 py-3 border-2 rounded-lg transition-all duration-200
    focus:outline-none focus:ring-0 bg-white
    ${error 
      ? 'border-red-500 focus:border-red-500 animate-error-shake' 
      : success 
        ? 'border-green-500 focus:border-green-500' 
        : 'border-gray-300 focus:border-terracotta'
    }
    ${isFocused ? 'animate-glow' : ''}
    ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
    ${className}
  `;

  return (
    <div className="relative mb-6">
      {/* Input field */}
      <div className="relative">
        {type === 'textarea' ? (
          <textarea
            ref={inputRef}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={isFocused ? placeholder : ''}
            disabled={disabled}
            className={`${inputClasses} resize-none min-h-[120px]`}
            {...props}
          />
        ) : (
          <input
            ref={inputRef}
            type={type}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={isFocused ? placeholder : ''}
            disabled={disabled}
            className={inputClasses}
            {...props}
          />
        )}
        
        {/* Floating label */}
        <label className={labelClasses}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        
        {/* Success icon */}
        {success && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 animate-scale-in">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
        
        {/* Error icon */}
        {error && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 animate-scale-in">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Error message */}
      {error && (
        <p className="mt-2 text-sm text-red-500 animate-slide-in-left">
          {error}
        </p>
      )}
      
      {/* Success message */}
      {success && typeof success === 'string' && (
        <p className="mt-2 text-sm text-green-500 animate-slide-in-left">
          {success}
        </p>
      )}
    </div>
  );
};

export default EnhancedFormField;
