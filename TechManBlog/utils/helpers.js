// utils/helpers.js

const bcrypt = require('bcrypt');

const helpers = {
  // Hash password using bcrypt
  hashPassword: async (password) => {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      console.error('Error hashing password:', error);
      throw new Error('Error hashing password');
    }
  },

  // Compare plain text password with hashed password
  comparePasswords: async (plainPassword, hashedPassword) => {
    try {
      const match = await bcrypt.compare(plainPassword, hashedPassword);
      return match;
    } catch (error) {
      console.error('Error comparing passwords:', error);
      throw new Error('Error comparing passwords');
    }
  },

  // Example helper function
  exampleHelper: () => {
    return 'This is an example helper function';
  },

  // Add more helper functions here as needed
};

module.exports = helpers;
