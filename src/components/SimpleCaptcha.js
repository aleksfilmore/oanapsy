import React, { useState, useEffect } from 'react';

const SimpleCaptcha = ({ onVerify, resetTrigger }) => {
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  // Generez un cod captcha simplu cu operații matematice
  const generateCaptcha = () => {
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, answer;

    switch (operation) {
      case '+':
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        answer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * 30) + 10;
        num2 = Math.floor(Math.random() * 10) + 1;
        answer = num1 - num2;
        break;
      case '*':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 5) + 1;
        answer = num1 * num2;
        break;
      default:
        num1 = 5;
        num2 = 3;
        answer = 8;
    }

    return {
      question: `${num1} ${operation} ${num2} = ?`,
      answer: answer.toString()
    };
  };

  const [captcha, setCaptcha] = useState(() => generateCaptcha());

  const resetCaptcha = React.useCallback(() => {
    const newCaptcha = generateCaptcha();
    setCaptcha(newCaptcha);
    setUserInput('');
    setIsVerified(false);
    setError('');
  }, []);

  useEffect(() => {
    // Reset captcha când componenta se resetează
    if (resetTrigger) {
      resetCaptcha();
    }
  }, [resetTrigger, resetCaptcha]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    setError('');

    // Verificare automată când utilizatorul a introdus răspunsul
    if (value === captcha.answer) {
      setIsVerified(true);
      onVerify(true);
    } else {
      setIsVerified(false);
      onVerify(false);
    }
  };

  const handleRefresh = () => {
    resetCaptcha();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-sage-700">
          Verificare anti-spam *
        </label>
        <button
          type="button"
          onClick={handleRefresh}
          className="flex items-center text-sage-600 hover:text-sage-800 text-sm transition-colors duration-200"
          title="Generează o nouă verificare"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reîmprospătează
        </button>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Display captcha question */}
        <div className="flex-1">
          <div className="bg-gradient-to-r from-sage-100 to-golden-honey/20 border border-sage-200 rounded-lg px-4 py-3 font-mono text-lg text-center select-none">
            <span className="text-sage-800 font-semibold tracking-wider">
              {captcha.question}
            </span>
          </div>
        </div>
        
        {/* Input field */}
        <div className="w-24">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="?"
            className={`w-full px-3 py-3 text-center text-lg font-mono border rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors duration-200 ${
              isVerified 
                ? 'border-green-500 bg-green-50 text-green-700' 
                : error 
                ? 'border-red-500 bg-red-50' 
                : 'border-sage-300 bg-white'
            }`}
            maxLength="3"
          />
        </div>
        
        {/* Status indicator */}
        <div className="w-8 h-8 flex items-center justify-center">
          {isVerified ? (
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ) : userInput && userInput !== captcha.answer ? (
            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          ) : null}
        </div>
      </div>
      
      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}
      
      <p className="text-sage-600 text-xs">
        Rezolvă operația matematică pentru a demonstra că nu ești un robot.
      </p>
    </div>
  );
};

export default SimpleCaptcha;
