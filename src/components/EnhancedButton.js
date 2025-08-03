// Fisier: src/components/EnhancedButton.js
// Button component cu micro-interactiuni avansate

import React, { useState } from 'react';

const EnhancedButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  loading = false,
  success = false,
  error = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses = `
    relative inline-flex items-center justify-center font-semibold rounded-xl
    transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-orange-500 to-amber-500 text-white
      hover:from-orange-600 hover:to-amber-600 focus:ring-orange-500
      shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-white text-terracotta border-2 border-terracotta
      hover:bg-terracotta hover:text-white focus:ring-terracotta
    `,
    success: `
      bg-green-500 text-white hover:bg-green-600 focus:ring-green-500
    `,
    danger: `
      bg-red-500 text-white hover:bg-red-600 focus:ring-red-500
    `
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${isPressed ? 'animate-button-press' : ''}
    ${success ? 'animate-success-pulse' : ''}
    ${error ? 'animate-error-shake' : ''}
    ${loading ? 'cursor-wait' : ''}
    ${className}
  `;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled || loading}
      {...props}
    >
      {/* Background ripple effect */}
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-200 rounded-xl" />
      
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Success checkmark */}
      {success && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
      
      {/* Content */}
      <span className={`${(loading || success) ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
        {children}
      </span>
    </button>
  );
};

export default EnhancedButton;
