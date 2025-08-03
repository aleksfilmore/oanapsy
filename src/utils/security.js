// Fisier: src/utils/security.js
// Utilitare pentru securitate și sanitizare

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/<[^>]*>?/gm, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .slice(0, 1000); // Limit length
};

export const sanitizeEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sanitized = sanitizeInput(email);
  return emailRegex.test(sanitized) ? sanitized : '';
};

export const sanitizePhone = (phone) => {
  return sanitizeInput(phone).replace(/[^\d+\-()s]/g, '');
};

// Rate limiting pentru formulare
class RateLimiter {
  constructor() {
    this.attempts = new Map();
  }

  isAllowed(identifier, maxAttempts = 5, windowMs = 15 * 60 * 1000) { // 5 attempts per 15 minutes
    const now = Date.now();
    const key = identifier;
    
    if (!this.attempts.has(key)) {
      this.attempts.set(key, []);
    }
    
    const attempts = this.attempts.get(key);
    
    // Remove old attempts
    const validAttempts = attempts.filter(time => now - time < windowMs);
    this.attempts.set(key, validAttempts);
    
    if (validAttempts.length >= maxAttempts) {
      return false;
    }
    
    // Add current attempt
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    
    return true;
  }

  getRemainingTime(identifier, windowMs = 15 * 60 * 1000) {
    const attempts = this.attempts.get(identifier) || [];
    if (attempts.length === 0) return 0;
    
    const oldestAttempt = Math.min(...attempts);
    const elapsed = Date.now() - oldestAttempt;
    return Math.max(0, windowMs - elapsed);
  }
}

export const formRateLimiter = new RateLimiter();

// Validare CAPTCHA simplu
export const generateSimpleCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operation = Math.random() > 0.5 ? '+' : '-';
  
  const question = `${num1} ${operation} ${num2} = ?`;
  const answer = operation === '+' ? num1 + num2 : num1 - num2;
  
  return { question, answer };
};

export const validateCaptcha = (userAnswer, correctAnswer) => {
  return parseInt(userAnswer) === correctAnswer;
};
