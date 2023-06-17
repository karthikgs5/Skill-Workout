function validateEmail(email) {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailPattern.test(email);
  }
  
  // Usage example
  const email = 'test@example.com';
  const isValidEmail = validateEmail(email);
  console.log('Is valid email:', isValidEmail);
  